import axios from 'axios';

// INITIALIZE AN AXIOS INSTANCE USING THE API’S BASE URL
const productionUrl = 'https://fakestoreapi.com/';

export const customFetch = axios.create({
  baseURL: productionUrl,
});
