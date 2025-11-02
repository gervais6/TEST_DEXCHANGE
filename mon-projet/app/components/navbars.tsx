"use client";
import React from 'react'
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';
import { HiUser } from "react-icons/hi2";

export default function Page() {
  return (
    <div className='flex flex-col bg-[#F8F9FA] p-3 sm:p-4'>
      <div className="flex flex-col xl:flex-row xl:items-center justify-between p-4 gap-3 xl:gap-6">
        
        <div className="text-black min-w-0">
          <div className="text-sm text-gray-600">Pages / Dashboard</div>
          <div className="text-lg font-bold text-gray-800">Dashboard</div>
        </div>
        
        <div className="flex items-center gap-3 w-full xl:w-auto">
          
          <div className="relative flex-1 xl:flex-none min-w-0">
            <input 
              type="text" 
              placeholder="Type Here..." 
              className="pl-10 pr-4 py-2 border bg-white border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 w-full xl:w-48 2xl:w-64"
            />
            <FaSearch className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>

          <div className="hidden sm:flex items-center gap-1 sm:gap-2 flex-shrink-0">
            
            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors" title="Sign In">
              <HiUser className="w-5 h-5" />
            </button>

            <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors" title="Settings">
              <FaCog className="w-5 h-5" />
            </button>

            <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors" title="Notifications">
              <FaBell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 text-white text-xs w-4 h-4 flex items-center justify-center"></span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
