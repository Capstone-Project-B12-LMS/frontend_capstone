import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from './pages/Index';
import Home from "./pages/Dashboard/home";
import Layout from './components/Layout';
import Classall from "./pages/Dashboard/classAll";
import ClassStudent from "./pages/Dashboard/classStudent";
import ClassTeacher from "./pages/Dashboard/classTeacher";


const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout/>}>
       <Route path="/dashboard/class" element={<Classall />}/>
       <Route path="/dashboard/student/class" element={<ClassStudent />} />
       <Route path="/dashboard/teacher/class" element={<ClassTeacher />} />
          <Route path='home' element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
}


export default App;
