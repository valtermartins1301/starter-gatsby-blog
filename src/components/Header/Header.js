import React from 'react';
import { LogoHorizontalPrincipal } from '@creditas/brand-icons'

import {
  Navbar,
  NavbarGroup
} from '../Navbar';

const Header = () => (
  <Navbar>
    <NavbarGroup>
      <LogoHorizontalPrincipal width={"150px"}/>
    </NavbarGroup>    
  </Navbar>
)

export { Header }