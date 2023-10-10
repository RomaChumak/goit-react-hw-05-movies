
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from "./Layout/layout";

const HomePage = lazy(() => import('Pages/Home'));
const Details = lazy(() => import('Pages/MovieDetails'));
const Movies = lazy(() => import('Pages/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};