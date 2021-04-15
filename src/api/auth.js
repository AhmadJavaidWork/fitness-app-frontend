/* eslint-disable import/no-anonymous-default-export */
import Api from '.';
import axios from 'axios';
import config from '../config';

console.log(process.env.NODE_ENV);

const access_token = config.access_token;

const signUp = ({ name, email, password }) => {
  return axios.post('users/register', {
    access_token,
    name,
    email,
    password,
  });
};

const signIn = (email, password) => {
  return axios.post(
    'auth/sign-in',
    {
      access_token,
    },
    {
      auth: {
        password,
        username: email,
      },
    }
  );
};

export default {
  signUp,
  signIn,
};
