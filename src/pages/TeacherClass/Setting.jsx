import { useQuery } from "@apollo/client";
import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { Tab } from "../../components";
import { FIND_CLASS_MATERIAL } from "../../graphql/MaterialQuery";
import Material from "./Material";
import Member from "./Member";
import Profile from "./Profile";


const Setting = ({ dataClass, func }) => {
  const param = useParams();
  const { data: dataMaterial, loading: loadingMaterial } = useQuery(FIND_CLASS_MATERIAL, { variables: { class_id: param.id } })
  const Tabpath = [
    { text: "member", path: `.` },
    { text: "material", path: "./material" },
    { text: "profile", path: "./profile" },
  ];
  return (
    <div className="px-8">
      <Tab list={Tabpath} />
      <div className="w-full ">
        <Routes>
          <Route index element={<Member students={dataClass?.class?.findById?.users} classId={dataClass?.class?.findById?.id} />} />
          <Route path="material" element={<Material dataMaterial={dataMaterial} loadingMaterial={loadingMaterial} classId={param.id} func={func} />} />
          <Route path="profile" element={<Profile dataClass={dataClass} materials={dataMaterial?.material?.findAllByClassId} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Setting;
