"use client";
import React from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className="py-20 flex h-full items-center justify-center">
      <div
        className="rounded-[20px] border bg-white flex flex-col items-center shadow-lg  relative z-10 w-[550px] h-[800px">
        <h2 className="text-black mt-[50px] text-2xl font-bold font-helvetica">
          Register with
        </h2>
        <div className="flex justify-center mt-6 font-helvetica">
          <div className="flex gap-4">
            <div className="border-2 border-gray-300 p-3 rounded-[10px] hover:bg-gray-100 cursor-pointer">
              <FaFacebook className="text-3xl text-black" />
            </div>
            <div className="border-2 border-gray-300 p-3 rounded-[10px] hover:bg-gray-100 cursor-pointer">
              <FaApple className="text-3xl text-black" />
            </div>
            <div className="border-2 border-gray-300 p-3 rounded-[10px] hover:bg-gray-100 cursor-pointer">
              <FaGoogle className="text-3xl text-black" />
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-[20px] mt-3">or</div>
        <form className="flex flex-col gap-4 w-[80%] mt-4 items-start text-left">
          <div className="w-full mb-5">
            <label htmlFor="name" className="block text-[17px] font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-[20px] focus:ring-cyan-500 focus:border-cyan-500 text-left"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="email" className="block text-[17px] font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email address"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-[20px] focus:ring-cyan-500 focus:border-cyan-500 text-left"
              required
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="password" className="block text-[17px] font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              className="mt-1 block w-full p-4 border border-gray-300 rounded-[20px] focus:ring-cyan-500 focus:border-cyan-500 text-left"
              required
            />
          </div>        
            <div className="flex items-center mb-4 w-full gap-3">
            <label htmlFor="toggle" className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" id="toggle" className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-checked:bg-teal-400 transition-colors"></div>
              <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition-transform"></div>
            </label>
            <span className="text-gray-700 font-medium">Remember me</span>
          </div>
          <button
            type="submit"
            className="mt-2 bg-teal-400 text-white py-4 font-bold rounded-[20px] hover:bg-teal-500 transition text-[15px] w-full"
          >
            SIGN UP
          </button>
          <div className="mt-2 text-center w-full text-gray-700 text-[15px] mb-9">
            Already have an account?{" "}
            <a href="/login" className="text-teal-500  font-medium hover:underline ">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
