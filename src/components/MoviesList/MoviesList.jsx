import { useLocation } from 'react-router-dom';
import {
  ItemList,
  ItemLink,
  MovieItem,
  ImgWrapper,
  Poster,
  Title,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ItemList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <ItemLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <ImgWrapper>
                <Poster
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              </ImgWrapper>
              <Title>{movie.title}</Title>
            </ItemLink>
          </MovieItem>
        ))}
      </ItemList>
    </>
  );
};

export default MoviesList;
