import { useState, useEffect } from "react";

// Assets
import Repeat from "../../assets/icons/repeat.svg";
import Illustration from "../../assets/img/no-description.png";
import ChangeClassTeacher from "./ChangeClassTeacher";

import InputAnnouncement from "./inputAnnouncement";

const Description = ({
  targetMaterial,
  material,
  setMaterial,
  materialId,
  updateMode,
  setUpdateMode,
  setMaterialId
}) => {
  

  return (
    <div className="px-8">
      <div className="border border-solid rounded-[20px] px-12 pt-12">

      {/* <div className="border-[1px] p-[1rem] mb-[1rem] rounded-[10px] flex justify-around">
            <img
              className="w-[50px]"
              src="https://i.ibb.co/y0XWBqF/Ellipse-18.png"
              alt="icon"
            />
            <input
              onClick={handleClick}
              className="w-[80%]"
              type="text"
              placeholder="Annonce something to your class"
            />
            <span onClick={() => setOpenChangeClass(true)}>
              <img className="w-[32px] " src={Repeat} alt="repeat" />
            </span>
            {openChangeClass && openChangeClass && (
              <ChangeClassTeacher
                openChangeClass={openChangeClass}
                setOpenChangeClass={() => setOpenChangeClass(false)}
              />
            )}
          </div> */}
        <InputAnnouncement
          targetMaterial={targetMaterial}
          material={material}
          setMaterial={setMaterial}
          materialId={materialId}
          setUpdateMode={setUpdateMode}
          updateMode={updateMode}
          setMaterialId={setMaterialId}
        />
      </div>
    </div>
  );
};

export default Description;


/*
<div className="border-[1px] p-[1rem] mb-[1rem] rounded-[10px] flex justify-around">
            <img
              className="w-[50px]"
              src="https://i.ibb.co/y0XWBqF/Ellipse-18.png"
              alt="icon"
            />
            <input
              onClick={handleClick}
              className="w-[80%]"
              type="text"
              placeholder="Annonce something to your class"
            />
            <span onClick={() => setOpenChangeClass(true)}>
              <img className="w-[32px] " src={Repeat} alt="repeat" />
            </span>
            {openChangeClass && openChangeClass && (
              <ChangeClassTeacher
                openChangeClass={openChangeClass}
                setOpenChangeClass={() => setOpenChangeClass(false)}
              />
            )}
          </div>

*/