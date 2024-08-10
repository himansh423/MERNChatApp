import { Navigate, useLocation } from "react-router-dom";

const ProtectedChatRoomRoute = ({ children }:any) => {
  const token = localStorage.getItem('chatToken');
  const location = useLocation();

  if (!token) {
    // Redirect to home page if the token is not available
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Render the children (ChatRoom component)
  return children;
};

export default ProtectedChatRoomRoute;
