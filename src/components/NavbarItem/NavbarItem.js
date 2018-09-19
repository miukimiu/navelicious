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
  &:hover {
    opacity: 0.7;
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

const NavbarItemLink = styled.a`
  font-family: inherit;
  font-weight: bold;
  font-size: 18px;
  padding: 1.5rem;
  color: white;
  display: flex;
  justify-content: center;
  transition: opacity 250ms;
  cursor: pointer;
  position: relative;
  z-index: 2;
  text-decoration: none;
  &:hover {
    opacity: 0.7;
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

class NavbarItem extends Component {
  onMouseEnter = () => {
    this.props.onMouseEnter(this.props.index);
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.currentIndex !== nextProps.currentIndex;
  }

  render() {
    const {
      currentIndex,
      title,
      dropdownBackground,
      children,
      index,
      link,
      onClick,
      linkTo,
      onMouseEnterLink
    } = this.props;

    return (
      <NavbarItemEl>
        {linkTo ? (
          <React.Fragment>
            <NavbarItemLink href={linkTo} onMouseEnter={onMouseEnterLink}>
              {title}
            </NavbarItemLink>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavbarItemTitle
              onMouseEnter={this.onMouseEnter}
              onFocus={this.onMouseEnter}
              onClick={onClick}
            >
              <React.Fragment>{link && <a>sadsd</a>}</React.Fragment>
              <React.Fragment>{onClick && title}</React.Fragment>
              <React.Fragment>{!link && !onClick && title}</React.Fragment>
            </NavbarItemTitle>
            <DropdownSlot>
              {currentIndex === index &&
                !link &&
                !onClick && (
                  <DropdownRoot>
                    <Flipped flipId="dropdown-caret">
                      <Caret dropdownBackground={dropdownBackground} />
                    </Flipped>
                    <Flipped flipId="dropdown">
                      <DropdownBackground
                        dropdownBackground={dropdownBackground}
                      >
                        <Flipped inverseFlipId="dropdown" scale>
                          {children}
                        </Flipped>
                      </DropdownBackground>
                    </Flipped>
                  </DropdownRoot>
                )}
            </DropdownSlot>
          </React.Fragment>
        )}
      </NavbarItemEl>
    );
  }
}

export default NavbarItem;
