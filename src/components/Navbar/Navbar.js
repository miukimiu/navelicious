import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";
import NavbarItem from "../NavbarItem/NavbarItem";

const NavbarEl = styled.nav`
  margin: auto;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
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

class Navbar extends Component {
  state = {
    activeIndices: [],
    animatingOut: false
  };

  resetDropdownState = () => {
    this.setState({
      activeIndices: [],
      animatingOut: false
    });
    delete this.animatingOutTimeout;
  };

  onMouseEnter = i => {
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return;
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout);
      this.resetDropdownState();
    }
    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false
    }));
  };

  onMouseLeave = ev => {
    this.setState({
      animatingOut: true
    });
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    );
  };

  render() {
    const {
      duration,
      ease,
      navbarConfig,
      dropdownBackground,
      children
    } = this.props;

    let CurrentDropdown;
    let PrevDropdown;
    let direction;

    const tweenConfig = {
      duration: duration,
      ease: ease
    };

    const currentIndex = this.state.activeIndices[
      this.state.activeIndices.length - 1
    ];
    const prevIndex =
      this.state.activeIndices.length > 1 &&
      this.state.activeIndices[this.state.activeIndices.length - 2];

    if (typeof currentIndex === "number")
      CurrentDropdown = navbarConfig[currentIndex].dropdown;
    if (typeof prevIndex === "number") {
      direction = currentIndex > prevIndex ? "right" : "left";
    }

    return (
      <Flipper flipKey={currentIndex} {...tweenConfig}>
        <NavbarEl onMouseLeave={this.onMouseLeave}>
          <NavbarList>
            {navbarConfig.map((n, index) => {
              return (
                <NavbarItem
                  key={n.title + index}
                  title={n.title}
                  index={index}
                  onMouseEnter={this.onMouseEnter}
                >
                  {currentIndex === index && (
                    <DropdownRoot>
                      <Flipped flipId="dropdown-caret">
                        <Caret dropdownBackground={dropdownBackground} />
                      </Flipped>
                      <Flipped flipId="dropdown">
                        <DropdownBackground
                          dropdownBackground={dropdownBackground}
                        >
                          <Flipped inverseFlipId="dropdown" scale>
                            <CurrentDropdown />
                          </Flipped>
                        </DropdownBackground>
                      </Flipped>
                    </DropdownRoot>
                  )}
                </NavbarItem>
              );
            })}
          </NavbarList>
        </NavbarEl>
      </Flipper>
    );
  }
}

Navbar.defaultProps = {
  duration: 500,
  ease: "easeOutExpo",
  dropdownBackground: "white",
  direction: "left",
  animatingOut: false
};

Navbar.propTypes = {
  /* Mouse leave duration in ms*/
  duration: PropTypes.number,
  ease: PropTypes.string,
  dropdownBackground: PropTypes.string,
  animatingOut: PropTypes.bool,
  direction: PropTypes.oneOf(["left", "right"]),
  duration: PropTypes.number
};

export default Navbar;
