"use client";
import { FaUser, FaKey, FaBars } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import React, { useState } from "react";
import { LuBox } from "react-icons/lu";
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 bg-teal-600 rounded-lg text-amber-50"
        >
          <FaBars className="text-xl" />open
        </button>
      </div>

      <div className={`
        fixed top-0 left-0 h-full w-64 bg-teal-600 z-40 transform transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:hidden
      `}>
        <div className="p-4 border-b border-teal-500 flex justify-between items-center">
          <div className="flex items-center gap-3 font-bold text-[20px] text-amber-50">
            <Image
              src="/images/logo-creative-tim-black.png"
              alt="Logo DEXCHANGE"
                 width={32}  
                height={32}   
              className="w-8 h-8 object-contain"
            />
            <span>DEXCHANGE SAAS</span>
          </div>

          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 text-amber-50"
          >
            <MdClose className="text-xl" /> close
          </button>
          
        </div>
        <div className="p-4 space-y-6">
          <div className="text-[16px] font-bold flex items-center gap-3 text-amber-50">
            <LuBox className="text-lg" />
            DASHBOARD
          </div>
          <div className="text-[16px] font-bold flex items-center gap-3 text-amber-50">
            <FaUser className="text-lg" />
            PROFILE
          </div>
          <div className="text-[16px] font-bold flex items-center gap-3 text-amber-50">
            <FaCircleUser className="text-lg" />
            SIGN UP
          </div>
          <div className="text-[16px] font-bold flex items-center gap-3 text-amber-50">
            <FaKey className="text-lg" />
            SIGN IN
          </div>
          <div className="pt-4">
            <button className="w-full text-[16px] px-4 py-3 bg-amber-50 text-black rounded-[34px] font-bold">
              Call to action
            </button>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="hidden md:flex flex-row p-5 text-amber-50 m-[150px] mt-[-1450px]">
        <div className="flex items-center gap-4 basis-64 font-bold text-[25px] whitespace-nowrap">
          <img 
            src="/logo-creative-tim-black.png"
            alt="Logo DEXCHANGE"
            className="w-10 h-10 object-contain"
          />
          <span>DEXCHANGE SAAS</span>
        </div>

        <div className="basis-64 text-[17px]"></div>
        <div className="basis-64 text-[17px] font-bold flex items-center gap-2 mr-[40]">
          <LuBox  className="text-1xl" />
          DASHBOARD
        </div>
        <div className="basis-64 text-[17px] font-bold flex items-center gap-2">
          <FaUser className="text-1xl" />
          PROFILE
        </div>
        <div className="basis-64 text-[17px] font-bold flex items-center gap-2">
          <FaCircleUser className="text-1xl" />
          SIGN UP
        </div>
        <div className="basis-64 text-[17px] font-bold flex items-center gap-2">
          <FaKey className="text-1xl" />
          SIGN IN
        </div>

        <div className="basis-64 text-[17px] font-bold flex items-center gap-2">
          <button className="flex items-center justify-center gap-2 text-[17px] px-4 py-4 bg-amber-50 text-black rounded-[34px] w-[230px]">
            Call to action
          </button>
        </div>
      </div>
    </div>
  );
}
