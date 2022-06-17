import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Index";
import Home from "./pages/Dashboard/home";
<<<<<<< HEAD
import Layout from "./components/Layout";
import MyAccount from "./pages/MyAccount";
import { useEffect, useState } from "react";
import { setIsLoggedIn, setDecode, setDataLogin } from "./redux/loginSlice";
import jwtDecode from "jwt-decode";
import useGetUser from "./graphql/GetUser";
=======
import Layout from './components/Layout';
import Classall from "./pages/Dashboard/classAll";
import ClassStudent from "./pages/Dashboard/classStudent";
import ClassTeacher from "./pages/Dashboard/classTeacher";

>>>>>>> 44f1bdca9c8ce57265cd75ed25075dce487e900c

const App = () => {
  const dispatch = useDispatch();
  const { decode } = useSelector((state) => state.login);
  const {dataLogin} = useSelector((state)=>state.login)
  const { data, loading } = useGetUser(decode);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setDecode(jwtDecode(localStorage.getItem("token")).userId));
    }
  }, []);

  useEffect(() => {
    dispatch(setDataLogin(data?.user.findById))
  }, [data]);
  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout/>}>
<<<<<<< HEAD
          <Route path="home" element={<Home />} />
=======
       <Route path="/dashboard/class" element={<Classall />}/>
       <Route path="/dashboard/student/class" element={<ClassStudent />} />
       <Route path="/dashboard/teacher/class" element={<ClassTeacher />} />
          <Route path='home' element={<Home/>}/>
>>>>>>> 44f1bdca9c8ce57265cd75ed25075dce487e900c
        </Route>
        <Route
          path="/myaccount"
          element={<MyAccount/>}
        />
      </Routes>
    </div>
  );
};

export default App;
