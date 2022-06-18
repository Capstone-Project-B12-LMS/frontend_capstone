import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setIsLoggedIn, setDecode, setDataLogin } from "../redux/loginSlice";
import useLoginMutation from "../graphql/LoginMutation";
import useGetUser from "../graphql/GetUser";
import Popup from "reactjs-popup";
import Register from "./Register";
import jwtDecode from "jwt-decode";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// Component
import { Button, Input } from '../components'




const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();  
  const dispatch = useDispatch();
  const { insertLoginData, data, loading, error } = useLoginMutation();
  const { email } = useSelector((state) => state.login);
  const { password } = useSelector((state) => state.login);
  const {dataLogin} = useSelector((state) => state.login)

  useEffect(()=>{
    if(data?.user.login.token){
      //setuserid
      dispatch(setDecode(jwtDecode(data.user.login.token).userId));
      cookies.set("token", data.user.login.token, {
        maxAge: 3600,
      });
      // dispatch(setIsLoggedIn(true));//getuser dilakukan didalam login
      navigate('/dashboard');
    }
  },[data]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    insertLoginData({
      variables: {
        email: email,
        password: password,
      },
    });
    dispatch(setEmail(""));
    dispatch(setPassword(""));
  };

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="modal">
      <div className="flex items-center justify-center mt-[10%]" id="login">
        <div className="max-w-[1000px] w-4/5 max-h-[800px] h-4/5 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
          <h2 className="text-[32px] leading-[48px] mb-[7px]">Login</h2>
          <h4 className="text-2xl font-medium mb-10">Please login here</h4>
          <form
            className="max-w-[640px] w-4/5 flex flex-col items-center"
            onSubmit={handleLoginSubmit}
          >
            <Input
             icon={require("../assets/img/email.png")}
             name="email"
             value={email}
             setValue={(value) => dispatch(setEmail(value))}
            />
            <Input
              icon={require("../assets/img/lock.png")}
              name="password"
              value={password}
              setValue={(value) => dispatch(setPassword(value))}
            />
            <Button 
              text='Login'
              formBtn={true}
              styling='py-4 mb-8 text-xl font-medium w-full rounded-[20px]'
            />
            <p className="text-2xl leading-9 text-[#ADADAD]">
              Don't have an account?{" "}
              <Popup
                trigger={
                  <a
                    href="#register"
                    className="text-[#000] font-semibold hover:underline"
                  >
                    Register{" "}
                  </a>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      <div className="text-black">X</div>
                    </button>
                    <Register />
                  </div>
                )}
              </Popup>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
