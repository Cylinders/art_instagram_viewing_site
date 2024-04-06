

export default function Post({
    title,
    img,
    author
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center margin">
                <img 
                    alt="hello"
                    className="h-24 w-24 mt-8"
                    src={img}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {title}
            </h2>
        </div>
    )
}