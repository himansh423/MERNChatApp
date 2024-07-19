import styles from "./HeroHome.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiFillWechat } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <main>
      <div className="bg-black pt-5 h-screen w-screen flex flex-col items-center gap-3">
        <h1 className={`${styles.head} text-center px-5`}>
          CREATE YOUR PRIVATE CHATROOM
        </h1>
        <div className="h-[200px]  w-[200px] flex items-center justify-center bg-white  rounded-[50%]"><span className="text-black  text-8xl"><AiFillWechat/></span></div>
        <h1 className={`${styles.description}`}>
          {" "}
          Connect privately with friends, family, or colleagues. Create a secure
          chat room and start your conversation instantly.
        </h1>
        <Link to={"/chatroom/1"} className="h-16 w-52 mt-2 pl-2 flex justify-center items-center gap-5 rounded-[40px] bg-[#5201ff]">
          <span className={`${styles.chatting} text-white`}>
            START CHATTING
          </span>
          <span
            className={`${styles.arrow} text-[25px] bg-[#ffffff] rounded-[50%] h-10 flex items-center justify-center w-10`}
          >
            <IoIosArrowRoundForward />
          </span>
        </Link>
      </div>
    </main>
  );
};

export default HeroHome;
