import { useUser } from "./components/context/Authorization";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoute = () => {
  const { user } = useUser(); //get context of app
  const location = useLocation(); //lets the app know where it is
  /**if user is not set in context send to login. */
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} replace state={{ path: location.pathname }} />
  );
};
export default AuthRoute;
