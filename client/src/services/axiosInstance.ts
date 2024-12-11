import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
const axiosInstance = axios.create({
  baseURL: '/api',
});


export default axiosInstance;
