import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation, useNavigate } from "react-router-dom";
import Burger from "./components/Burger.tsx";

const Navbar = lazy(() => import("./components/Header.tsx"));
const HomeScreen = lazy(() => import("./pages/HomeScreen"));
const ChatRoom = lazy(() => import("./components/ChatRoom.tsx"));
const Login = lazy(() => import("./components/Login.tsx"));
const SignUp = lazy(() => import("./components/SignUp.tsx"));
const CreateChatRoomOptions = lazy(() => import("./components/CreateChatRoomOptions.tsx"));
const CreateChatRoom = lazy(() => import("./pages/CreateChatRoom.tsx"));
const EnterChatRoom = lazy(() => import("./pages/EnterInChatRoom.tsx"));

const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isChatRoom = location.pathname.startsWith("/chatroom");

  const createRoom = async () => {
    const response = await fetch("http://localhost:3000/create-room");
    const data = await response.json();
    navigate(`/chatroom/${data.roomId}`);
  };

  return (
    <>
       {!isChatRoom && [<Navbar />,<Burger/>]}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/chatroom/:idofroom" element={<ChatRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createChatRoomOptions" element={<CreateChatRoomOptions/>} />
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