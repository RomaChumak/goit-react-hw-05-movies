import { useEffect, useState} from "react"
import { fetchMovieDetails } from "../components/api";
import  toast  from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { Loader } from "components/Loader/loader";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
export const Details = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [details, setDetails] = useState(null);
    const {movieId} = useParams()
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
        <div>
            <div>
            <Link>Go back</Link>
            {loading && <Loader />}
            {err && !loading}
            {details && <MovieDetails details={details} />}
        </div>
            <div>
                <h2>Additional information</h2>
                <ul>
                    <li>
                        <Link>Cast</Link>
                    </li>
                      <li>
                        <Link>Reviews</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}