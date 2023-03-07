import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL; // Replace with your API base URL
const instance = axios.create({
  baseURL,
});

export default instance;