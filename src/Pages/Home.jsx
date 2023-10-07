import { fetchTopMovies } from "components/api";
import { useEffect, useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import toast, { Toaster } from "react-hot-toast";
import { Wrapper, Title, Div } from "./Home.styled";
export const HomePage = () => {
//   const fetch = fetchTopMovies();
//     console.log(fetch)
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    useEffect(() => {
        async function getTopMovies() {
        try {
            setLoading(true);
            const topMovies = await fetchTopMovies();
            setMovies(topMovies.results)
        } catch {
            setErr(true);
            toast.error('Something went wrong')
        } finally {
            setLoading(false);
            setErr(false);
        }
        }
        getTopMovies();
    }, [])
    
    return (
       <> <Wrapper>
          <Div> {err && !loading}
      <Title>Trending Movies This Week</Title>
                {movies.length > 0 && <MoviesList movies={movies} />}
            </Div>
        </Wrapper>
            <Toaster position="top-right" />
        </>
    )
}