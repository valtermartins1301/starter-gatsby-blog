import React from 'react';
import { Navbar as Root } from '@creditas/navbar';
import { Container } from '@creditas/layout';
import { styled } from '@creditas/stylitas';

import {
  base,
  fixedNavbar,
  containerMain,
  divRowMain,
} from './navbar.styles';

const NavbarRoot = styled(Root)`
  ${base};
  ${fixedNavbar};
`;

const ContainerMain = styled(Container)`${containerMain}`;
const DivRowMain = styled.div`${divRowMain}`;

const Navbar = ({ variant, ...props }) => (
  <NavbarRoot {...props} variant={variant}>
    <ContainerMain>
      <DivRowMain>{props.children}</DivRowMain>
    </ContainerMain>
  </NavbarRoot>
);

export { Navbar };
