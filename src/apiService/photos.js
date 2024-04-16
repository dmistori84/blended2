import axios from 'axios';

// const pexel_API_KEY = '563492ad6f9170000100000108dc2880626e4436b3634ce1cf6b4d74';
// const pexels_api_url = 'https://api.pexels.com/v1/';
const unsplash_API_KEY =
  'Client-ID Dp58Xa1UComz2dxLn_cy8oZ__FmRAVQuQh9y8RX1usI';
const unsplash_api_url = 'https://api.unsplash.com/search/photos';
axios.defaults.baseURL = unsplash_api_url;
axios.defaults.headers.common['Authorization'] = unsplash_API_KEY;
axios.defaults.headers.common['Accept-Version'] = 'v1';
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

// export const getPhotos = async (query, page) => {
//   const { data } = await axios.get(`search?page=${page}&query=${query}`);

//   return data;
// };

export const getPhotos = async (query, page) => {
  const { data } = await axios.get(`?query=${query}&page=${page}`);

  return data;
};


