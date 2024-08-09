import styles from "./CreateChatRoom.module.css";
import { useDispatch } from "react-redux";
import { CreatedChatRoomActions } from "../store/createdChatroom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { create } from "../utils/ChatAuthUtils";
import axios from "axios";

const CreateChatRoom: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chatroomNameRef = useRef<HTMLInputElement | null >(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const user1Ref = useRef<HTMLInputElement | null>(null);
  const user2Ref = useRef<HTMLInputElement | null>(null);
  
  const createRoom = async (e: any) => {
    e.preventDefault();
  
    try {
      const chatroomName = chatroomNameRef.current?.value;
      const chatroomPassword = passwordRef.current?.value;
      console.log("Chatroom Name:", chatroomName);
      console.log("Chatroom Password:", chatroomPassword);
      const response = await axios.get("http://localhost:3000/create-room");
      console.log("API Response:", response);
      const chatroomId = response.data.roomId;
      console.log("Chatroom ID:", chatroomId);
      const chatroomParticipants = {
        participant1: user1Ref.current?.value,
        participant2: user2Ref.current?.value,
      };
      console.log("Participants:", chatroomParticipants);
  
      const createResponse = await create(chatroomName, chatroomId, chatroomPassword, chatroomParticipants);
      console.log("Create Function Response:", createResponse.data);
  
      const created = dispatch(
        CreatedChatRoomActions.ChatRoomCreated({ RoomID: chatroomId })
      );

      if (created) {
        navigate(`/yourChatroomId`);
      }
    } catch (error) {
      console.error("Error creating chatroom:", error);
    }
  };
  

  return (
    <main className="bg-black py-4 h-[120vh] w-screen text-white">
      <div>
        <h1 className={`${styles.head} text-center font-bold`}>
          Create Chatroom
        </h1>
        <form
          onSubmit={(e) => createRoom(e)}
          className="flex flex-col items-center mt-7 px-5"
        >
          <div className="flex flex-col gap-2 w-full ">
            <label htmlFor="name" className="px-1">
              Name of Chatroom*
            </label>
            <input
              ref={chatroomNameRef}
              type="text"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="chatroomName"
              id="chatroomName"
              placeholder="Enter Your Chatroom Name"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-2 w-full  mt-6">
            <label htmlFor="password" className="px-1">
              Chatroom Password*
            </label>
            <input
            ref={passwordRef}
              type="password"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="password"
              id="password"
              placeholder="Enter your Chatroom password"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 w-full  mt-6">
            <label htmlFor="password" className="px-1">
              User1*
            </label>
            <input
            ref={user1Ref}
              type="text"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="user1"
              id="user1"
              placeholder="Enter User1 name"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col gap-2 w-full  mt-6">
            <label htmlFor="password" className="px-1">
             User2*
            </label>
            <input
            ref={user2Ref}
              type="text"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="user2"
              id="user2"
              placeholder="Enter User2 name"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className={`${styles.SubmitButton} mt-7 w-full h-14 bg-purple-600  text-white py-2 px-4 rounded`}
          >
            Create Chatroom
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateChatRoom;
