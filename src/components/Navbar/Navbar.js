import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NavbarEl = styled.nav`
  display: flex;
  justify-content: ${props => props.justify};
`;

const Navbar = ({ children, justify }) => (
  <NavbarEl justify={justify}>{children}</NavbarEl>
);

Navbar.defaultProps = {
  justify: "center"
};

Navbar.propTypes = {
  /* Mouse leave duration in ms */
  justify: PropTypes.string
};

export default Navbar;
