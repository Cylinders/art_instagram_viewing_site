import React from 'react';
import {useEffect} from 'react';
import {getNav} from "../../util/database"
import { NavLink } from "react-router-dom"; 
export default function Header() {
	return <header className = "border-gray mt-0 h-max rounded-2xl sticky top-0 z-[1] mx-auto flex border-b border-tbtred bg-background p-[1em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary"> 

    <NavLink to="/" className = "mx-auto h-max"><p className="text-center text-xs mx-auto mt-1 mb-0">Home</p></NavLink>
    {getNav()}


	</header> 
}
