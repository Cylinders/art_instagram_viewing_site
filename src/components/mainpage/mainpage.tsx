import React from 'react';

import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


export default function MainPage() {

	useEffect(() => {
		document.title = "ArtInstagram"
        window.scrollTo(0,0)
	}, []);
	const TEST = (
		"hello world"
	);

	return <div>
			
			{TEST}  
	
	</div>
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        position: 'relative',
        height: '100%',
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        height: '40%',
        maxHeight: 300
    },
    error_text: {
        color: 'green'
    }
})
