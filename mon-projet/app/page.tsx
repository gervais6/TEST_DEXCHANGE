
"use client";
import Link from 'next/link';
import React from 'react'
export default function Home() {
  return (
    
    <div className=' flex flex-col  min-h-screen text-center  bg-sky-400'>
        
  <h1 className=' titre mb-10  text-6xl'>Bienvenue sur mon projet de test</h1>  
  <div> <Link href='/register' className='text-3xl mb-10 block '>Aller vers la page Register</Link></div>
  <div><Link href='/dashboard' className='text-3xl  mb-10 block'>Aller vers la page Dashboard</Link> </div>
   <div><Link href='/tableview' className='text-3xl'>Aller vers la page Tableview</Link> </div>

    </div>

  );
}
