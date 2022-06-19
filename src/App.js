import { useEffect, useState } from "react";
import { setIsLoggedIn, setDecode, setDataLogin } from "./redux/loginSlice";

import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import jwtDecode from "jwt-decode";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Index";
import Home from "./pages/Dashboard/home";
import MyAccount from "./pages/MyAccount";
import StudentClass from "./pages/StudentClass";

import Layout from "./components/Layout";

import useGetUser from "./graphql/GetUser";
import Classall from "./pages/Dashboard/classAll";
import ClassStudent from "./pages/Dashboard/classStudent";
import ClassTeacher from "./pages/Dashboard/classTeacher";
import ChangeClass from "./components/Popup/ChangeClass";

const App = () => {

  const dispatch = useDispatch();
  const { decode } = useSelector((state) => state.login);
  const { dataLogin } = useSelector((state) => state.login);
  const { data, loading } = useGetUser(decode);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setDecode(jwtDecode(localStorage.getItem("token")).userId));
    }
  }, []);

  useEffect(() => {
    dispatch(setDataLogin(data?.user.findById));
  }, [data]);

  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/popup" element={<ChangeClass />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Layout/>}/>
        <Route
          path="/myaccount"
          element={<MyAccount/>}
        />
      </Routes>
    </div>
  );
};

export default App;
