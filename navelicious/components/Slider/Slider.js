import React, { Component } from "react";
import styled from "styled-components";
import { ThemeConsumer } from "../../core/ThemeContext";

const SliderEl = styled.div`
  background: ${props => props.background};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  .prev,
  .next {
    margin: 0 auto;
    cursor: pointer;
    transition: 0.6s ease;
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;

    > div {
      align-items: center;
      line-height: 1;
      width: 14px;
      height: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .prev:hover,
  .next:hover {
    color: white;
  }
`;

const NavbarListContainer = styled.div`
  width: ${props => props.width}px;
  overflow-x: hidden;
`;

const NavbarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  white-space: nowrap;
  /* IE 11 needs this inline block :( */
  display: inline-block;

  li {
    display: inline-flex;
  }
`;

const BackArrow = styled.div`
  background: ${props => props.background};
  z-index: 9999;

  path {
    fill: ${props => props.color};
  }
`;

const NextArrow = styled.div`
  background: ${props => props.background};

  path {
    fill: ${props => props.color};
  }
`;

const LeftArrow = ({ goToPrevSlide, background, color }) => {
  return (
    <BackArrow
      className="prev"
      onClick={goToPrevSlide}
      background={background}
      color={color}
    >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
          <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
        </svg>
      </div>
    </BackArrow>
  );
};

const RightArrow = ({ goToNextSlide, background, color }) => {
  return (
    <NextArrow
      className="next"
      onClick={goToNextSlide}
      background={background}
      color={color}
    >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
          <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
        </svg>
      </div>
    </NextArrow>
  );
};

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.sliderRef = React.createRef();
    this.navbarListRef = React.createRef();

    this.state = {
      arrows: true,
      currentIndex: 0,
      translateValue: 0,
      numberOfChildren: 0,
      sliderWidth: 0,
      navbarListContainerWidth: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.getArrows();
    }
  }

  componentDidMount() {
    // count number of children
    const numberOfChildren = React.Children.count(this.props.children);

    this.setState({
      numberOfChildren: numberOfChildren
    });

    this.getArrows();
    this.getNavbarListContainerWidth();
    window.addEventListener("resize", this.getArrows);
    window.addEventListener("resize", this.getNavbarListContainerWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getArrows);
    window.removeEventListener("resize", this.getNavbarListContainerWidth);
  }

  getArrows = () => {
    const sliderWidth =
      this.sliderRef.current.getBoundingClientRect().width || 0;
    const navbarListWidth = document
      .getElementsByClassName("navelicious-navbar-list")[0]
      .getBoundingClientRect().width;

    if (navbarListWidth <= sliderWidth) {
      this.setState({
        arrows: false
      });
    } else {
      this.setState({
        arrows: true
      });
    }
  };

  getNavbarListContainerWidth = () => {
    const sliderRef = this.sliderRef.current;
    const sliderArrowLeft = sliderRef.getElementsByClassName("prev")[0] || 0;
    const sliderArrowRight = sliderRef.getElementsByClassName("next")[0] || 0;

    /* 
    first I'm setting the navbarListContainerWidth to Zero because if I try to resize it gets the previous size. 
    So, if I try to resize the window to a smaller positon it always get the current size and never gets
    below that. 
    To solve this, I'm setting the width to zero so I can actualy get the real size of the container.
    */
    this.setState({
      navbarListContainerWidth: 0
    });

    const navbarListContainerWidth =
      sliderRef.offsetWidth -
      (sliderArrowLeft.offsetWidth + sliderArrowRight.offsetWidth);

    /* 
    As you might have noticed the state was first set to zero. 
    After that I could get the real size of the navbarlistWith and
    now I can apply it. It need a setTimeout do first get the zero
    */
    setTimeout(() => {
      this.setState({
        navbarListContainerWidth: navbarListContainerWidth
      });
    }, 1000);
  };

  goToPrevSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue:
        prevState.translateValue + this.slideWidth(prevState.currentIndex - 1)
    }));
  };

  goToNextSlide = () => {
    /* 
    if last item rigt position is less than right side of container I'm in the end of the slider
    After that when I click the arrow I want to go back to position 0. So I want to set the 
    state translateValue to 0 
    */
    const sliderArrowRight =
      this.sliderRef.current.getBoundingClientRect().right || 0;

    const navList = document
      .getElementsByClassName("navelicious-navbar-list")[0]
      .getBoundingClientRect().right;

    if (navList <= sliderArrowRight) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue:
        prevState.translateValue + -this.slideWidth(prevState.currentIndex)
    }));
  };

  slideWidth = index => {
    // this method calculates the width of the current slide, and then returns it to us.
    return document.querySelector(`.navelicious-slide${index}`).clientWidth;
  };

  render() {
    const { children } = this.props;
    const { arrows } = this.state;

    return (
      <ThemeConsumer>
        {context => (
          <SliderEl innerRef={this.sliderRef} background={context.background}>
            {arrows && (
              <LeftArrow
                goToPrevSlide={this.goToPrevSlide}
                background={context.background}
                color={context.arrowsColor}
              />
            )}

            <NavbarListContainer width={this.state.navbarListContainerWidth}>
              <NavbarList
                className="navelicious-navbar-list"
                style={{
                  transform: `translateX(${this.state.translateValue}px)`,
                  transition: "transform ease-out 0.45s"
                }}
              >
                {children}
              </NavbarList>
            </NavbarListContainer>
            {arrows && (
              <RightArrow
                goToNextSlide={this.goToNextSlide}
                background={context.background}
                color={context.arrowsColor}
              />
            )}
          </SliderEl>
        )}
      </ThemeConsumer>
    );
  }
}
