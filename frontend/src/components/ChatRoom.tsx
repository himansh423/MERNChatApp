import React, { useEffect, useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import img from "../assets/chatlogo.png";
import styles from "./ChatRoom.module.css";
import { io, Socket } from "socket.io-client";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { messageAction } from "../store/message";
import axios from "axios";
import Loading from "./Loading";
import { debounce } from 'lodash';

const ChatRoom: React.FC = () => {
  const { idofroom } = useParams<{ idofroom: string }>();
  const socket = useRef<Socket | null>(null);
  const messages = useSelector((store: RootState) => store.message.messages);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useDispatch();
  const [modal, setModals] = useState<boolean>(false);
  const [chatRoomName, setChatRoomName] = useState<string>("");
  const [participants, setParticipants] = useState<{
    participant1: string;
    participant2: string;
  }>({ participant1: "", participant2: "" });
  const [buffer, setBuffer] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const navigate = useNavigate();
  const [inputContainerBottom, setInputContainerBottom] = useState(0);
  const [typingStatus, setTypingStatus] = useState<boolean>(false);

  const handleTyping = () => {
    if (!typingStatus) {
      setTypingStatus(true);
      socket.current?.emit("user-typing", { roomId: idofroom });
    }
  };

  const handleStopTyping = () => {
    if (typingStatus) {
      setTypingStatus(false);
      socket.current?.emit("stop-typing", idofroom);
    }
  };

  // Debounce the typing and stop typing functions
  const debouncedHandleTyping = debounce(handleTyping, 300);
  const debouncedHandleStopTyping = debounce(handleStopTyping, 300);

  useEffect(() => {
    const token = localStorage.getItem("chatToken");
    if (!token) {
      console.log("token not found");
    } else {
      console.log(token);
    }

    socket.current = io("", {
      auth: {
        token,
      },
    });

    socket.current.on("connect", () => {
      console.log("Connected with ID: ", socket.current?.id);
      socket.current?.emit("join-room", idofroom);
    });

    socket.current?.on("user-typing", () => {
      setTypingStatus(true);
    });

    socket.current?.on("stop-typing", () => {
      setTypingStatus(false);
    });

    socket.current.on("receive-message", (data: string) => {
      console.log("Message received: ", data);
      dispatch(messageAction.messageReceived({ text: data }));
    });

    const fetchChatRoomDetails = async () => {
      try {
        const response = await axios.get(`/api/chatroom/create/${idofroom}`);
        setChatRoomName(response.data.ChatroomName);
        setParticipants(response.data.participants);
      } catch (error) {
        console.error("Error fetching chatroom details:", error);
      }
    };

    fetchChatRoomDetails();

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

  const handleModal = () => {
    setModals(true);
  };

  const handleCancel = () => {
    setModals(false);
  };

  const handleDelete = async () => {
    setBuffer(true);
    try {
      const response = await axios.delete(`/api/chatroom/create/${idofroom}`);

      if (response.status === 200) {
        setBuffer(false);
        setDeleted(true);
      }
    } catch (error) {
      console.error("Error deleting chatroom:", error);
      setBuffer(false);
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-screen bg-[#141414] flex flex-col">
      {buffer && <Loading />}

      {modal && !deleted && (
        <div className="h-[150px] rounded-md w-[250px] bg-yellow-400 text-white absolute z-40 top-28 left-[50%] py-5 px-5 translate-x-[-50%]">
          <h1 className="text-center text-black font-semibold">
            Do you really want to delete this Chatroom?
          </h1>
          <div className="flex gap-5 w-full justify-center mt-6">
            <button onClick={handleCancel} className="h-10 bg-green-500 w-20">
              Cancel
            </button>
            <button onClick={handleDelete} className="h-10 bg-red-600 w-20">
              Confirm
            </button>
          </div>
        </div>
      )}

      {deleted && (
        <div className="h-[150px] rounded-md w-[250px] bg-yellow-400 text-white absolute z-40 top-28 left-[50%] py-5 px-5 translate-x-[-50%]">
          <h1 className="text-center text-black font-semibold">
            Chatroom Deleted Successfully!
          </h1>
          <div className="flex gap-5 w-full justify-center mt-6">
            <button
              onClick={handleNavigate}
              className="h-10 bg-green-500 w-full"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
      <div className={styles.header}>
        <div className="h-[37px] w-[37px] border">
          <img
            src={img}
            className="w-[40px] filter invert h-[40px]"
            alt="Chat logo"
          />
        </div>
        <div>
          <h1 className="text-[#BFBFBF]">{chatRoomName}</h1>
          <div className="flex text-[10px] text-[#808080]">
            <p>{participants.participant1}</p>
            <span>, </span>
            <p>{participants.participant2}</p>
          </div>

          {typingStatus && <p className="text-white text-[10px]">Typing...</p>}
        </div>
        <div>
          <button
            onClick={handleModal}
            className="absolute right-5 top-3 border border-yellow-500 bg-red-600 p-2 w-26 rounded-md font-semibold"
          >
            Delete
          </button>
        </div>
      </div>
      <div className={`${styles.ChatContent}`}>
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
      <form
        onSubmit={handleSubmit}
        className={styles.inputContainer}
        style={{ bottom: `${inputContainerBottom}px` }}
      >
        <textarea
          placeholder="Type a Reply..."
          className="text-[#808080] text-wrap"
          style={{ border: "1px solid grey" }}
          ref={messageRef}
          onChange={debouncedHandleTyping}
          onBlur={debouncedHandleStopTyping}
          required
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
