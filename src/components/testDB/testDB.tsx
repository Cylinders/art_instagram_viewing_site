import React from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { DB } from "../../util/database";   
export default function TestDatabase() {

    
	const userTest = new DB("bruh"); 
    
	console.log(userTest.logInWithEmailAndPassword("ogvruth@gmail", "ogvruth123"));   
	
	userTest.writeTest("SHREYAS"); 
    console.log("SUCCESS");
	
	
    const TEST = "hello world";

    return <div>
		This page exists solely for test purposes. 
		
		<Link to="/">RETURN TO APP MAIN PAGE</Link> 
    </div>;
}


