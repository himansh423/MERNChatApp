import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/chatlogo.png";
const Header = () => {
  return (
    <nav className="bg-black">
      <div className="flex  justify-between items-center px-3 pr-5 pt-3">
        <div>
          <img src={logo} className="h-20 w-20 filter invert" alt="" />
        </div>
        <div className="mb-3 h-16 overflow-hidden rounded-[50%] flex items-center justify-center  w-16 border-2 border-white">
          <div className="h-14 rounded-[50%] flex items-center justify-center w-14 border-2 border-white">
            <div className="h-12 text-2xl  w-12 flex items-center justify-center border-2 border-white">
              <div className="h-12 text-2xl rotate-45 w-12 flex items-center justify-center border-2 border-white">
                <div className="rotate-[-45deg]  ">
                  <CiMenuBurger className="filter invert" />
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
