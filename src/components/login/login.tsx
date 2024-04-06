import Header from "../Header"
import Login from "../Login"
import {signIn, signOut, GetUser} from "../../util/database"
import { Navigate } from "react-router-dom";

export default function LoginPage(){
    console.log(GetUser())
    if(GetUser()){
        return <Navigate to ="/"/>
    }
    return(
        <>
             <Header
                heading="Log in to your account"
                paragraph="Don't have an account yet? "
                linkName="Sign Up"
                linkUrl="/signup"
                />
                           
            <Login/>
            {signIn()}   
                     
        </>
    )
}