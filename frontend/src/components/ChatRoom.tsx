import React, { useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import img from "../assets/chatlogo.png";
import styles from "./ChatRoom.module.css";

const ChatRoom: React.FC = () => {
  const [inputContainerBottom, setInputContainerBottom] = useState(0);

  useEffect(() => {
    const adjustHeight = () => {
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.clientHeight;

      if (viewportHeight < documentHeight) {
        setInputContainerBottom(documentHeight - viewportHeight);
      } else {
        setInputContainerBottom(0);
      }
    };

    const handleFocus = () => {
      setTimeout(adjustHeight, 300); // Delay to ensure the keyboard is fully opened
    };

    const handleBlur = () => {
      setTimeout(adjustHeight, 300); // Delay to ensure the keyboard is fully closed
    };

    window.addEventListener("resize", adjustHeight);
    window.addEventListener("focusin", handleFocus);
    window.addEventListener("focusout", handleBlur);

    return () => {
      window.removeEventListener("resize", adjustHeight);
      window.removeEventListener("focusin", handleFocus);
      window.removeEventListener("focusout", handleBlur);
    };
  }, []);

  return (
    <main className="h-screen w-screen bg-[#141414] flex flex-col">
      <div className={styles.header}>
        <div className="h-[37px] w-[37px] border">
          <img src={img} className="w-[40px] filter invert h-[40px]" alt="" />
        </div>
        <div>
          <h1 className="text-[#BFBFBF]">Hello World</h1>
          <div className="flex text-[10px] text-[#808080]">
            <p>Participant1</p>,<p>Participant2</p>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className="chatContainer">lorem*60</div>
      </div>
      <div
        className={styles.inputContainer}
        style={{ bottom: `${inputContainerBottom}px` }}
      >
        <input type="text" />
        <button type="submit">
          <div>
            <IoSendSharp />
          </div>
        </button>
      </div>
    </main>
  );
};

export default ChatRoom;
