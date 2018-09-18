import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";

const NavbarItemTitle = styled.button`
  background-color: transparent;
  font-family: inherit;
  font-weight: bold;
  border: none;
  font-size: 18px;
  padding: 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  position: relative;
  z-index: 2;
  &:hover,
  &:focus {
    opacity: 0.7;
    outline: none;
  }
`;

const NavbarItemEl = styled.li`
  position: relative;
  cursor: pointer;
`;

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`;

class NavbarItem extends Component {
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index);
  };

  render() {
    const { title, children } = this.props;
    return (
      <NavbarItemEl>
        <NavbarItemTitle
          onMouseEnter={this.onMouseEnter}
          onFocus={this.onMouseEnter}
        >
          {title}
        </NavbarItemTitle>
        <DropdownSlot>{children}</DropdownSlot>
      </NavbarItemEl>
    );
  }
}

export default NavbarItem;
