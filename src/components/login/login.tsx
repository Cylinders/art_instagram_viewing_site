import Header from "../Header"
import Login from "../Login"
import {signIn, getSign} from "../../util/database"
import { Navigate } from "react-router-dom";

export default function LoginPage(){
    console.log("Sign " +  getSign())
    if(getSign()){
        return <Navigate to ="/"/>
    }
    return(
        <>
             <Header
                heading="Log in to your account"
                paragraph="Don't have an account yet?"
                linkName="Sign Up"
                linkUrl="/signup"
                />
                           
            <Login/>
            {signIn()}   
                     
        </>
    )
}