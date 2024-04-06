import React, { FC } from 'react';

interface Post{
    title:string,
    img:string,
    author:string
}

const NewPost: FC<Post> = ({ title, img, author }) => {
    return(
        <div className="mb-10 flex justify-center margin">
            <div className="flex justify-center margin">
                <img 
                    alt="hello"
                    className="h-24 w-24 mt-8"
                    src={img}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {title}
            </h2>
            <h3 className="mt-6 text-center text-sm text-gray-900">
{author}</h3>
        </div>
    )
};
export default NewPost