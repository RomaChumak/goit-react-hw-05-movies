import { ListMovies, MoviesLink } from "./MoviesList.styled"
import { useLocation } from "react-router-dom";
export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (<ListMovies> {movies.map(item => (<li key={item.id}>
        <MoviesLink to={`/movies/${item.id}`} state={{from: location}}>
            {item.title}
        </MoviesLink>
    </li>
    ))}</ListMovies>)
 
};