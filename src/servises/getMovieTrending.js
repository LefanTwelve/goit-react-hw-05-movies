import axios from 'axios';

export default async function getMovieTrending() {
  try {
    const {
      data: { results },
    } = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=b5dbc40d665affe8ed0bac71106b3fa8'
    );
    return results.map(({ title, id }) => ({ title, id }));
  } catch (error) {
    console.error(error);
  }
}