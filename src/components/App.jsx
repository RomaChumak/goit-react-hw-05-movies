import { Route, Routes } from "react-router-dom";
import { HomePage } from "Pages/Home";
import { Movies } from "Pages/Movies";
import { Details } from "Pages/MovieDetails";
import { Cast } from "./Cast/Cast";
import { GlobalStyled } from "./GlobalStyled";
import { Reviews } from "./Reviews/Reviews";
export const App = () => {

 
  return  <>  <Routes>
      <Route path="/" >
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Details />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews/>} />
      </Route>

      </Route>
    </Routes>
    <GlobalStyled />
  </>
};
