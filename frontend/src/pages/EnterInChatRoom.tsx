import { useNavigate } from "react-router-dom";
import styles from "./EnterInChatRoom.module.css";
import { useRef } from "react";
import { enter } from "../utils/ChatAuthUtils";

const EnterInChatRoom = () => {
  const roomIdRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleEnterChatroom = async (e: any) => {
    e.preventDefault();

    const roomId = roomIdRef.current?.value;
    const password = passwordRef.current?.value;

    if (!roomId || !password) {
      alert("Please enter both room ID and password.");
      return;
    }

    try {
      const data = await enter(roomId, password);

      if (data.token) {
        localStorage.setItem("chatToken", data.token);
        navigate(`/chatroom/${roomId}`);
      } else {
        alert(data.message || "Failed to enter the chatroom.");
      }
    } catch (error) {
      console.error("Error entering chatroom:", error);
      alert("An error occurred while trying to enter the chatroom.");
    }
  };

  return (
    <main className="bg-black py-4 h-screen w-screen text-white">
      <div>
        <form onSubmit={handleEnterChatroom} className="flex flex-col items-center mt-7 px-5">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="chatid" className="px-1">
              Chatroom ID*
            </label>
            <input
              type="text"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="chatid"
              id="chatid"
              required
              ref={roomIdRef}
            />
          </div>
          <div className="flex flex-col gap-2 w-full mt-4">
            <label htmlFor="password" className="px-1">
              Chatroom Password*
            </label>
            <input
              type="password"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="password"
              id="password"
              ref={passwordRef}
            />
          </div>

          <button
            type="submit"
            className={`${styles.SubmitButton} mt-7 w-full h-14 bg-purple-600 text-white py-2 px-4 rounded`}
          >
            Enter in Chatroom
          </button>
        </form>
      </div>
    </main>
  );
};

export default EnterInChatRoom;
