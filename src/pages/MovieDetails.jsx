import Notiflix from 'notiflix';
import { BackLink } from 'components/BackLink/BackLink';
import { getFullMovie } from 'services/api';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDescription from 'components/MovieDescription/MovieDescription';

import { AdditionalList, ItemLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDeatils] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    const renderMovieDetails = async () => {
      try {
        const results = await getFullMovie(movieId);
        if (!results) {
          Notiflix.Notify.warning(
            'Вибачте, за вашим запитом немає відповідних результатів!'
          );
          return;
        }
        setMovieDeatils(results);
        setError(null);
      } catch (error) {
        setError(error);
        Notiflix.Notify.failure(
          'На жаль, немає фільмів, які відповідають вашому запиту. Спробуйте ще раз!'
        );
      }
    };
    renderMovieDetails();
  }, [movieId]);

  return (
    <div>
      <main>
        <BackLink to={backLinkHref}>Go back</BackLink>
        {movieDetails && <MovieDescription movieDetails={movieDetails} />}
      </main>
      <div>
        <AdditionalList>
          <li>
            <ItemLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </ItemLink>
          </li>
          <li>
            <ItemLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </ItemLink>
          </li>
        </AdditionalList>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default MovieDetails;
