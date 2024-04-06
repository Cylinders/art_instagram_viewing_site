import Header from "../Header"
import Login from "../Login"
import {signOut} from "../../util/database"
import { Navigate } from "react-router-dom";

export default function LoginPage(){
    signOut();
    return <Navigate to ="/"/>
    
}