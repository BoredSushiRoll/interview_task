import axios from './api/axios'; // path to axios base config

export const login = async (username, password) => {
  try {
    const res = await axios.post('/login', { username, password });
    const token = res.data.token;

    if (!token) {
      console.error('No token received!');
      return false;
    }

    localStorage.setItem('token', token);
    return true;
  } catch (err) {
    console.error('Login failed:', err);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

export const getToken = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : '';
};
