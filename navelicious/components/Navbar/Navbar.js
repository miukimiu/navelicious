import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeProvider } from "../../core/ThemeContext";

const NavbarEl = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  background: ${props => props.background};
  z-index: 999;
`;

const Navbar = ({ children, justify, background, className }) => (
  <ThemeProvider value={{ background: background }}>
    <NavbarEl justify={justify} background={background} className={className}>
      {children}
    </NavbarEl>
  </ThemeProvider>
);

Navbar.defaultProps = {
  justify: "center",
  background: "#E8E8E8"
};

Navbar.propTypes = {
  /* Mouse leave duration in ms */
  background: PropTypes.string,
  justify: PropTypes.string
};

export default Navbar;
