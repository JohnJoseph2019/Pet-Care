import api from './apiConfig';

export const loginUser = async loginData => {
  try {
    const resp = await api.post('/auth/login', { auth: loginData });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async registerData => {
  try {
    const resp = await api.post('/users/', { user: registerData });
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return false;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
