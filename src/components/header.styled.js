import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Header = styled.header`
background-color: #7ecbc2; 
height: 100px;
`

export const Nav = styled.ul`
display: flex;
gap: 15px;
padding: 38px;
`

export const NavItem = styled.li`
`

export const NavLinkStyled = styled(NavLink)`
font-family: Ubuntu,sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 1.2;
cursor: pointer;
color: #fff;
    transition: color 250ms ease-in 0s;

&:hover, &:focus{
color: #000;
    font-weight: 600;
}
  &.active {
    font-weight: 600;
    color: #000;
}
`