import React, { FC } from 'react';

interface Post{
    title:string,
    img:string,
    author:string
}

const NewPost: FC<Post> = ({ title, img, author }) => {
    return(
        <div className="m-8 m-auto w-fit basis-1/4">
            <p className="text-left text-lg text-red-600">
                {author} {' '}
            </p>
            <div className="flex justify-center margin">
                <img 
                    alt="hello"
                    className="h-80 w-80 min-w-80"
                    src={img}
                />
                
            </div>
            <p className="text-left  text-xs font-light text-gray-900">
                    {title}
                </p>
            
            
        </div>
    )
};
export default NewPost