import React from 'react';
import PropTypes from 'prop-types';
import { NavbarGroup as Root } from '@creditas/navbar';
import { styled } from '@creditas/stylitas';

import { hiddenNavbarGroup } from './navbarGroup.styles';

const ComponentNavbarGroup = styled(Root)`${hiddenNavbarGroup};`;

const NavbarGroup = ({ ...props }) => <ComponentNavbarGroup {...props} />;

NavbarGroup.propTypes = {
  hiddenIn: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  visibleIn: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

NavbarGroup.defaultProps = {
  hiddenIn: null,
  visibleIn: null,
};

NavbarGroup.displayName = 'NavbarGroup';

export { NavbarGroup };
