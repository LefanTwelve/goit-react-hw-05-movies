import axios from 'axios';

export default async function searchQueryMovie({ query, page }) {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=b5dbc40d665affe8ed0bac71106b3fa8&language=en-US&query=${query}&page=${page}&include_adult=true`
    );
    return results.map(({ title, id }) => ({ title, id }));
  } catch (error) {
    console.error(error);
  }
}
