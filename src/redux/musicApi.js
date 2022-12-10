import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4041';

// export async function fetchAuthors() {
//   const { data } = await axios.get(`/authors?_embed=books`);
//   return data;
// }

export async function fetchMusic() {
  const { data } = await axios.get(`/`);
  return data;
}

// export async function fetchBookById(bookId) {
//   const { data } = await axios.get(`/books/${bookId}?_expand=author`);
//   return data;
// }
