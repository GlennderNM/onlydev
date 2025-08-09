import { Navigate } from "react-router-dom";
import { useSubcription } from "../store/AuthStore";

export const ProtectedRoute = ({children, autenticated=true}) => {
    const {user} = useSubcription()
    if (autenticated===false){
        if(!user){
            return children
        }else{
            return <Navigate to={"/"} replace />
        }
    }

    if(autenticated){
        if(user){
            return children
        }else{
            return <Navigate to={"/login"} replace />
        }
    }

    return <Navigate to={"/login"} replace />
}