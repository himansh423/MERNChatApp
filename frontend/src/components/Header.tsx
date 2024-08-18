import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/logo.png";
import { useDispatch } from "react-redux";
import { BurgerAction } from "../store/Burger";
import { Link } from "react-router-dom";
const Header = () => {
  let dispatch = useDispatch();

  const burgerClicked = () => {
    dispatch(BurgerAction.burgerClick());
  };
  return (
    <nav className="bg-black">
      <div className="flex  justify-between items-center px-3 sm:px-7 pr-5 pt-3">
        <Link to={"/"}>
          <img src={logo} className="h-14 w-14 lg:h-20 lg:w-20" alt="Clyphix logo, the ultimate secure chat application designed for private, encrypted conversations. With Clyphix, you can effortlessly create and manage personalized chat rooms, ensuring your communications remain confidential and secure. Our platform offers real-time messaging and advanced privacy features, making it ideal for confidential discussions, social interactions, and business communications. Experience a seamless and secure chatting environment with Clyphix, where your privacy is our top priority. Whether connecting with friends, family, or colleagues, Clyphix provides the perfect solution for secure, end-to-end encrypted messaging. Start your private chat now with Clyphix and enjoy the peace of mind that comes with a secure, reliable, and user-friendly communication platform." />
        </Link>

        <div className="hidden lg:flex text-2xl text-white h-full items-center gap-10 font-semibold">
          <Link to={"/"}>Dashboard</Link>
          <Link to={"/enterChat"}>Enter</Link>
          <Link to={"/createChatRoom"}>Create</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/termsandconditios"}>Terms & conditions</Link>
        </div>
        <div
          onClick={burgerClicked}
          className="mb-3 lg:hidden h-12 overflow-hidden mt-2 rounded-[50%] flex items-center justify-center  w-12 border-2 border-white"
        >
          <div className="h-10 rounded-[50%] flex items-center justify-center w-10 border-2 border-white">
            <div className="h-8 text-2xl  w-8 flex items-center justify-center border-2 border-white">
              <div className="h-6 text-2xl rotate-45 w-6 flex items-center justify-center border-2 border-white">
                <div className="rotate-[-45deg]  ">
                  <CiMenuBurger className="filter invert text-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
