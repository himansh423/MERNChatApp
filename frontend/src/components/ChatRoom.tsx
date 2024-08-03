import React, { useEffect, useRef } from "react";
import { IoSendSharp } from "react-icons/io5";
import img from "../assets/chatlogo.png";
import styles from "./ChatRoom.module.css";
import { io, Socket } from "socket.io-client";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { messageAction } from "../store/message";

const ChatRoom: React.FC = () => {
  const { idofroom } = useParams<{ idofroom: string }>();
  const socket = useRef<Socket | null>(null);
  const messages = useSelector((store: RootState) => store.message.messages);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.current = io("http://localhost:3000");

    socket.current.on("connect", () => {
      console.log("Connected with ID: ", socket.current?.id);
      socket.current?.emit("join-room", idofroom);
    });

    socket.current.on("receive-message", (data: string) => {
      console.log("Message received: ", data);
      dispatch(messageAction.messageReceived({ text: data }));
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [idofroom, dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageRef.current) {
      const message = messageRef.current.value;
      console.log("Sending message: ", message);
      socket.current?.emit("message", { roomId: idofroom, message });
      dispatch(messageAction.messageSent({ text: message }));
      messageRef.current.value = "";
    }
  };

  return (
    <div className="h-screen w-screen bg-[#141414] flex flex-col">
      <div className={styles.header}>
        <div className="h-[37px] w-[37px] border">
          <img
            src={img}
            className="w-[40px] filter invert h-[40px]"
            alt="Chat logo"
          />
        </div>
        <div>
          <h1 className="text-[#BFBFBF]">Hello World</h1>
          <div className="flex text-[10px] text-[#808080]">
            <p>Participant1</p>,<p>Participant2</p>
          </div>
        </div>
      </div>
      <div className={styles.ChatContent}>
        {messages
          .slice()
          .reverse()
          .map((message, index) => (
            <div key={index} className="flex gap-5 flex-col justify-end">
              <div
                className={
                  message.type === "sent" ? styles.Sender : styles.reciever
                }
              >
                <p className="text">{message.text}</p>
              </div>
            </div>
          ))}
      </div>
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <textarea
          placeholder="Type a Reply..."
          className="text-[#808080] text-wrap"
          style={{ border: "1px solid grey" }}
          ref={messageRef}
        />
        <button type="submit">
          <div>
            <IoSendSharp className="text-[#808080] text-2xl" />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
