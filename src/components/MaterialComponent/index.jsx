import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import dot from "../../assets/img/3dot.png";
import material from "../../assets/img/material.png";
import useUpdateMaterial from "../../graphql/UpdateMaterial";



const MaterialComponent = ({ item, classId, func }) => {

  const navigate = useNavigate();

  const { insertNewMaterial, data, loading, error } = useUpdateMaterial();
  const [isDotClicked, SetIsDotClicked] = useState(false);
  const handleClickedOutside = () => {
    isDotClicked && SetIsDotClicked(false);
  };
  const handleUpdateMaterial = (materialId) => {
    const targetId = materialId
    func(targetId)
    navigate("../..", { replace: true })
  }

  return (
    <div
      className="py-4 w-full border border-solid flex items-center relative"
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
            className="text-sm absolute right-[60px] p-2.5 rounded-[10px] shadow-md cursor-pointer font-medium mb-[2.5rem]"
            onClick={() => handleUpdateMaterial(item.id)}
          >
            Update Material
          </p>
          <p
            className="text-sm absolute right-[60px] p-2.5 rounded-[10px] shadow-md cursor-pointer font-medium mt-[2.5rem]"

          >
            Delete Material
          </p>
        </>
      )}
    </div>
  );
};

export default MaterialComponent;
