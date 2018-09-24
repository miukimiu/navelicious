import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";
import NavbarItem from "../NavbarItem/NavbarItem";
import Slider from "../Slider/Slider";

const NavbarSectionEl = styled.section`
  margin: auto;
  width: 100%;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

const FlipperEl = styled(Flipper)`
  display: flex;
  background: aliceblue;
  flex: 1;
`;

class NavbarSection extends Component {
  state = {
    activeIndices: [],
    animatingOut: false
  };

  componentDidMount() {}

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

  onMouseLeave = event => {
    this.setState({
      animatingOut: true
    });
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    );
  };

  onMouseEnterLink = event => {
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
      className
    } = this.props;

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
      // CurrentDropdown = navbarConfig[currentIndex].dropdown;
      direction = currentIndex > prevIndex ? "right" : "left";
    }

    // copy props from parent to the children
    const children = React.Children.map(this.props.children, (child, index) => {
      // console.log("child", child);
      // console.log("index", index);
      return React.cloneElement(child, {
        index: index,
        currentIndex,
        link: child.props.link,
        dropdownBackground,
        titleColor,
        onMouseEnter: this.onMouseEnter,
        onMouseEnterLink: this.onMouseEnterLink
      });
    });

    // console.log("currentIndex", currentIndex);
    // console.log("prevIndex", prevIndex);
    // console.log("index", index);

    return (
      <FlipperEl flipKey={currentIndex} {...tweenConfig} className={className}>
        <NavbarSectionEl onMouseLeave={this.onMouseLeave}>
          <Slider>{children}</Slider>

          {/* <NavbarList>{children}</NavbarList> */}
        </NavbarSectionEl>
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
