import { fetchCast } from "components/api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { CastList, CastItem, CastInfo, CastImgContainer} from "./Cast.styled";
import { Loader } from "components/Loader/loader";

const defaultImg = 'https://png.pngitem.com/pimgs/s/508-5087257_clip-art-hd-png-download.png';

export function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

    useEffect(() => {
        if (!movieId) {
            return;
        }
        async function getCast() {
            try {
                setLoading(true);
                const cast = await fetchCast(movieId);
                setCast(cast.cast)
            } catch{
                setErr(true)
                toast.error('oops problem try refreshing the page.')
            } finally {
                setLoading(false);
                setErr(false)
            }
        } 
        getCast();
    }, [movieId])

    return (
        <>
        {loading && <Loader />}
            {err && !loading}
            
    {cast.length > 0 ? ( <CastList>{cast.map(i => (
                <CastItem key={i.cast_id}>
                  <CastImgContainer>  <img src={
                        i.profile_path
                      ? `https://image.tmdb.org/t/p/w185/${i.profile_path}`
                            : defaultImg} alt={i.name} />
                    </CastImgContainer>
                    <CastInfo>
                        <p>{i.name}</p>
                        <p>Character:{i.character}</p>
                    </CastInfo>
                </CastItem>
            ))}</CastList>) : (<p>The list of actors is empty for this movie</p>)}
        </>
    )
}