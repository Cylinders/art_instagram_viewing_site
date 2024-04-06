import React from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DB } from "../../util/database";   
export default function TestDatabase() {

    let x = new DB(); 
	x.test();
	
	// 😭💀
	// not WORKING
	
    console.log("SUCCESS");
	
	
    const TEST = "hello world";

    return <div>
		This page exists solely for test purposes. 
		<br></br>
		<Link to="/">RETURN TO APP MAIN PAGE</Link> 
    </div>;
}


