import { lazy, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

const Navbar = lazy(() => import("./components/Header.tsx"));
const HomeScreen = lazy(() => import("./pages/HomeScreen"));
const ChatRoom = lazy(() => import("./components/ChatRoom.tsx"));
const Login = lazy(() => import("./components/Login.tsx"));
const SignUp = lazy(() => import("./components/SignUp.tsx"));
const CreateChatRoom =lazy(() => import("./pages/CreateChatRoom.tsx"));
const AppContent = () => {
  const location = useLocation();
  const isChatRoom = location.pathname.startsWith("/chatroom/");
  
  return (
    <>
      {!isChatRoom && <Navbar />}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/chatroom/:id" element={<ChatRoom />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/createChatRoom" element={<CreateChatRoom/>} />
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
