import { Link } from "react-router-dom"
import styled from "styled-components"
export const ListMovies = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color:#02897A; 
  border-radius: 15px;
  max-width: 600px;
  padding: 10px;
`;
export const MoviesLink = styled(Link)`
  text-decoration: none;
  color: #f6f6f6;
  font-size: 18px;
  transition: color 0.3s;

  &:hover {
    color: #a9a9a9;
  }
`;

