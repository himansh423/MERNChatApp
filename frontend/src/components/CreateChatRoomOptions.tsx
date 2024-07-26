import React from 'react';
import styles from "./CreateChatRoomOptions.module.css"
import { Link } from 'react-router-dom';
const CreateChatRoom: React.FC= () => {
  return (
    <div className='w-screen h-[90vh] gap-10  bg-black text-white flex flex-col items-center justify-center'>
      <Link to={"/createChatRoom"} className={`${styles.button} h-[50px] w-[170px] rounded-md p-3 px-5`} >Create Chat Room</Link>
      <Link to={"/enterChat"} className={`${styles.button} mb-16 h-[50px] w-[170px] rounded-md p-3 `}>Enter in a Chatroom</Link>
    </div>
  );
};

export default CreateChatRoom;
