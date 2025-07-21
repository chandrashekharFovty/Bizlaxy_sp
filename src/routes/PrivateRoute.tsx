import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = true; // replace with actual auth condition

  if (!user) {
    // Declarative redirect—renders when "user" is false
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default PrivateRoute;