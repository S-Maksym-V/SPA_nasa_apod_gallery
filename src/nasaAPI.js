import axios from 'redaxios';

const { VITE_api_key_samav99 } = import.meta.env;

export const fetchNasaApi = axios.create({
  baseURL: 'https://api.nasa.gov',
  params: {
    api_key: VITE_api_key_samav99,
  },
});
