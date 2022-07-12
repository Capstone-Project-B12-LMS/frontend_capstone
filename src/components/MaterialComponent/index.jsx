import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import dot from "../../assets/img/3dot.png";
import material from "../../assets/img/material.png";
import useUpdateMaterial from "../../graphql/UpdateMaterial";



const MaterialComponent = ({ item, classId }) => {

  const navigate = useNavigate();

  const { insertNewMaterial, data, loading, error } = useUpdateMaterial();
  const [isDotClicked, SetIsDotClicked] = useState(false);
  const handleClickedOutside = () => {
    isDotClicked && SetIsDotClicked(false);
  };
  const handleUpdateMaterial = (materialId) => {
    navigate({ replace: true })
  }


  return (
    <div
      className="py-4 w-full border-b-2 flex items-center rounded-[10px] shadow-sm relative"
      onClick={handleClickedOutside}
    >
      <img src={material} alt="/" className="mr-5 pl-5" />
      <h4>{item.title}</h4>
      <img
        src={dot}
        alt="/"
        className="pr-4 cursor-pointer ml-auto"
        onClick={() => SetIsDotClicked(true)}
      />
      {isDotClicked && (
        <>
          <p
            className="text-sm absolute right-[60px] p-3 rounded-[10px] shadow-md cursor-pointer font-medium"
            onClick={() => handleUpdateMaterial(item.id)}
          >
            Update Material
          </p>
          {/* <p className="text-sm absolute right-[60px] p-3 rounded-[10px] shadow-md cursor-pointer font-medium">
            Delete Material
          </p> */}
        </>
      )}
    </div>
  );
};

export default MaterialComponent;
