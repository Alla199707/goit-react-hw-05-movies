import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // console.log(movies);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await getTrendingMovies();
        // console.log(...data.results);
        setMovies([...data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
