import React from 'react';
import {useEffect} from 'react';

import { NavLink } from "react-router-dom"; 
export default function Header() {
    console.log("This should run everytime that the header is rendered.")


	return <header className = "border-gray mt-5 h-max rounded-2xl sticky top-0 z-[1] mx-auto  flex w-5/6 flex-wrap items-center justify-between border-2 border-tbtred bg-background p-[1em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary"> 

    <NavLink to="/" className = "mx-auto h-max w-max"><p className="text-center text-xs mx-auto w-fit mt-1 mb-0">Home</p></NavLink>

    <NavLink to="/tbt" className = "mx-auto h-max w-max"><p className="text-center text-xs mx-auto w-fit mt-1 mb-0">TbT</p></NavLink>


    <NavLink to="/fencingcamp" className = "mx-auto h-max w-max"><p className="text-center text-xs mx-auto w-fit mt-1 mb-0">Camp</p></NavLink>


	</header> 
}
