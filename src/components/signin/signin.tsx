import Header from "../Header";
import Signup from "../Signup";

export default function SignupPage(){
    return(
        <>
            <Header
              heading="Sign up to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </>
    )
}