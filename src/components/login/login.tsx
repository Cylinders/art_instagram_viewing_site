import Header from "../Header"
import Login from "../Login"
import {signIn, signOut} from "../../util/database"

export default function LoginPage(){
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
            {signOut()}
        </>
    )
}