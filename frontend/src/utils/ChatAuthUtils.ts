import axios from 'axios';

const API_URL = 'http://localhost:3000/api/chatroom';

export const create = async (ChatroomName: string, ChatroomId: string, password: string,participants:any) => {
  const response = await axios.post(`${API_URL}/create`, { ChatroomName, ChatroomId, password,participants });
  return response.data;
};

export const enter = async (ChatroomId: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { ChatroomId, password });
  return response.data;
};

export const storeChatroomData = (data: any) => {
  localStorage.setItem('Chatroom', JSON.stringify(data));
};

export const getChatroomData = () => {
  const Chatroom = localStorage.getItem('Chatroom');
  if (Chatroom) {
    return JSON.parse(Chatroom);
  }
  return null;
};

export const removeUserData = () => {
  localStorage.removeItem('Chatroom');
};
