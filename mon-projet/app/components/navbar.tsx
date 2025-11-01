  "use client";
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { FaKey } from "react-icons/fa";

import React from "react";

export default function Navbar() {
  return (
    <div>
       <div className="flex flex-row  p-5 text-amber-50 m-[120px]   "  style={{marginTop:'-1450px'}}>
 <div className="basis-64 font-bold text-2xl whitespace-nowrap">
  DEXCHANGE SAAS
</div>

  <div className="basis-64 text-[17px]"></div>
  <div className="basis-64 text-[17px] font-bold flex items-center gap-2">
  <MdSpaceDashboard  className="text-2xl " />
  DASHBOARD
</div>
<div className="basis-64 text-[17px] font-bold flex items-center gap-2">
  <FaUser className="text-2xl " />
  PROFILE
</div>
<div className="basis-64 text-[17px] font-bold flex items-center gap-2">
  <FaCircleUser  className="text-2xl " />
  SIGN UP
</div>
<div className="basis-64 text-[17px] font-bold flex items-center gap-2">
  < FaKey   className="text-2xl " />
  SIGN IN
</div>

<div className="basis-64 text-[17px] font-bold flex items-center gap-2">
 
</div>


<div className="basis-64 text-[17px] font-bold flex items-center gap-2">
  <button className="flex items-center gap-2 text-1xl px-4 py-2 bg-amber-50 text-black rounded-3xl ">
    Call to action
  </button>
</div>

</div>

    </div>
  );
}
