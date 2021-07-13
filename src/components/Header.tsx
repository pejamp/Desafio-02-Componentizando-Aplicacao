import '../styles/header.scss';

export type HeaderProps = {
  genreTitle: string;
}

export function Header({ genreTitle }: HeaderProps) {
  // Complete aqui
  return (
    <header>
      <span className="category">Categoria:<span> {genreTitle}</span></span>
    </header>
  )
}