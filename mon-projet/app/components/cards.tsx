"use client";
import Navbar from "../components/navbar";
import Form from "../components/form";
import Image from 'next/image';

import React from 'react'

export default function page() {
  return (
     <div className=' flex flex-col  text-center '>

   <div className="flex flex-row"> 



<div className="flex flex-wrap gap-4 ">
<div className="sm:w-[320px] bg-white py-5 rounded-[15px] flex items-center justify-between px-4">
  <span className="text-gray-800 font-medium">01</span>
  <div className="bg-teal-400 p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
  <Image 
    src="/defau23lt.png" 
    alt="Icon" 
    width={25}  
    height={25} 
  />
</div></div>
<div className="w-full sm:w-[320px] bg-white py-5 rounded-[15px] flex items-center justify-between px-4">
  <span className="text-gray-800 font-medium">01</span>
  <div className="bg-teal-400 p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
  <Image 
    src="/outline.png" 
    alt="Icon" 
    width={25}  
    height={25} 
  />
</div></div>
<div className="w-full sm:w-[320px] bg-white py-4 rounded-[15px] flex items-center justify-between px-4">
  <span className="text-gray-800 font-medium text-[14px] md:text-[16px]">01</span>
<div className="bg-teal-400 p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
  <Image 
    src="/Vector23.png" 
    alt="Icon" 
    width={25}  
    height={25} 
  />
</div>
</div>

<div className="w-full sm:w-[320px] bg-white py-5 rounded-[15px] flex items-center justify-between px-4">
  <span className="text-gray-800 font-medium">01</span>
  <div className="bg-teal-400 p-2 md:p-3 rounded-[15px] md:rounded-[17px]">
  <Image 
    src="/text.png" 
    alt="Icon" 
    width={25}  
    height={25} 
  />
</div></div></div>
</div>

<div className="flex flex-col lg:flex-row mt-10 gap-4">
<div className="w-full lg:basis-2/3 bg-white rounded-[15px] overflow-hidden relative h-64 md:h-80 group cursor-pointer">
  <Image 
    src="/og-image 1.png" 
    alt="Graphique" 
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-70 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
    <span className="text-white font-medium text-lg">Lorem Dashboard</span>
    <p className="text-gray-300 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>
<div className="w-full lg:basis-1/3 bg-white rounded-[15px] overflow-hidden">
  <Image 
    src="/brooke-cagle-g1Kr4Ozfoac-unsplash 1.png" 
    alt="Statistiques" 
    width={400}
    height={300}
    className="w-full h-full object-cover"
  />
</div>
</div>
 </div>
  

  )
}
