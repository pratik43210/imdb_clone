"use client"

import {BsFillSunFill,BsFillMoonStarsFill} from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const {systemTheme,theme,setTheme}=useTheme();
    const [mounted,setMounted]=useState(false);

    useEffect(()=>setMounted(true),[]);

    const currentTheme=theme==='system'?systemTheme:theme;
  return (
    <>
        {mounted && currentTheme==="dark"?<BsFillSunFill className=' hover:text-amber-500' onClick={()=>setTheme("light")}/>:<BsFillMoonStarsFill className=' hover:text-amber-500' onClick={()=>setTheme("dark")}/>}
        
    </>
  )
};
