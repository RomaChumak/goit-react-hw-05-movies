import { Loader } from "components/Loader/loader";
import { fetchReviews } from "components/api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ReviewList, ReviewItem, ReviewAuthor, ReviewAuthorSpan, ReviewComment, ReviewCommentSpan} from "./Rwviews.styled";

export const Reviews = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);
    const [review, setReview] = useState([]);
    const { movieId } = useParams();
    
 useEffect(() => {
    if (!movieId) return;

    async function getReviews() {
      try {
        setLoading(true);
        const reviews = await fetchReviews(movieId);
        setReview(reviews.results);
      } catch {
        setErr(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);
    return (
        <>
            {loading && <Loader />}
            {err && !loading}
            <ReviewList>{ review.map(i =>( 
               <ReviewItem key={i.id}>
                        <ReviewAuthor><ReviewAuthorSpan>Author:</ReviewAuthorSpan>{i.author}</ReviewAuthor>
                        <ReviewComment><ReviewCommentSpan>Comment:</ReviewCommentSpan>{i.content}</ReviewComment>
                </ReviewItem>
            ))}</ReviewList>
        </>
    );
}