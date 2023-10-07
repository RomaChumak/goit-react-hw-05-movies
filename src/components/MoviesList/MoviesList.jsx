import { ListMovies, MoviesLink } from "./MoviesList.styled"
export const MoviesList = ({ movies }) => {
    return (<ListMovies> {movies.map(item => (<li key={item.id}>
        <MoviesLink to={`/movies/${item.id}`}>
            {item.title}
        </MoviesLink>
    </li>
    ))}</ListMovies>)
 
};