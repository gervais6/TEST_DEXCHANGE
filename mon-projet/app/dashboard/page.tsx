"use client";

import Siderbar from "../components/siderbar";
import Navbars from "../components/navbars";
import Cards from "../components/cards";
import Table from "../components/table";


import React from 'react'

export default function Page() {
  return (
    <div className='flex min-h-screen  bg-white'>
      <Siderbar/>
      
      <div className='flex-1 flex  flex-col'>
            <Navbars/>

        <main className="flex-1  bg-[#F8F9FA]">
             <Cards/>

        </main>
      </div>
    </div>
  )
}
