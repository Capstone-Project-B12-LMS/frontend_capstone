import React from "react";

const RegisterAlert = () => {
  return (
    <div className="mb-[10px] max-w-[640px] w-4/5">
      <div className="border-[1px] rounded-xl border-[#0C780F] flex items-center" >
        <img
          src={require("../assets/img/check.png")}
          alt="check"
          className="ml-[16px]"
        />
    
          <p className="mx-auto text-xl py-[21px]">
          Registration completed successfully! Please Login.
          </p>
      </div>
    </div>
  );
};

export default RegisterAlert;
