import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputComponent from "../components/InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, loginSubmit } from "../redux/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.login);
  const { password } = useSelector((state) => state.login);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[1000px] h-[800px] flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
        <h2 className="text-[32px] leading-[48px] mb-[7px]">Login</h2>
        <h4 className="text-2xl font-medium mb-10">Please login here</h4>
        <form
          className="w-[640px] flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault()
            dispatch(loginSubmit());
          }}
        >
          <InputComponent
            name="username"
            value={username}
            setValue={(value) => dispatch(setUsername(value))}
          />
          <InputComponent
            name="password"
            value={password}
            setValue={(value) => dispatch(setPassword(value))}
          />
          <Button buttonValue="Login" />
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
