import { DitailsWrapper, MovieImg, MovieTitle, MovieText, DitailsTitle, GanresList } from "./MovieDetails.styled";

export const MovieDetails = ({ details }) => {
    
const defaultImg =  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    return <DitailsWrapper>
        <MovieImg src={  details.poster_path ? `https://image.tmdb.org/t/p/w500/${details.poster_path}` : defaultImg } alt='poster' width={250}/>
       <div>
        <MovieTitle>{details.title}</MovieTitle>
        <MovieText>Rating: {details.vote_average.toFixed(2)}</MovieText>
        <DitailsTitle>Overview</DitailsTitle>
        <MovieText>{details.overview}</MovieText>
        <DitailsTitle>Genres</DitailsTitle>
        <GanresList>{details.genres.map(item => (<li key={item.id}><MovieText>{item.name}</MovieText></li>))}</GanresList>
</div>
    </DitailsWrapper>
}