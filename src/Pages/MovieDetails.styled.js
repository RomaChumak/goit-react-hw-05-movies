import styled from "styled-components"

export const MovieContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
padding-left: 20px;
padding-right: 20px;
margin-top: 20px;
`

export const MovieAdditionalContainer = styled.div`
    background-color: rgba(124, 183, 183, 0.95);
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
`

export const Titel = styled.h2`
margin-bottom: 40px;
color: #fff;
font-family: Ubuntu, sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 500;
line-height: 1.2;
    
`
export const AdditionalList = styled.ul`
display: flex;
gap: 10px;

`

export const AdditionalItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
`


export const MovieLinkText = styled.p`
width: 160px;
    height: 44px;
    background-color: #02897A;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #02897A;
    border-radius: 10px;
    color: #fff;
    font-family: Ubuntu,sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    cursor: pointer;
    transition: background-color 250ms ease-in 0s;
`
