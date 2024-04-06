import React from 'react';

import { useEffect } from 'react';
import Header from './components/Header';
import {getPosts, downloadAll} from "../../util/database"
import Post from "./components/Post"
export default function ViewingPage() {
    
    downloadAll(); 
	useEffect(() => {
		document.title = "Easel.ly"
        window.scrollTo(0,0)
	}, []);
	let posts: string[][] = getPosts();
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
		<ul className="flex justify-center w-2/3 m-auto flex-wrap overflow-y-auto	">{post_components}</ul>
		
	</>





}
