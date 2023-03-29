import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import getMovieTrending from 'servises/getMovieTrending';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getMovieTrending().then(data => {
      setTrendingMovies(data);
    });
  }, []);
  return (
    <main>
      <h1>Trending today:</h1>
      {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
    </main>
  );
};
export default Home;