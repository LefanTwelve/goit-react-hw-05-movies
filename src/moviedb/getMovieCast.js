import axios from 'axios';

export default async function getMovieCast(movieId) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=b5dbc40d665affe8ed0bac71106b3fa8&language=en-US`
    );
    return data.cast.map(({ name, profile_path, character }) => ({
      name,
      profile_path,
      character,
    }));
  } catch (error) {
    console.error(error);
  }
}