import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Index";
import Home from "./pages/Dashboard/home";
import Layout from "./components/Layout";
import MyAccount from "./pages/MyAccount";
import { useEffect} from "react";
import { setDecode, setDataLogin } from "./redux/loginSlice";
import jwtDecode from "jwt-decode";
import useGetUser from "./graphql/GetUser";
import { Cookies } from "react-cookie";

const App = () => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const { decode } = useSelector((state) => state.login);
  const { data } = useGetUser(decode);

  useEffect(() => {
    if (cookies.get("token")) {
      dispatch(setDecode(jwtDecode(cookies.get("token")).userId));
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
          <Route path="home" element={<Home />} />
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
