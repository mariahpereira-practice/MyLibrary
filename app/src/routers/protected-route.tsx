import { Navigate, Outlet, useLocation } from "react-router"
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth-slice";
import { Layout } from "../components/Layout";

export const ProtectedRoute = () => {

    const {isAuthenticated} = useSelector(selectAuth);

    const location = useLocation();

    if(!isAuthenticated){
        toast.warning("Você precisa fazer o login", {toastId: "auth-warning"});
        
        return <Navigate to="/login" replace state={{from: location}}></Navigate>
    }

    return (
          <Outlet></Outlet>
    )
}