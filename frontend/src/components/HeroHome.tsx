import styles from "./HeroHome.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiFillWechat } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeroHome = () => {
  return (
    <main>
      <div className="bg-black pt-5 h-[97vh] w-screen flex xl:flex-row xl:justify-between xl:px-10 xl:pr-32 flex-col items-center gap-8">
        <h1 className={`${styles.head}  text-center px-5`}>
          CREATE YOUR PRIVATE CHATROOM
        </h1>
        <div className="h-[200px] xl:h-[400px] xl:w-[400px] xl:mr-14 w-[200px] flex items-center border-2 border-purple-600 justify-center bg-white  rounded-[50%]">
          <span className="text-black  text-8xl">
            <AiFillWechat />
          </span>
        </div>
        <div className="flex flex-col gap-5 xl:w-[200px] items-center xl:px-8">
        <h1 className={`${styles.description}`}>
          {" "}
          Connect privately with friends, family, or colleagues. Create a secure
          chat room and start your conversation instantly.
        </h1>
        <Link
          to={"/chatroom/1"}
          className="h-16 w-52 mt-2 pl-2 flex justify-center items-center gap-5 rounded-[40px] bg-[#5201ff]"
        >
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
        
      </div>
    </main>
  );
};

export default HeroHome;
