import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/chatlogo.png";
import { useDispatch } from "react-redux";
import { BurgerAction } from "../store/Burger";
const Header = () => {
 let dispatch = useDispatch();

  const burgerClicked = () => {
    dispatch(BurgerAction.burgerClick());
  };
  return (
    <nav className="bg-black">
      <div className="flex  justify-between items-center px-3 pr-5 pt-3">
        <div>
          <img src={logo} className="h-16 w-16 filter invert" alt="" />
        </div>
        <div
          onClick={burgerClicked}
          className="mb-3 h-12 overflow-hidden mt-2 rounded-[50%] flex items-center justify-center  w-12 border-2 border-white"
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
