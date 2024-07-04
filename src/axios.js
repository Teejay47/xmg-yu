import axios from 'axios';

// eslint-disable-next-line no-undef
// const BASE_URL = process.env.BACKEND_BASE_URL;

export default axios.create({
  baseURL: 'http://localhost:4000',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});
