import styles from "./HeroHome.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
const HeroHome = () => {
  return (
    <main>
      <div className="bg-black pt-5 h-screen w-screen flex flex-col items-center gap-3">
        <h1 className={`${styles.head} text-center px-5`}>
          CREATE YOUR PRIVATE CHATROOM
        </h1>
        <div className="h-[200px] w-[200px] bg-white rounded-[50%]">circle</div>
        <h1 className={`${styles.description}`}>
          {" "}
          Connect privately with friends, family, or colleagues. Create a secure
          chat room and start your conversation instantly.
        </h1>
        <button className="h-16 w-52 mt-2 pl-2 flex justify-center items-center gap-5 rounded-[40px] bg-[#5201ff]">
          <span className={`${styles.chatting} text-white`}>
            START CHATTING
          </span>
          <span
            className={`${styles.arrow} bg-[#ffffff] rounded-[50%] h-10 flex items-center justify-center w-10`}
          >
            <IoIosArrowRoundForward />
          </span>
        </button>
      </div>
    </main>
  );
};

export default HeroHome;
