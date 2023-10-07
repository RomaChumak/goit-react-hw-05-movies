import { Route, Routes } from "react-router-dom";
// import { fetchMovieDetails } from "./api";
import { HomePage } from "Pages/Home";
import { Movies } from "Pages/Movies";
import { Details } from "Pages/MovieDetails";
export const App = () => {

  // const fetch = fetchMovieDetails(926393)
  // console.log(fetch)
  return <Routes>
     <Route index element={<HomePage/>} />
    <Route path="/movies" element={<div><Movies/></div>} />
    <Route path="/movies/:movieId" element={<Details/>} />
    <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
    <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
  </Routes> 
 
};
