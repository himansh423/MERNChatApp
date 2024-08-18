import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { enter } from "../utils/ChatAuthUtils";
import styles from "./EnterInChatRoom.module.css";
import Loading from "../components/Loading"; 
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const EnterInChatRoom = () => {
  const roomIdRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [buffer, setBuffer] = useState<boolean>(false); 

  const handleEnterChatroom = async (e: any) => {
    e.preventDefault();
    setBuffer(true); 

    const roomId = roomIdRef.current?.value;
    const password = passwordRef.current?.value;

    if (!roomId || !password) {
      alert("Please enter both room ID and password.");
      setBuffer(false); 
      return;
    }

    try {
      const data = await enter(roomId, password);
      

      if (data.token) {
        localStorage.setItem("chatToken", data.token);
        setBuffer(false); 
        navigate(`/chatroom/${roomId}`);
      } else {
        alert(data.message || "Failed to enter the chatroom.");
        setBuffer(false); 
      }
    } catch (error) {
      alert("An error occurred while trying to enter the chatroom.");
      setBuffer(false); 
    }
  };

  const [type, setType] = useState("password");
  const handleShowPass = (arg: string) => {
    if (arg === "show") {
      setType("text");
    } else if (arg === "hide") {
      setType("password");
    }
  };
  return (
    <main className="bg-black py-4 h-screen w-screen text-white">
      {buffer && <Loading />} 
      
      <div>
        <form onSubmit={handleEnterChatroom} className="flex flex-col items-center mt-7 px-5">
          <div className="flex flex-col lg:items-center gap-2 w-full">
            <label htmlFor="chatid" className="px-1">
              Chatroom ID*
            </label>
            <input
              type="text"
              className={`${styles.input} h-14 w-full border border-gray-400 lg:w-[500px] bg-[#171717] px-3 py-2 rounded-md`}
              name="chatid"
              id="chatid"
              required
              ref={roomIdRef}
            />
          </div>
          <div className="flex flex-col lg:items-center gap-2 w-full mt-4">
            <label htmlFor="password" className="px-1">
              Chatroom Password*
            </label>
            <div className="relative">
              {type === "password" ? (
                <div
                  onClick={() => handleShowPass("show")}
                  className="absolute right-3 z-10 top-[19px] text-[20px]"
                >
                  <FaRegEyeSlash />
                </div>
              ) : (
                <div
                  onClick={() => handleShowPass("hide")}
                  className="absolute right-3 z-10 top-[19px] text-[20px]"
                >
                  <FaEye />
                </div>
              )}
              <input
                type={type}
                ref={passwordRef}
                required
                placeholder="Enter your password..."
                className={`${styles.input} h-14 w-full border border-gray-400 lg:w-[500px] bg-[#171717] px-3 py-2 rounded-md`}
                name="password"
                id="password"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`${styles.SubmitButton} mt-7 w-full h-14 bg-purple-600 lg:w-[500px] text-white py-2 px-4 rounded`}
            disabled={buffer} 
          >
            Enter in Chatroom
          </button>
        </form>
      </div>
    </main>
  );
};

export default EnterInChatRoom;
