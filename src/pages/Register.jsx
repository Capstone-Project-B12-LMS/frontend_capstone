import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { setUsername, setPassword, setEmail } from "../redux/registerSlice";
import { Button, Input, Spinner } from "../components";
import useRegisterMutation from "../graphql/RegisterMutation";




const Register = () => {

  const [inputManager, setInputManger] = useState({
    usernameForm: {
      rule: "Fullname format doesn't match",
      pattern: /^([A-Za-z]+|([A-Za-z]+\s{1}[A-Za-z]+)*)$/,
      match: true
    },
    emailForm: {
      rule: "Email format doesn't match",
      pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
      match: true
    },
    passwordForm: {
      rule: "Min 8 Max 15 Characters | no spaces | contain at least one of these : Uppercase , Number & Symbol",
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
      match: true
    }
  })

  const { username } = useSelector((state) => state.register);
  const { email } = useSelector((state) => state.register);
  const { password } = useSelector((state) => state.register);


  const { insertRegisterData, loading } = useRegisterMutation();

  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleRegister = async (e) => {
    e.preventDefault();

    const { usernameForm, emailForm, passwordForm } = inputManager

    const isUsernameValid = usernameForm.match && !!username.length;
    const isEmailValid = emailForm.match && !!email.length
    const isPasswordValid = passwordForm.match && !!password.length

    if (isUsernameValid && isEmailValid && isPasswordValid) {

      try {
        await insertRegisterData({
          variables: {
            fullName: username,
            email: email,
            password: password,
          },
        });
      }
      catch (err) {
        MySwal.fire({
          icon: "error",
          title: <h2 className='fs-3'>Register Failed</h2>,
          html: <p className='fs-6 lh-lg'>Account already exist , please try using another account</p>,
          showConfirmButton: true
        })

        return false
      }

      dispatch(setUsername(""));
      dispatch(setEmail(""));
      dispatch(setPassword(""));

      return MySwal.fire({
        icon: "success",
        title: <h2 className='fs-3'>Register Success</h2>,
        html: <p className='fs-6 lh-lg'>Please login using your new account</p>,
        confirmButtonText: "Login",
      })
        .then(isConfirmed => isConfirmed ? navigate('/login') : false)
    }
  };


  useEffect(() => {
    setInputManger({
      usernameForm: {
        ...inputManager.usernameForm,
        match: !username.length ? true : inputManager.usernameForm.pattern.test(username)
      },
      emailForm: {
        ...inputManager.emailForm,
        match: !email.length ? true : inputManager.emailForm.pattern.test(email)
      },
      passwordForm: {
        ...inputManager.passwordForm,
        match: !password.length ? true : inputManager.passwordForm.pattern.test(password)
      },
    })
  }, [username, email, password])


  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="max-w-[700px] w-full h-full p-8 flex flex-col items-center justify-center bg-[#fff] border border-slate-200 rounded-[30px]">
        <h2 className="text-3xl leading-[48px] mb-[7px]">Register</h2>
        <h4 className="text-xl font-medium mb-[16px]">Create your account</h4>
        <form
          className="max-w-[550px] w-full flex flex-col"
          onSubmit={handleRegister}
        >
          <Input
            icon={require("../assets/img/person.png")}
            name="Fullname"
            type="text"
            value={username}
            setValue={(value) => dispatch(setUsername(value))}
          />
          {
            !inputManager.usernameForm.match &&
            <p className="mb-6 text-sm text-[#C9161D]">{inputManager.usernameForm.rule}</p>
          }
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
            <p className="mb-6 text-sm text-[#C9161D] leading-6">{inputManager.passwordForm.rule}</p>
          }
          <Button
            text="Daftar"
            formBtn={true}
            styling="py-4 mt-6 mb-8 text-xl font-medium w-full rounded-[20px] flex items-center justify-center"
            icon={loading ? <Spinner styling='ml-3' /> : false}
          />
          <p className="text-xl leading-9 text-[#ADADAD] text-center">
            Already have an account ?
            <button
              onClick={() => navigate('/login', { replace: true })}
              className="text-[#000] font-semibold hover:underline bg-transparent ml-2"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
