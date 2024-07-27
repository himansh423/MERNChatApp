import styles from "./CreateChatRoom.module.css";
import { useDispatch } from "react-redux";
import { CreatedChatRoomActions } from "../store/createdChatroom";
import { useNavigate } from "react-router-dom";

const CreateChatRoom: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const createRoom = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/create-room");
    const data = await response.json();
    const created = dispatch(
      CreatedChatRoomActions.ChatRoomCreated({ RoomID: data.roomId })
    );

    if (created) {
      navigate(`/yourChatroomId`);
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
              type="password"
              className={`${styles.input} h-14 w-full border border-gray-400 bg-[#171717] px-3 py-2 rounded-md`}
              name="password"
              id="password"
              placeholder="Enter your Chatroom password"
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
