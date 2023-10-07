import styled from "styled-components";

export const ReviewList = styled.ul`
display: flex;
flex-direction: column;
gap: 15px;
`
export const ReviewItem = styled.li`
display: flex;
flex-direction: column;
gap: 10px;
background-color:#02897A; 
border-radius: 10px;
padding: 10px 20px;
`
export const ReviewAuthor = styled.h3`
color: #fff;
display: flex;
gap: 5px;
align-items: center;
font-size: 25px;
font-style: normal;
font-weight: 500;
line-height: 1.2;
`;
export const ReviewAuthorSpan = styled.span`
font-family: Ubuntu,sans-serif;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: 1.2;
`

export const ReviewComment = styled.p`
color: #fff;
display: flex;
gap: 8px;
font-size: 25px;
font-style: normal;
font-weight: 400;
line-height: 1.2;
`

export const ReviewCommentSpan = styled.span`
font-weight: 500;
`