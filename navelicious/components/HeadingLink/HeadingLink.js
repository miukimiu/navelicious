import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : "1rem")};
  color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
`;

const HeadingLinkEl = Heading.withComponent("li");

const HeadingLink = ({ chilren }) => <HeadingLinkEl>{chilren}</HeadingLinkEl>;

export default HeadingLink;
