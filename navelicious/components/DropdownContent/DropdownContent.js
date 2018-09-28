import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";

const DropdownContentEl = styled.div`
  width: ${({ width }) => `${width}`};
  padding: ${props => props.padding};
`;

const DropdownContent = ({ width, children, padding }) => {
  return (
    <DropdownContentEl width={width} padding={padding}>
      {children}
    </DropdownContentEl>
  );
};

export default DropdownContent;
