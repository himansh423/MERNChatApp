import { FaCopy } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styles from "./CreatedChatRoom.module.css";
import { Link } from "react-router-dom";

const CreatedChatroom = () => {
  const { RoomID } = useSelector((store: RootState) => store.createdChatroom);
  const chatroomLink = RoomID;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(chatroomLink)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <main>
      <div className="w-full h-[90vh] px-3 bg-black text-white flex flex-col  items-center pt-20">
        <div className="text-center flex flex-col items-center ">
          <p className={`${styles.head}`}>Your chat room has been created!</p>
          <p>Your ChatRoom ID:</p>
          <p>Copy ID Please</p>
          <div className="flex pl-4 max-w-[300px] items-center justify-between mt-4 border border-1-gray">
            <span className="w-64 text-left">{chatroomLink}</span>
            <div className="border-l-2 border-gray-100 p-1 flex justify-center items-center">
              <FaCopy onClick={handleCopy} className="cursor-pointer w-8 h-8" />
            </div>
          </div>
          <div>
            <button className={`${styles.SubmitButton} mt-7   w-full h-14 bg-purple-600  text-white py-2 px-4 rounded`}>
              <Link
                
                to={"/enterChat"}
              >
                Enter in Chatroom
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreatedChatroom;
