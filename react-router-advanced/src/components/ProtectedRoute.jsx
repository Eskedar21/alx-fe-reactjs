import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
    return false;
}

function ProtectedRoute() {
const auth = useAuth();
  return auth ? <Outlet/> : <Navigate to="/Home" />
}

export default ProtectedRoute