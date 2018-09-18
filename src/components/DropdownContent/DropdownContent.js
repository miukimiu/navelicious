import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";

const DropdownContentEl = styled.div`
  width: ${({ width }) => `${width}`};
`;

const DropdownContent = ({ width, children }) => {
  return <DropdownContentEl width={width}>{children}</DropdownContentEl>;
};

export default DropdownContent;
