import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { setUsername, setPassword, loginSubmit } from "../redux/loginSlice";

// Component

import { Button, Input } from "../components";
import Modal from "./Modal";

const Login = ({
  openLoginModal,
  setOpenLoginModal,
  setOpenRegisterModal,
  openRegisterModal,
}) => {
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.login);
  const { password } = useSelector((state) => state.login);
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
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(loginSubmit());
              }}
            >
              <Input
                icon={require("../assets/img/person.png")}
                name="username"
                value={username}
                setValue={(value) => dispatch(setUsername(value))}
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
