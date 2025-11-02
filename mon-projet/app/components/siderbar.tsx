"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex flex-col min-h-screen bg-white text-helvetica'>
      
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-3 bg-teal-500 text-white rounded-lg shadow-lg hover:bg-teal-600 transition-colors"
      >
        {isSidebarOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
      </button>

      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div className={`
        fixed md:relative
        top-0 left-0
        h-screen md:h-[1700px] 
        w-80 md:w-[300px] 
        bg-[#F8F9FA] 
        transform transition-transform duration-300 ease-in-out z-40
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        overflow-y-auto
      `}>
        
        <div className="md:hidden flex justify-end p-4">
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <div className='header mt-6 md:mt-9 text-black text-lg md:text-xl font-bold mb-6 md:mb-8 text-center px-4'>
          <h2>DEXCHANGE SAAS</h2>
        </div> 

        <div className='header mx-4 md:mx-5 mb-6 md:mb-8'>
          <hr className='border-t-2 border-[#E0E1E228] rounded-full'></hr>
        </div> 
 
        <nav className="space-y-1 md:space-y-2 px-3 md:px-4">
          
          <div className='dashboard bg-white rounded-[12px] md:rounded-[15px] p-2 md:p-3 hover:shadow-md transition-shadow'>
            <div className='flex items-center gap-2 md:gap-3'>
              <div className="bg-teal-400 p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
                <Image 
                  src="/home.png" 
                  alt="Dashboard" 
                  width={16}
                  height={16}
                  className="md:w-5 md:h-5"
                />
              </div>
              <span className="text-gray-800 text-[14px] md:text-[17px] font-bold">Dashboard</span>    
            </div> 
          </div>

          <div className='flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-[12px] md:rounded-[15px] hover:bg-white hover:shadow-md transition-all cursor-pointer'>
            <div className="bg-white p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
              <Image 
                src="/Vector5.png" 
                alt="Transactions" 
                width={12}
                height={12}
                className="md:w-4 md:h-4"
              />
            </div>
            <span className="text-gray-400 text-[14px] md:text-[17px] font-bold">Transactions</span>    
          </div> 

          <div className='flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-[12px] md:rounded-[15px] hover:bg-white hover:shadow-md transition-all cursor-pointer'>
            <div className="bg-white p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
              <Image 
                src="/defaulty.png" 
                alt="Billing" 
                width={16}
                height={16}
                className="md:w-5 md:h-5"
              />
            </div>
            <span className="text-gray-400 text-[14px] md:text-[17px] font-bold">Billing</span>    
          </div> 

          <div className='flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-[12px] md:rounded-[15px] hover:bg-white hover:shadow-md transition-all cursor-pointer'>
            <div className="bg-white p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
              <Image 
                src="/default1.png" 
                alt="RTL" 
                width={16}
                height={16}
                className="md:w-5 md:h-5"
              />
            </div>
            <span className="text-gray-400 text-[14px] md:text-[17px] font-bold">RTL</span>    
          </div> 

        </nav>

        <div className="mt-6 md:mt-8 mb-3 md:mb-4 px-4">
          <h3 className="text-black font-bold tracking-wider text-sm md:text-base">
            ACCOUNT PAGES
          </h3>
        </div>

        <nav className="space-y-1 md:space-y-2 px-3 md:px-4">
          
          <div className='flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-[12px] md:rounded-[15px] hover:bg-white hover:shadow-md transition-all cursor-pointer'>
            <div className="bg-white p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
              <Image 
                src="/default2.png" 
                alt="Profile" 
                width={16}
                height={16}
                className="md:w-5 md:h-5"
              />
            </div>
            <span className="text-gray-400 text-[14px] md:text-[17px] font-bold">Profile</span>    
          </div> 

          <div className='flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-[12px] md:rounded-[15px] hover:bg-white hover:shadow-md transition-all cursor-pointer'>
            <div className="bg-white p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
              <Image 
                src="/default3.png" 
                alt="Sign In" 
                width={16}
                height={16}
                className="md:w-5 md:h-5"
              />
            </div>
            <span className="text-gray-400 text-[14px] md:text-[17px] font-bold">Sign In</span>    
          </div> 

          <div className='flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-[12px] md:rounded-[15px]'>
            <div className="bg-white p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
              <Image 
                src="/sharp.png" 
                alt="Sign Up" 
                width={16}
                height={16}
                className="md:w-5 md:h-5"
              />
            </div>
            <span className="text-gray-400 text-[14px] md:text-[17px] font-bold">Sign Up</span>    
          </div> 

        </nav>

        <div className='flex flex-col p-3 md:p-4 rounded-[12px] md:rounded-[15px] mt-8 md:mt-[500px] mx-3 md:mx-0'>
          
          <div className="bg-white text-black rounded-[15px] md:rounded-[17px] p-3 text-center font-bold mb-3 mx-auto w-[200px]">
            DOCUMENTATION
          </div> 
          
          <div className="relative w-full h-32 md:h-40 rounded-[12px] md:rounded-[15px] bg-teal-400 hover:shadow-md transition-all cursor-pointer p-3 md:p-4 overflow-hidden">
            <Image 
              src="/Group 1.png" 
              alt="Group" 
              width={200}
              height={200}
              className="absolute bottom-0 right-0 z-10 opacity-80 md:opacity-100"
            />
            <Image 
              src="/icon.png" 
              alt="Documentation" 
              width={40}
              height={40}
              className="rounded-[8px] md:rounded-[10px] relative z-10"
            />
            <div className="text-white text-start mt-2 md:mt-3 relative z-10">
              <p className="font-medium text-[18px] md:text-[25px] font-bold">Need help?</p>
              <p className="font-bold mt-1 text-sm md:text-base">Please check our docs</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
