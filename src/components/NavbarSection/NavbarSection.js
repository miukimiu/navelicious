import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";
import { ThemeProvider } from "../../core/ThemeContext";
import NavbarItem from "../NavbarItem/NavbarItem";
import Slider from "../Slider/Slider";

const NavbarSectionEl = styled.section`
  margin: auto;
  width: 100%;
  position: relative;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

const FlipperEl = styled(Flipper)`
  display: flex;
  flex: 1;
  position: relative;
`;

class NavbarSection extends Component {
  state = {
    activeIndices: [],
    animatingOut: false,
    inDropdown: true
  };

  resetDropdownState = () => {
    console.log("resetDropdownState");
    this.setState({
      activeIndices: [],
      animatingOut: false
    });
    delete this.animatingOutTimeout;
  };

  onMouseEnter = i => {
    console.log("onMouseEnter");
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return;
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout);
      this.resetDropdownState();
    }
    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false,
      inDropdown: false
    }));
  };

  onMouseEnterDropdown = i => {
    console.log("onMouseEnterDropdown");
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return;
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout);
      this.resetDropdownState();
    }
    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false,
      inDropdown: true
    }));
  };

  onMouseLeave = () => {
    this.setState({
      animatingOut: true
    });

    if (this.state.animatingOut) {
      console.log("it's animating out");
      this.animatingOutTimeout = setTimeout(
        this.resetDropdownState,
        this.props.duration
      );
    }
  };

  onMouseLeaveDropdown = () => {
    console.log("onMouseLeaveDropdown");
    this.setState({
      animatingOut: true
    });

    if (this.state.animatingOut) {
      console.log("it's animating out drop");
      this.animatingOutTimeout = setTimeout(
        this.resetDropdownState,
        this.props.duration
      );
    }
  };

  // onMouseLeave = () => {
  //   console.log("onMouseLeave");

  //   // if enter dropdown

  //   setTimeout(() => {
  //     if (!this.state.inDropdown) {
  //       console.log("Not in dropdown **");
  //       // this.animatingOutTimeout = setTimeout(
  //       //   this.resetDropdownState,
  //       //   this.props.duration
  //       // );
  //     } else {
  //       console.log("In dropdown **");
  //     }
  //   }, 1000);
  // };

  onMouseEnterLink = () => {
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
      dropdownBackground,
      titleColor,
      className,
      arrowsColor
    } = this.props;

    const { navArrows } = this.state;

    console.log(
      this.state.animatingOut,
      this.state.activeIndices,
      this.state.inDropdown
    );

    const tweenConfig = {
      duration: duration,
      ease: ease
    };

    let CurrentDropdown;
    let PrevDropdown;
    let direction;

    const currentIndex = this.state.activeIndices[
      this.state.activeIndices.length - 1
    ];

    const prevIndex =
      this.state.activeIndices.length > 1 &&
      this.state.activeIndices[this.state.activeIndices.length - 2];

    if (typeof prevIndex === "number") {
      direction = currentIndex > prevIndex ? "right" : "left";
    }

    // copy props from parent to the children
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index: index,
        currentIndex,
        link: child.props.link,
        dropdownBackground,
        titleColor,
        onMouseEnter: this.onMouseEnter,
        onMouseEnterLink: this.onMouseEnterLink,
        onMouseEnterDropdown: this.onMouseEnterDropdown,
        onMouseLeave: this.onMouseLeave,
        onMouseLeaveDropdown: this.onMouseLeaveDropdown
      });
    });

    return (
      <FlipperEl flipKey={currentIndex} {...tweenConfig} className={className}>
        <ThemeProvider value={{ arrowsColor: arrowsColor }}>
          <NavbarSectionEl id="navelicious-section">
            <Slider>{children}</Slider>
          </NavbarSectionEl>
        </ThemeProvider>
      </FlipperEl>
    );
  }
}

NavbarSection.defaultProps = {
  duration: 500,
  ease: "easeOutExpo",
  titleColor: "black",
  dropdownBackground: "white",
  direction: "left",
  animatingOut: false
};

NavbarSection.propTypes = {
  /* Mouse leave duration in ms */
  duration: PropTypes.number,
  ease: PropTypes.string,
  dropdownBackground: PropTypes.string,
  titleColor: PropTypes.string,
  animatingOut: PropTypes.bool,
  direction: PropTypes.oneOf(["left", "right"]),
  duration: PropTypes.number
};

export default NavbarSection;
