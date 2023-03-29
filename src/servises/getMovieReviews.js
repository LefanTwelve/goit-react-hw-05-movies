import axios from 'axios';
export default async function getMovieReviews(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=b5dbc40d665affe8ed0bac71106b3fa8&language=en-US&page=1`
    );
    return data.results.map(({ author, content }) => ({ author, content }));
  } catch (error) {
    console.error(error);
  }
}