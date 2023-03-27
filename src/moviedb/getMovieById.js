import axios from 'axios';
export default async function getMovieById(movieId) {
    try {
        const { data } = await axios.get(
             `https://api.themoviedb.org/3/movie/${movieId}?api_key=b5dbc40d665affe8ed0bac71106b3fa8&language=en-US`
        ); 
        const { title, overview, poster_path, vote_average, genres, release_date } =
      data;
    return {
      vote_average,
      title,
      release_date,
      overview,
      poster_path,
      genres,
    };
  } catch (error) {
    console.error(error);
    }
}