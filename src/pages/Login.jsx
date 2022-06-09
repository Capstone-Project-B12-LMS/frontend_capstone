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
      <div className="max-w-[1000px] w-4/5 max-h-[800px] h-4/5 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
        <h2 className="text-[32px] leading-[48px] mb-[7px]">Login</h2>
        <h4 className="text-2xl font-medium mb-10">Please login here</h4>
        <form
          className="max-w-[640px] w-4/5 flex flex-col items-center"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginSubmit());
          }}
        >
          <InputComponent
            icon={require("../assets/img/person.png")}
            name="username"
            value={username}
            setValue={(value) => dispatch(setUsername(value))}
          />
          <InputComponent
            icon={require("../assets/img/lock.png")}
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
