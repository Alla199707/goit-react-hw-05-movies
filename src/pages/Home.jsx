// import { useEffect, useState } from 'react';
// import { getTrendingMovies } from 'services/api';
// import MoviesList from 'components/MoviesList/MoviesList';
// import { Container, Title } from './Container.styled';

const Home = () => {
  //   const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     const getMovies = async () => {
  //       try {
  //         const results = await getTrendingMovies();
  //         setMovies([...results]);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getMovies();
  //   }, []);
  return (
    <>
      <h2>Trending today</h2>
      {/* <MoviesList movies={movies} /> */}
    </>
  );
};

export default Home;
