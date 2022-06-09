import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../redux/loginSlice";
import useLoginMutation from "../graphql/LoginMutation";


const Login = () => {
  const { insertLoginData, data, loading, error } = useLoginMutation();
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.login);
  const { password } = useSelector((state) => state.login);

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
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-[1000px] w-4/5 max-h-[800px] h-4/5 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
        <h2 className="text-[32px] leading-[48px] mb-[7px]">Login</h2>
        <h4 className="text-2xl font-medium mb-10">Please login here</h4>
        <form
          className="max-w-[640px] w-4/5 flex flex-col items-center"
          onSubmit={handleLoginSubmit}
        >
          <InputComponent
            icon={require("../assets/img/email.png")}
            name="email"
            value={email}
            setValue={(value) => dispatch(setEmail(value))}
          />
          <InputComponent
            icon={require("../assets/img/lock.png")}
            name="password"
            value={password}
            setValue={(value) => dispatch(setPassword(value))}
          />
          <Button buttonText="Login" width="w-full" height="h-[62px]" />
          <p className="text-2xl leading-9 text-[#ADADAD]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#000] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
