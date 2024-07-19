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
      setTimeout(adjustHeight, 300);
    };

    const handleBlur = () => {
      setTimeout(adjustHeight, 300);
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
    <div className="h-screen w-screen bg-[#141414] flex flex-col">
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
        className={`${styles.inputContainer}`}
        style={{ bottom: `${inputContainerBottom}px` }}
      >
        <textarea
          placeholder="Type a Reply..."
          className="text-[#808080] text-wrap"
          style={{ border: "1px solid grey" }}
        />
        <button type="submit">
          <div>
            <IoSendSharp className="text-[#808080] text-2xl" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
