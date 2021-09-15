import axios from 'axios';

const API = 'http://localhost:4000'

export const signup = async (data) => {
    return await axios.post(`${API}/signup`, data, { withCredentials: true });
}

export const signin = async (data) => {
    return await axios.post(`${API}/sigin`, data, { withCredentials: true });
}

export const logout = async () => {
    return await axios.get(`${API}/logout`, { withCredentials: true });
}

export const whoami = async () => {
    return await axios.get(`${API}/whoami`, { withCredentials: true });
}