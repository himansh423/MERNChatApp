import React, { useEffect } from 'react';
import { IoSendSharp } from "react-icons/io5";
import img from "../assets/chatlogo.png";
import styles from "./ChatRoom.module.css";

const ChatRoom: React.FC = () => {
  useEffect(() => {
    const adjustHeight = () => {
      const inputContainer = document.querySelector(`.${styles.inputContainer}`) as HTMLDivElement;
      if (window.innerHeight < 500) { // Adjust this value based on your testing
        inputContainer.style.bottom = `${window.innerHeight - 500}px`;
      } else {
        inputContainer.style.bottom = '0px';
      }
    };

    window.addEventListener('resize', adjustHeight);

    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  return (
    <main>
      <div className="h-screen w-screen bg-[#141414] flex flex-col">
        <div className="bg-[#ffffff0A] h-16 w-full px-5 fixed border-b-[1px] flex items-center gap-5 border-[grey]">
          <div className="h-[37px] w-[37px] border">
            <img src={img} className="w-[40px] filter invert h-[40px]" alt="" />
          </div>
          <div>
            <h1 className="text-[#BFBFBF]">Hello World</h1>
            <div className="flex text-[10px] text-[#808080] ">
              <p>Participant1</p>,
              <p>Participant2</p>
            </div>
          </div>
        </div>
        <div className="text-white mt-20 h-full bg-[#141414] overflow-x-scroll">
          {/* Chat messages */}
        </div>
        <div className={styles.inputContainer}>
          <input type="text" />
          <button type="submit">
            <div>
              <IoSendSharp />
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChatRoom;
