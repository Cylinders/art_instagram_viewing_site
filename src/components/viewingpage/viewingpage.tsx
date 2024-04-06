import React from 'react';

import { useEffect } from 'react';
import Header from './components/Header';
import { DB } from "../../util/database"
import Post from "./components/Post"
export default function ViewingPage() {

	useEffect(() => {
		document.title = "Easel.ly"
        window.scrollTo(0,0)
	}, []);

	let posts: string[][] = new DB("test").posts;
	console.log(posts);
	const post_components = posts.map((post) => 
		<li>
			<Post title={post[0]}
				img={post[1]}
				author={post[2]}/>
			
		</li>
	);

	return <>
		<Header
              heading="ARTfolio"
              paragraph=""
            />
		<ul>{post_components}</ul>
		
	</>





}
