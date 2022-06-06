import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from './components/Layout';


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Layout />}>
          <Route index path="home" element={<Home />} />
          <Route path="class" element={<h1 className="mt-10">Class Area</h1>} />
          <Route path="history" element={<h1 className="mt-10">History Area</h1>} />
          <Route path="settings" element={<h1 className="mt-10">Settings Area</h1>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;
