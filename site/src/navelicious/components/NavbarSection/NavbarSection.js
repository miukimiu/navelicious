import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flipper } from 'react-flip-toolkit';
import { ThemeProvider } from '../../core/ThemeContext';
import Slider from '../Slider/Slider';

const NavbarSectionEl = styled.section`
  margin: auto;
  width: 100%;
  position: relative;
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
    inDropdown: false
  };

  resetDropdownState = () => {
    this.setState({
      activeIndices: [],
      animatingOut: false,
      inDropdown: false
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
      animatingOut: false,
      inDropdown: false
    }));
  };

  onMouseEnterDropdown = i => {
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

    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    );
  };

  onMouseLeaveDropdown = () => {
    this.setState({
      animatingOut: true
    });

    if (this.state.animatingOut) {
      this.animatingOutTimeout = setTimeout(
        this.resetDropdownState,
        this.props.duration
      );
    }
  };

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
      activeColor,
      className,
      arrowsColor
    } = this.props;

    const tweenConfig = {
      duration: duration,
      ease: ease
    };

    const currentIndex = this.state.activeIndices[
      this.state.activeIndices.length - 1
    ];

    // copy props from parent to the children
    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index: index,
        currentIndex,
        link: child.props.link,
        onMouseEnter: this.onMouseEnter,
        onMouseEnterLink: this.onMouseEnterLink,
        onMouseEnterDropdown: this.onMouseEnterDropdown,
        onMouseLeave: this.onMouseLeave,
        onMouseLeaveDropdown: this.onMouseLeaveDropdown
      });
    });

    return (
      <FlipperEl flipKey={currentIndex} {...tweenConfig} className={className}>
        <ThemeProvider
          value={{
            arrowsColor: arrowsColor,
            activeColor: activeColor,
            titleColor: titleColor,
            dropdownBackground: dropdownBackground
          }}
        >
          <NavbarSectionEl
            id="navelicious-section"
            onMouseLeave={this.onMouseLeave}
          >
            <Slider>{children}</Slider>
          </NavbarSectionEl>
        </ThemeProvider>
      </FlipperEl>
    );
  }
}

NavbarSection.defaultProps = {
  duration: 500,
  ease: 'easeOutExpo',
  activeColor: 'red',
  titleColor: 'green',
  dropdownBackground: 'white',
  animatingOut: false
};

NavbarSection.propTypes = {
  duration: PropTypes.number,
  ease: PropTypes.string,
  dropdownBackground: PropTypes.string,
  activeColor: PropTypes.string,
  titleColor: PropTypes.string,
  animatingOut: PropTypes.bool
};

export default NavbarSection;
