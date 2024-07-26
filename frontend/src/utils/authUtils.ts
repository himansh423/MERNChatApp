import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';

export const register = async (username: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { username, email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const storeUserData = (data: any) => {
  localStorage.setItem('user', JSON.stringify(data));
};

export const getUserData = () => {
  const user = localStorage.getItem('user');
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const removeUserData = () => {
  localStorage.removeItem('user');
};
