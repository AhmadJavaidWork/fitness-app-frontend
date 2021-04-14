import axios from 'axios';
import config from '../config';

const Bearer = JSON.parse(localStorage.getItem('token'));
axios.defaults.withCredentials = true;

if (config.env === 'production') {
  axios.defaults.baseURL = 'https://fitness-app-backend.herokuapp.com/';
} else {
  axios.defaults.baseURL = 'http://localhost:9000/';
}

export const api = () => {
  return axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Bearer}`,
    },
  });
};
