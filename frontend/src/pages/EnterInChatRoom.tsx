import { useNavigate } from "react-router-dom";
import styles from "./EnterInChatRoom.module.css";
import { useRef } from "react";

const EnterInChatRoom = () => {
  const RoomIDref = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const handleEnterChatroom = (e:any):any => {
       e.preventDefault();
       if(RoomIDref.current) {
        const roomID = RoomIDref.current.value;
          navigate(`/chatroom/${roomID}`);
       }
      
  }
  return (
    <main className="bg-black py-4 h-screen w-screen text-white">
      <div>
        <form onSubmit={(e) => handleEnterChatroom(e)} className="flex flex-col items-center mt-7 px-5">
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="chatid" className="px-1">
              Chatroom ID*
            </label>
            <input
              type="text"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="text"
              id="id"
              required
              ref={RoomIDref}
            />
          </div>
          <div className="flex flex-col gap-2 w-full  mt-4">
            <label htmlFor="password" className="px-1">
              Chatroom Password*
            </label>
            <input
              type="password"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="password"
              id="password"
            />
          </div>

          <button
            className={`${styles.SubmitButton} mt-7 w-full h-14 bg-purple-600  text-white py-2 px-4 rounded`}
          >
            Enter in Chatroom
          </button>
        </form>
      </div>
    </main>
  );
};

export default EnterInChatRoom;
