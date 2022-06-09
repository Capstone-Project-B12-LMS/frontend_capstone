import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from './pages/Index';
import Home from "./pages/Dashboard/home";
import Layout from './components/Layout';


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout/>}>
          <Route path='home' element={<Home/>}/>
          Absolute route path "/home" nested under path "/dashboard" is not valid.
        </Route>
      </Routes>
    </div>
  );
}


export default App;
