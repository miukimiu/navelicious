import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const NavbarCustomSectionEL = styled.section`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: center;
`;

const NavbarCustomSection = ({ children, justify }) => (
  <NavbarCustomSectionEL justify={justify}>{children}</NavbarCustomSectionEL>
);

NavbarCustomSection.defaultProps = {
  justify: "center"
};

NavbarCustomSection.propTypes = {
  /* Mouse leave duration in ms */
  justify: PropTypes.string
};

export default NavbarCustomSection;
