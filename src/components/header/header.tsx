import React from 'react';
import {useEffect} from 'react';

import { NavLink } from "react-router-dom"; 
export default function Header() {
    console.log("This should run everytime that the header is rendered.")


	return <header className = "border-gray mt-0 h-max rounded-2xl sticky top-0 z-[1] mx-auto  flex w-full flex-wrap items-center justify-between border-b border-tbtred bg-background p-[1em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary"> 

    <NavLink to="/" className = "mx-auto h-max w-max"><p className="text-center text-xs mx-auto w-fit mt-1 mb-0">Home</p></NavLink>

    <NavLink to="/signin" className = "mx-auto h-max w-max"><p className="text-center text-xs mx-auto w-fit mt-1 mb-0">Sign Up</p></NavLink>


    <NavLink to="/login" className = "mx-auto h-max w-max"><p className="text-center text-xs mx-auto w-fit mt-1 mb-0">Log In</p></NavLink>


	</header> 
}
