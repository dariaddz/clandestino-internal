import Axios from 'axios';

Axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

// export async function fetchAuthors() {
//   const { data } = await axios.get(`/authors?_embed=books`);
//   return data;
// }

export async function fetchMusic() {
  const response = await Axios.get(`/photos`);
  return response.data;
}

// export async function fetchBookById(bookId) {
//   const { data } = await axios.get(`/books/${bookId}?_expand=author`);
//   return data;
// }
