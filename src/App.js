import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
