import { Navigate } from "react-router-dom";

function OnlyAdminRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  if (!(user === "admin")){
    return <Navigate to="/" replace />;
  }

  return children;
}

export default OnlyAdminRoute;
