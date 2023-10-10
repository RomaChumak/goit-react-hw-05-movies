import { Header, Nav, NavItem, NavLinkStyled } from './Layout.styled'
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {GlobalStyled}  from 'components/GlobalStyled';
import { Loader } from 'components/Loader/loader';

export function Layout() {
  return( <> <Header>
      <nav>
      <Nav>
        <NavItem> <NavLinkStyled to='/'>Home</NavLinkStyled> </NavItem>
     <NavItem> <NavLinkStyled to='/movies'>Movies</NavLinkStyled> </NavItem>
        </Nav>
        </nav>
  </Header>
  <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    <GlobalStyled />
  </>)
}
