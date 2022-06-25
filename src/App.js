// Module

import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

// Redux , GraphQL

import { setDecode, setDataLogin } from "./redux/loginSlice";
import useGetUser from "./graphql/GetUser";

// Pages & Component

import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Index";
import MyAccount from "./pages/MyAccount";
import Layout from "./components/Layout";
import ChangeClass from "./components/Popup/ChangeClass";



const App = () => {

  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { decode } = useSelector((state) => state.login);
  const { data } = useGetUser(decode);

  useEffect(() => {
    if (cookies.get("token")) dispatch(setDecode(jwtDecode(cookies.get("token")).userId));
  }, []);

  useEffect(() => {
    dispatch(setDataLogin(data?.user.findById));
  }, [data]);

  return (
    <div>
      <Routes>
        <Route index element={cookies.get("token") ? <Navigate to="dashboard/home" /> : <Landing />} />
        {
          !cookies.get("token") && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<h1>401 UNAUTHORIZED</h1>} />
            </>
          )
        }

        {
          cookies.get("token") && (
            <>
              <Route path="/dashboard/*" element={<Layout />} />
              <Route path="/popup" element={<ChangeClass />} />
              <Route path="/myaccount" element={<MyAccount />} />
            </>
          )
        }
      </Routes>
    </div>
  );
};

export default App;
