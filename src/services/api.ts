import axios from 'axios';

const api = axios.create({
  baseURL: 'https://recruitmentbackendfiap.herokuapp.com/',
});

export default api;