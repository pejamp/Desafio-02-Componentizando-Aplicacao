import { GenreResponseProps } from '../App';
import { Button } from './Button';

import '../styles/sidebar.scss';

export type SideBarProps = {
  getGenreSelect: (genreId: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
};

export function SideBar(props: SideBarProps) {
  // Complete aquiz
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.getGenreSelect(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}