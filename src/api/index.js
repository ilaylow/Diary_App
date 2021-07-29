const axios = require("axios");

const API = axios.create({baseURL: "http://localhost:3000"})

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);