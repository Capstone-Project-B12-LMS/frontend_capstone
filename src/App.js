import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from './pages/Index';
import Home from "./pages/Dashboard/home";
import Layout from './components/Layout';
import MyAccount from "./pages/MyAccount";


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout/>}>
          <Route path='home' element={<Home/>}/>
        </Route>
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </div>
  );
}


export default App;
