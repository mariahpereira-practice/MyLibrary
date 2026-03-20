import { Navigate, Outlet, useLocation } from "react-router"
import { toast } from "react-toastify";

export const ProtectedRoute = () => {

    const isAuthenticated = false;
    const location = useLocation();

    if(!isAuthenticated){
        toast.warning("Você precisa fazer o login", {toastId: "auth-warning"});
        
        return <Navigate to="/login" replace state={{from: location}}></Navigate>
    }

    return (
       <Outlet></Outlet>
    )
}