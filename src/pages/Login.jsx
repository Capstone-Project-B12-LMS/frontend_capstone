import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setPassword,
  setIsLoggedIn,
  setDecode,
  setDataLogin,
} from "../redux/loginSlice";
import useLoginMutation from "../graphql/LoginMutation";
import useGetUser from "../graphql/GetUser";
import jwtDecode from "jwt-decode";
import Modal from "./Modal";

// Component
import { Button, Input } from "../components";
import { useNavigate } from "react-router-dom";

const Login = ({
  openLoginModal,
  setOpenLoginModal,
  setOpenRegisterModal,
  openRegisterModal,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { insertLoginData, data, loading, error } = useLoginMutation();
  const { email } = useSelector((state) => state.login);
  const { password } = useSelector((state) => state.login);
  const { dataLogin } = useSelector((state) => state.login);

  useEffect(() => {
    if (data?.user.login.token) {
      //setuserid
      dispatch(setDecode(jwtDecode(data.user.login.token).userId));
      localStorage.setItem("token", data.user.login.token);
      // dispatch(setIsLoggedIn(true));//getuser dilakukan didalam login
      navigate("/dashboard");
    }
  }, [data]);

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
    <div>
      <Modal open={[openLoginModal, openRegisterModal]}>
        <div>
          <h2 style={{ position: "absolute", right: "2em" }}>
            <button className="close" onClick={() => setOpenLoginModal(false)}>
              x
            </button>
          </h2>
        </div>
        <div className="flex items-center justify-center">
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
                text="Login"
                formBtn={true}
                styling="py-4 mb-8 text-xl font-medium w-full rounded-[20px]"
              />
            </form>
            <p className="text-2xl leading-9 text-[#ADADAD]">
              Don't have an account?{" "}
              <button
                onClick={() => setOpenLoginModal(false)}
                className="text-[#000] font-semibold hover:underline bg-transparent"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
