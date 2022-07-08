import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  setUsername,
  setPassword,
  setEmail,
  setIsValid,
  setIsSuccess,
} from "../redux/registerSlice";
import Modal from "./Modal";
import {
  Button,
  Input,
  Loading,
  PasswordWarning,
  RegisterAlert,
} from "../components";
import useRegisterMutation from "../graphql/RegisterMutation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Register = ({
  openRegisterModal,
  setOpenRegisterModal,
  setOpenLoginModal,
}) => {
  const { insertRegisterData, data, loading, error } = useRegisterMutation();
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const { username } = useSelector((state) => state.register);
  const { email } = useSelector((state) => state.register);
  const { password } = useSelector((state) => state.register);
  const { isValid } = useSelector((state) => state.register);
  const { isSuccess } = useSelector((state) => state.register);

  useEffect(() => {
    if (isSuccess === true && error === undefined) {
      setTimeout(() => {
        dispatch(setIsSuccess(false));
        setOpenRegisterModal(false);
        setOpenLoginModal(true);
      }, 3000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      dispatch(setIsSuccess(false));
      MySwal.fire({
        title: "Register Error",
        icon: "error",
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: "#d33",
      });
    } else if (data !== undefined) {
      dispatch(setUsername(""));
      dispatch(setEmail(""));
      dispatch(setPassword(""));
      dispatch(setIsSuccess(true));
      dispatch(setIsValid(true));
    }
  }, [error, data]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      )
    ) {
      insertRegisterData({
        variables: {
          fullName: username,
          email: email,
          password: password,
        },
      });
    } else dispatch(setIsValid(false));
  };

  return (
    <div>
      <Modal open={openRegisterModal}>
        <div>
          <h2 style={{ position: "absolute", right: "2em" }}>
            <button
              className="close"
              onClick={() => setOpenRegisterModal(false)}
            >
              x
            </button>
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="max-w-[1000px] w-4/5 max-h-[800px] mb-8 flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
            <h2 className="text-[32px] leading-[48px] mb-[7px]">Register</h2>
            {loading ? (
              <Loading size="100" />
            ) : (
              <>
                <h4 className="text-2xl font-medium mb-[16px]">
                  Create your account
                </h4>
                {isSuccess && <RegisterAlert />}
                <form
                  className="max-w-[640px] w-4/5 flex flex-col items-center"
                  onSubmit={handleRegister}
                >
                  <Input
                    icon={require("../assets/img/person.png")}
                    name="username"
                    type="text"
                    value={username}
                    setValue={(value) => dispatch(setUsername(value))}
                  />
                  <Input
                    icon={require("../assets/img/email.png")}
                    name="email"
                    type="email"
                    value={email}
                    setValue={(value) => dispatch(setEmail(value))}
                  />
                  {isValid ? (
                    <Input
                      icon={require("../assets/img/lock.png")}
                      name="password"
                      type="password"
                      value={password}
                      setValue={(value) => dispatch(setPassword(value))}
                    />
                  ) : (
                    <PasswordWarning />
                  )}
                  <Button
                    text="Daftar"
                    formBtn={true}
                    styling="py-4 mb-8 text-xl font-medium w-full rounded-[20px]"
                  />
                  <p className="text-2xl leading-9 text-[#ADADAD]">
                    Already have an account?
                    <button
                      onClick={() => {
                        setOpenRegisterModal(false);
                        setOpenLoginModal(true);
                      }}
                      className="text-[#000] font-semibold hover:underline bg-transparent"
                    >
                      Login
                    </button>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Register;
