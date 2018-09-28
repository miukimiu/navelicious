import React, { Component, Children } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";
import CreatePortal from "../../core/CreatePortal";
import { ThemeConsumer } from "../../core/ThemeContext";

const NavbarItemEl = styled.li`
  position: relative;
  cursor: pointer;
`;

const NavbarItemTitle = styled.button`
  background-color: transparent;
  font-family: inherit;
  font-weight: normal;
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  color: ${props => props.titleColor};
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
  font-weight: normal;
  font-size: 16px;
  padding: 10px 20px;
  color: ${props => props.titleColor};
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

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
  z-index: 9;
`;

const DropdownRoot = styled.div`
  transform-origin: 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${props => props.topPos - 5}px;
  left: ${props => props.leftPos}px;
  width: 300px;
  /* background: red; */
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
  margin-top: -10px;
`;

const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background-color: ${props => props.dropdownBackground};
  border-radius: 4px;
  overflow: hidden;
  min-width: 300px;
  min-height: 200px;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
`;

class NavbarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftPos: 0,
      topPos: 0
    };

    this.navbarItemRef = React.createRef();
  }

  onMouseEnterDropdown = () => {
    const { index, onMouseEnter } = this.props;
    this.props.onMouseEnterDropdown(this.props.index);
  };

  onMouseEnter = () => {
    const { index, onMouseEnter } = this.props;
    this.props.onMouseEnter(this.props.index);

    const itemleftPos = this.navbarItemRef.current.getBoundingClientRect().left;
    const itemCenterPos =
      this.navbarItemRef.current.getBoundingClientRect().width / 2;
    const itemHeight = this.navbarItemRef.current.getBoundingClientRect()
      .height;

    // parentPos starts on arrow prev right pos
    const parentPosLeft =
      document.getElementById("navelicious-section").getBoundingClientRect()
        .left || 0;

    /* 
    Because absolute position is relative to the parent I get
    the left position by subtracting the position left of the item
    less the parent left position.
    The element gets to the left of the item so I need to center it,
    by adding half width of the item and half width of the DropdownRoot (20/2)
    */
    const childOffsetLeft = itemleftPos - parentPosLeft + itemCenterPos - 150;

    this.setState({
      [`leftPos${this.props.index}`]: childOffsetLeft,
      [`topPos${this.props.index}`]: itemHeight
    });
  };

  onMouseEnterLink = () => {
    this.props.onMouseEnter(this.props.index);
  };

  onMouseLeave = () => {
    this.props.onMouseLeave(this.props.index);
  };

  onMouseLeaveDropdown = () => {
    this.props.onMouseLeaveDropdown(this.props.index);
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
      onMouseEnterLink,
      titleColor,
      className
    } = this.props;

    return (
      <ThemeConsumer>
        {context => (
          <NavbarItemEl className={className}>
            {linkTo ? (
              <NavbarItemLink
                href={linkTo}
                onMouseEnter={this.onMouseEnterLink}
                titleColor={titleColor}
                className={`navelicious-slide${index}`}
                innerRef={this.navbarItemRef}
              >
                {title}
              </NavbarItemLink>
            ) : (
              <React.Fragment>
                <NavbarItemTitle
                  onMouseEnter={this.onMouseEnter}
                  onFocus={this.onMouseEnter}
                  // onMouseLeave={this.onMouseLeave}
                  onClick={onClick}
                  titleColor={titleColor}
                  className={`navelicious-slide${index}`}
                  innerRef={this.navbarItemRef}
                >
                  <React.Fragment>{link && <a>sadsd</a>}</React.Fragment>
                  <React.Fragment>{onClick && title}</React.Fragment>
                  <React.Fragment>{!link && !onClick && title}</React.Fragment>
                </NavbarItemTitle>
                <DropdownSlot>
                  {currentIndex === index &&
                    !link &&
                    !onClick && (
                      <CreatePortal>
                        <DropdownRoot
                          leftPos={this.state[`leftPos${currentIndex}`]}
                          topPos={this.state[`topPos${currentIndex}`]}
                          onMouseEnter={this.onMouseEnterDropdown}
                          // onMouseLeave={this.onMouseLeaveDropdown}
                        >
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
                      </CreatePortal>
                    )}
                </DropdownSlot>
              </React.Fragment>
            )}
          </NavbarItemEl>
        )}
      </ThemeConsumer>
    );
  }
}

export default NavbarItem;
