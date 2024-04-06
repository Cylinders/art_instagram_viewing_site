import React from 'react';

import { useEffect } from 'react';
import Header from './components/Header';
import { DB } from "../../util/database"
export default function ViewingPage() {

	useEffect(() => {
		document.title = "Easel.ly"
        window.scrollTo(0,0)
	}, []);

	let posts: string[][] = DB.getPosts();
	return <>
		<Header
              heading="ARTfolio"
              paragraph=""
            />
		
	</>





}
