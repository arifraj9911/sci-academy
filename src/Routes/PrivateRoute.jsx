import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  // console.log("User:", user);
  // console.log("Loading:", loading);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#F4EDE8]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
