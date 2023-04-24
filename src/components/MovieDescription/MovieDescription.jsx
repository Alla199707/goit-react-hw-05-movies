import noImage from '../../NoImages/NoImage.png';
import {
  MovieDescriptionContainer,
  TextContainer,
} from './MovieDescription.styled';

const MovieDescription = ({ movieDetails }) => {
  const { poster_path, release_date, title, vote_average, overview, genres } =
    movieDetails;

  const movieFullYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average).toFixed(1);
  const imageURL = 'https://image.tmdb.org/t/p/w300';
  return (
    <MovieDescriptionContainer>
      <img
        src={poster_path ? `${imageURL}${poster_path}` : noImage}
        alt={title}
      />
      <TextContainer>
        <h3>
          {title} ({movieFullYear})
        </h3>
        <p>User Score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
      </TextContainer>
    </MovieDescriptionContainer>
  );
};

export default MovieDescription;
