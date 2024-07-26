import { lazy, Suspense, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes, useNavigate, useLocation } from "react-router-dom";
import { getUserData } from './utils/authUtils';
import Burger from "./components/Burger";

const Navbar = lazy(() => import("./components/Header"));
const HomeScreen = lazy(() => import("./pages/HomeScreen"));
const ChatRoom = lazy(() => import("./components/ChatRoom"));
const Login = lazy(() => import("./components/Login"));
const SignUp = lazy(() => import("./components/SignUp"));
const CreateChatRoomOptions = lazy(() => import("./components/CreateChatRoomOptions"));
const CreateChatRoom = lazy(() => import("./pages/CreateChatRoom"));
const EnterChatRoom = lazy(() => import("./pages/EnterInChatRoom"));

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isChatRoom = location.pathname.startsWith("/chatroom");

  useEffect(() => {
    const user = getUserData();
    if (
      !user &&
      location.pathname !== '/login' &&
      location.pathname !== '/signup' &&
      location.pathname !== '/'
    ) {
      navigate('/login');
    }
    else if(
      user && 
      location.pathname == '/login' ||
      location.pathname == '/signup'
     ){
      navigate('/');
     }
  }, [location, navigate]);

  const createRoom = async () => {
    const response = await fetch("http://localhost:3000/create-room");
    const data = await response.json();
    navigate(`/chatroom/${data.roomId}`);
  };

  return (
    <>
      {!isChatRoom && [<Navbar key="navbar" />, <Burger key="burger" />]}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/chatroom/:idofroom" element={<ChatRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createChatRoomOptions" element={<CreateChatRoomOptions />} />
        <Route path="/createChatRoom" element={<CreateChatRoom onCreateRoom={createRoom} />} />
        <Route path="/enterChat" element={<EnterChatRoom />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppContent />
      </Suspense>
    </Router>
  );
};

export default App;
