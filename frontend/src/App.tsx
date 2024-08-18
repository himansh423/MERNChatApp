import { lazy, Suspense, useEffect } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { getUserData } from "./utils/authUtils";
import Burger from "./components/Burger";
import ProtectedChatRoomRoute from "./components/ProtectedChatRoomRoute";
import Footer from "./components/Footer";

const Navbar = lazy(() => import("./components/Header"));
const HomeScreen = lazy(() => import("./pages/HomeScreen"));
const ChatRoom = lazy(() => import("./components/ChatRoom"));
const Login = lazy(() => import("./components/Login"));
const SignUp = lazy(() => import("./components/SignUp"));
const CreateChatRoomOptions = lazy(
  () => import("./components/CreateChatRoomOptions")
);
const CreateChatRoom = lazy(() => import("./pages/CreateChatRoom"));
const EnterChatRoom = lazy(() => import("./pages/EnterInChatRoom"));
const CreatedChatRoom = lazy(() => import("./components/CreatedChatroom"));
const About = lazy(() => import("./components/About"));
const Terms = lazy(() => import("./components/Terms"));
import HelmetWrapper from "./components/HelmetWrapper";
const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isChatRoom = location.pathname.startsWith("/chatroom");
  useEffect(() => {
    const user = getUserData();
    if (
      !user &&
      location.pathname !== "/login" &&
      location.pathname !== "/signup" &&
      location.pathname !== "/"
    ) {
      navigate("/login");
    } else if (
      user &&
      (location.pathname === "/login" || location.pathname === "/signup")
    ) {
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <>
      {!isChatRoom && [<Navbar key="navbar" />, <Burger key="burger" />]}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HelmetWrapper
                title={"Clyphix - Secure Chatrooms"}
                description={
                  "Welcome to Clyphix, the ultimate secure chat application designed for private, encrypted conversations. With Clyphix, you can effortlessly create and manage personalized chat rooms, ensuring your communications remain confidential and secure. Our platform offers real-time messaging and advanced privacy features, making it ideal for confidential discussions, social interactions, and business communications. Experience a seamless and secure chatting environment with Clyphix, where your privacy is our top priority. Whether connecting with friends, family, or colleagues, Clyphix provides the perfect solution for secure, end-to-end encrypted messaging. Start your private chat now with Clyphix and enjoy the peace of mind that comes with a secure, reliable, and user-friendly communication platform."
                }
                keywords={
                  "Clyphix, private chat rooms, secure messaging app, encrypted chat application, real-time communication, confidential online chat, safe chat platform, end-to-end encryption, privacy-focused chat, instant messaging app, online chat room security, private conversation app, secure online communication, best app for private chat rooms, how to create secure chat rooms online, private and encrypted messaging app, real-time private chat for business, secure chat app for confidential conversations."
                }
              />
              <HomeScreen />
            </>
          }
        />
        <Route
          path="/chatroom/:idofroom"
          element={
            <ProtectedChatRoomRoute>
              <ChatRoom />
            </ProtectedChatRoomRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/createChatRoomOptions"
          element={<CreateChatRoomOptions />}
        />
        <Route path="/createChatRoom" element={<CreateChatRoom />} />
        <Route path="/yourChatroomId" element={<CreatedChatRoom />} />
        <Route path="/enterChat" element={<EnterChatRoom />} />
        <Route
          path="/about"
          element={
            <>
              <HelmetWrapper
                title={"Clyphix-About Us"}
                description={
                  "Discover Clyphix, the premier chat application focused on creating private, secure chat rooms. At Clyphix, we prioritize your privacy with end-to-end encryption, ensuring all your conversations remain confidential. Our easy-to-use platform allows you to create personalized chat rooms for friends, family, or business associates, offering a seamless communication experience. Learn more about how Clyphix empowers you with real-time messaging, robust security features, and complete control over your chat environment. Explore our commitment to privacy and see why Clyphix is the trusted choice for secure, private conversations"
                }
                keywords={
                  "Clyphix, about Clyphix, private chat rooms, secure chat platform, encrypted conversations, end-to-end encryption, secure messaging app, private online chat, real-time messaging, confidential communication, safe chat rooms, privacy-focused chat application, secure communication app, personalized chat rooms, private messaging solution, online chat security, Clyphix privacy"
                }
              />
              <About />
            </>
          }
        />
        <Route
          path="/termsandconditios"
          element={
            <>
              <HelmetWrapper
                title={"Clyphix-Terms & Conditions"}
                description={
                  "Read the Terms and Conditions for Clyphix, our secure chat application designed for private conversations. Our terms outline user responsibilities, privacy policies, and acceptable use of our platform. By using Clyphix, you agree to comply with our guidelines to ensure a safe and respectful communication environment. Learn about our commitment to privacy, data protection, and user rights. For a detailed understanding of how we handle your information and the rules governing our services, review the full Terms and Conditions for Clyphix."
                }
                keywords={
                  "Clyphix Terms and Conditions, Clyphix chat application, user responsibilities, privacy policies, acceptable use, secure chat platform, encrypted messaging app, terms of service, chat application rules, user agreement, data protection, privacy guidelines, secure communication terms, chat app terms, user rights, online chat terms, Clyphix privacy terms, legal terms for chat application, user conduct guidelines, secure messaging policies."
                }
              />
              <Terms />
            </>
          }
        />
      </Routes>
      {!isChatRoom && [<Footer key="footer" />]}
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
