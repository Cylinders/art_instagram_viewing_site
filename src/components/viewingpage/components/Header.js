import logo from "./../../../static/imgs/LOGO_2.png";


export default function Header({
    heading,
    paragraph,
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center margin">
                <img 
                    alt="hello"
                    className="h-24 w-24 mt-8"
                    src={logo}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}

            </p>
        </div>
    )
}