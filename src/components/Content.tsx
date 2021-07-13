import { MovieCard } from './MovieCard';
import { MovieProps, GenreResponseProps } from '../App';
import { Header } from './Header';

import '../styles/content.scss';

export type ContentProps = {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}

export function Content(props: ContentProps) {
  // Complete aqui
  return (
    <div className="container">
      <Header genreTitle={props.selectedGenre.title} />

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}