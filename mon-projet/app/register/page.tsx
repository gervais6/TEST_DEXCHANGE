
"use client";
import Navbar from "../components/navbar";
import Card from "../components/card";

import React from 'react'

export default function page() {
  return (
    <div className=' flex flex-col  min-h-screen text-center   bg-amber-50'>

      <div className='template m-5 h-[520]  bg-[#3af0f0] rounded-[15px] t-[24px]  '> 

         <div 
          style={{backgroundImage:"url('/1457718455276 1.png')",
          width:'1598px',
          height:'779px',
          transform:'rotate(1deg)',
          top:'-663px',
          left:'-114.5px',
          
        }}/>    



           <div
       style={{
        backgroundImage:"url('/1457718455276 2.png')",
          height:'710px',
          position:'relative',
          transform:'rotate(-1deg)',
          opacity: 1,
          top:'-970px',
         marginLeft:'120px',
          backgroundSize:'cover',


        }}  />
   

<Navbar/>

      
 </div>

  <div className="titre text-[50px] font-helvetica font-normal text-white mt-[-300px] h-[88px] flex items-center justify-center">
  <h4>Welcome !</h4>


</div>


<Card/>


       
         

         </div>



        
       
    

  )
}

