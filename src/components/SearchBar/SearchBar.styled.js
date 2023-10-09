import styled from "styled-components";

export const SearchForm = styled.form`
 display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
padding: 10px;
border-radius: 15px;
border: 3px solid #02897A;
color: #02897A;
width: 300px;
    font-family: Ubuntu, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 2;
    letter-spacing: -0.42px;

&:hover,
&:focus{
  border: 5px solid #02897A;
}
`;

export const SearchBtn = styled.button`
padding: 15px 5px;
border-radius: 40px;
background-color: #02897A;
color: #ffff;
border: none;
width: 170px;
font-size: 15px;
`;

