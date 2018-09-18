import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";

const DropdownRoot = styled.div`
  transform-origin: 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: -20px;
`;
const Caret = styled.div`
  width: 0;
  height: 0;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent ${props => props.dropdownBackground};
  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */
  z-index: 1;
  position: relative;
  /* prevent any gap in between caret and main dropdown */
  top: 1px;
`;

const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background-color: ${props => props.dropdownBackground};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
`;

class DropdownContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    animatingOut: PropTypes.bool,
    direction: PropTypes.oneOf(["left", "right"]),
    duration: PropTypes.number
  };

  render() {
    const {
      children,
      direction,
      animatingOut,
      duration,
      dropdownBackground
    } = this.props;
    return (
      <DropdownRoot
        direction={direction}
        animatingOut={animatingOut}
        duration={duration}
      >
        <Flipped flipId="dropdown-caret">
          <Caret />
        </Flipped>
        <Flipped flipId="dropdown">
          <DropdownBackground dropdownBackground={dropdownBackground}>
            <Flipped inverseFlipId="dropdown" scale>
              <div>{this.props.children}</div>
            </Flipped>
          </DropdownBackground>
        </Flipped>
      </DropdownRoot>
    );
  }
}

export default DropdownContainer;
