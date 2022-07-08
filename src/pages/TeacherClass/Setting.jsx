import React from "react";
import { Route, Routes } from "react-router-dom";
import { Tab } from "../../components";
import Material from "./Material";

const Setting = () => {
  const Tabpath = [
    { text: "member", path: `.` },
    { text: "material", path: "./material" },
    { text: "profile", path: "./profile" },
  ];
  return (
    <div>
      <Tab list={Tabpath} />
      <div className="w-full">
          <Routes>
              <Route path="material" element={<Material />} />
          </Routes>
      </div>
    </div>
  );
};

export default Setting;
