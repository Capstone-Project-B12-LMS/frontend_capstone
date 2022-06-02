import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[1000px] h-[800px] flex flex-col items-center justify-center bg-[#fff] rounded-[30px]">
        <h2 className="text-[32px] leading-[48px] mb-[7px]">Register</h2>
        <h4 className="text-2xl font-medium mb-10">Create your account</h4>
        <form className="w-[640px] flex flex-col items-center">
          <div className="w-full mb-8">
            <label htmlFor="username" className="text-2xl leading-9 mb-2">
              Username
            </label>
            <input
              className="border-[1px] rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[20px] placeholder:leading-[30px]"
              placeholder="Username"
              type="text"
              name="username"
              required
            />
          </div>
          <div className="w-full mb-8">
            <label htmlFor="email" className="text-2xl leading-9 mb-2">
              Your Email
            </label>
            <input
              className="border-[1px] rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[20px] placeholder:leading-[30px]"
              placeholder="Email Address"
              type="text"
              name="email"
              required
            />
          </div>
          <div className="w-full mb-10">
            <label htmlFor="password" className="text-2xl leading-9 mb-2">
              Password
            </label>
            <input
              className="border-[1px] rounded-[10px] border-[#D9D9D9] focus:outline-none w-full h-[62px] placeholder:text-[20px] placeholder:leading-[30px]"
              placeholder="Password"
              type="text"
              name="password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-[62px] rounded-[20px] text-xl leading-[30px] font-medium mb-5"
          >
            Daftar
          </button>
          <p className="text-2xl leading-9 text-[#ADADAD]">
            Already have an account?
            <Link to="/login" className="text-[#000] font-semibold hover:underline">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
