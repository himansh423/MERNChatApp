import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/chatlogo.png";
const Header = () => {
  return (
    <nav>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="h-20 rounded-[50%] flex items-center justify-center w-20 border-2 border-black">
          <div className="h-16 rounded-[50%] flex items-center justify-center w-16 border-2 border-black">
            <div className="h-14 text-2xl  w-14 flex items-center justify-center border-2 border-black">
              <CiMenuBurger />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
