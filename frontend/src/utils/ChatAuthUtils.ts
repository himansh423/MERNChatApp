import axios from 'axios';

const API_URL = 'http://localhost:3000/api/chatroom';

export const create = async (ChatroomName: any, ChatroomId: any, password: any,participants:any) => {
  const response = await axios.post(`${API_URL}/create`, { ChatroomName, ChatroomId, password,participants });
  return response.data;
};
 
export const enter = async (ChatroomId: any, password: any) => {
  const response = await axios.post(`${API_URL}/enter`, { ChatroomId, password });
  console.log("token :",response.data.token)
  if (response.data.token) {
    localStorage.setItem('chatToken', response.data.token); // Save token
  }
  return response.data;
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
