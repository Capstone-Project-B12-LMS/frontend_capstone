import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import jwtDecode from "jwt-decode";

import { setEmail, setPassword, setDecode } from "../redux/loginSlice";
import useLoginMutation from "../graphql/LoginMutation";

// Component

import { Button, Input, Spinner } from "../components";



const Login = () => {

  const [inputManager,setInputManger] = useState({
    emailForm: {
      rule:"Email format doesn't match",
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      match: true
    },
    passwordForm: {
      rule:"Min 8 Max 15 Characters | no spaces | contain at least one of these : Uppercase , Number & Symbol",
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
      match: true
    }
  })

  const { email } = useSelector((state) => state.login);
  const { password } = useSelector((state) => state.login);

  const { insertLoginData , loading, error } = useLoginMutation();

  const cookies = new Cookies();
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();


  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const { emailForm, passwordForm } = inputManager
    
    const isEmailValid = emailForm.match && !!email.length
    const isPasswordValid = passwordForm.match && !!password.length

    if(isEmailValid && isPasswordValid){

      try {
        const login = await insertLoginData({
          variables: {
            email: email,
            password: password,
          },
        });
        
        if(!!login.data.user.login.token){
          dispatch(setEmail(""));
          dispatch(setPassword(""));
          dispatch(setDecode(jwtDecode(login.data.user.login.token).userId));
          await cookies.set("token", login.data.user.login.token, { maxAge: 43200 });

          return navigate('/dashboard/home', {replace : true})
        }
        else throw "Login Failed"
      }
      catch(err) {
        MySwal.fire({
          icon:"error",
          title: <h2 className='fs-3'>Login Failed</h2>,
          html:<p className='fs-6 lh-lg'>Please check your email and password and try again.</p>,
          showConfirmButton:true
        })
        
        return false
      }
    }
  };

  

  useEffect(()=>{
    setInputManger({
      emailForm: {
        ...inputManager.emailForm ,
        match: !email.length ? true :  inputManager.emailForm.pattern.test(email)
      },
      passwordForm: {
        ...inputManager.passwordForm ,
        match: !password.length ? true :  inputManager.passwordForm.pattern.test(password)
      },
    })
  },[email, password])



  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-[700px] w-full h-full p-8 flex flex-col items-center justify-center bg-[#fff] border border-slate-200 rounded-[30px]">
      <h2 className="text-[32px] leading-[48px] mb-[7px]">Login</h2>
      <h4 className="text-2xl font-medium mb-10">Please login here</h4>
      {error && <pre>{error.message}</pre>}
      <form
        className="max-w-[550px] w-full flex flex-col"
        onSubmit={handleLoginSubmit}
      >
        <Input
          icon={require("../assets/img/email.png")}
          name="email"
          type="email"
          value={email}
          setValue={(value) => dispatch(setEmail(value))}
        />
        {
          !inputManager.emailForm.match && 
            <p className="mb-6 text-sm text-[#C9161D]">{inputManager.emailForm.rule}</p>
        }
        <Input
          icon={require("../assets/img/lock.png")}
          name="password"
          type="password"
          value={password}
          setValue={(value) => dispatch(setPassword(value))}
        />
        {
          !inputManager.passwordForm.match && 
            <p className="mb-6 text-sm text-[#C9161D]">{inputManager.passwordForm.rule}</p>
        }
        <Button
          text="Login"
          formBtn={true}
          styling="py-4 mt-6 mb-8 text-xl font-medium w-full rounded-[20px] flex justify-center"
          icon={loading ? <Spinner styling='ml-3' /> : false}
        />
      </form>
      <p className="text-xl leading-9 text-[#ADADAD]">
        Don't have an account ?{" "}
        <button
          onClick={() => navigate('/register', { replace: true }) }
          className="text-[#000] font-semibold hover:underline bg-transparent ml-2"
        >
          Register
        </button>
      </p>
    </div>
  </div>
  );
};

export default Login;
