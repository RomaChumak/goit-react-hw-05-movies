import { Loader} from "components/Loader/loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchBar } from "components/SearchBar/SearchBar";
import { fetchMovies } from "components/api";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import toast from "react-hot-toast";
import { Div, Wrapper } from "./Home.styled";

export const Movies = () => {
    const [movies, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    
     const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    
    useEffect(() => {
        if (!query && err) {
            toast.error('an unexpected problem has occurred please refresh the page')
            return;
        }
        async function getSearchMovie() {
            try {
                setLoading(true);
                const searchMovies = await fetchMovies(query);
                setMovie(searchMovies.results);
            } catch {
                setErr(true);
                toast.error('Something went wrong')
            } finally {
                setErr(false);
                setLoading(false)
            }
        };
        getSearchMovie()
    }, [err, query]) 

    function submit(evt) {
        evt.preventDefault();
        const value = evt.target.elements.query.value;
           if (value.trim() === '') return;

    setSearchParams({ query: value });
    evt.target.reset();
  
    }

    return(<> <Wrapper>
     <Div>  <SearchBar onSubmit={submit}/>
        {movies.length && <MoviesList movies={movies}/>}
        </Div>
    </Wrapper>
        {loading && <Loader/>}
        {err && !loading}
    </>
    )
};