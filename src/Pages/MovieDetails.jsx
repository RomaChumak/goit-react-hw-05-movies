import { useEffect, useRef, useState} from "react"
import { fetchMovieDetails } from "../components/api";
import  toast  from "react-hot-toast";
import { Link, Outlet,  useParams, useLocation } from "react-router-dom";
import { Loader } from "components/Loader/loader";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { MovieAdditionalContainer,  MovieLinkText, AdditionalItem, MovieContainer, Titel, AdditionalList} from "./MovieDetails.styled";
export const Details = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [details, setDetails] = useState(null);
    const { movieId } = useParams()
    const location = useLocation()
    const backLink = useRef(location.state?.from ?? '/movies');

    useEffect(() => {
        if (!movieId) {
            toast.error(
                'oops problem try refreshing the page.');
            return;
        }
        async function getMovieDetails() {
            try {
                setLoading(true);
                const details = await fetchMovieDetails(movieId);
                setDetails(details);
            } catch {
                setErr(true);
                toast.error('Something went wrong')
            } finally {
                setLoading(false);
                setErr(false);
            }
        }
        getMovieDetails();
    }, [movieId]);

    return (
        <MovieContainer>
             <Link to={backLink.current}><MovieLinkText>Go back</MovieLinkText></Link>
            <div>
            {loading && <Loader />}
            {err && !loading}
            {details && <MovieDetails details={details} />}
        </div>
            <MovieAdditionalContainer>
                <Titel>Additional information</Titel>
                <AdditionalList>
                    <AdditionalItem>       
                        <Link to="cast"><MovieLinkText>Cast</MovieLinkText></Link>
                    </AdditionalItem>
                      <AdditionalItem>
                        <Link to="reviews"><MovieLinkText>Reviews</MovieLinkText></Link>
                    </AdditionalItem>
                </AdditionalList>
            </MovieAdditionalContainer>
            <Outlet/>
        </MovieContainer>
    )
}