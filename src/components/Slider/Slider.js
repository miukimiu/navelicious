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
    padding-top: 10px;
    padding-bottom: 10px;
    height: 100%;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.6s ease;
  }
  .prev:hover,
  .next:hover {
    color: white;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const NavbarListContainer = styled.div`
  width: ${props => props.width}px;
  overflow-x: auto;
  overflow-y: hidden;
`;

const NavbarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  white-space: nowrap;
  display: inline-flex;
  width: ${props => (props.width ? "0px" : `100%`)};

  li {
    display: inline-flex;
  }
`;

const BackArrow = styled.div`
  margin-right: 5px;
  width: 20px;
  height: 20px;
  background: ${props => props.background};
  z-index: 9999;
`;

const NextArrow = styled.div`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  background: ${props => props.background};
`;

const LeftArrow = ({ goToPrevSlide, background }) => {
  return (
    <BackArrow className="prev" onClick={goToPrevSlide} background={background}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
        <path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
      </svg>
    </BackArrow>
  );
};

const RightArrow = ({ goToNextSlide, background }) => {
  return (
    <NextArrow className="next" onClick={goToNextSlide} background={background}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
        <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
      </svg>
    </NextArrow>
  );
};

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.sliderRef = React.createRef();
    this.navbarListRef = React.createRef();

    this.state = {
      currentIndex: 0,
      translateValue: 0,
      numberOfChildren: 0,
      sliderWidth: 0,
      navbarListWidth: 0,
      navbarListLeft: 0
    };
  }

  componentDidMount() {
    // count number of children
    const numberOfChildren = React.Children.count(this.props.children);
    // console.log("numberOfChildren", numberOfChildren);

    this.setState({
      numberOfChildren: numberOfChildren
    });

    this.getNavbarListWidth();
    window.addEventListener("resize", this.getNavbarListWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.getNavbarListWidth);
  }

  getNavbarListWidth = () => {
    const sliderRef = this.sliderRef.current;
    const sliderArrowLeft = sliderRef.getElementsByClassName("prev")[0];
    const sliderArrowRight = sliderRef.getElementsByClassName("next")[0];
    const navbarListLeft = sliderRef.getBoundingClientRect().left;

    /* 
    first I'm setting the navbarListWidth to Zero because if I try to resize it gets the previous size. 
    So, if I try to resize the window to a smaller positon it always get the current size and never gets
    below that. 
    To solve it, I'm setting the width to zero so I can actualy get the real size of the container.
    */
    this.setState({
      navbarListWidth: 0
    });

    const navbarListWidth =
      sliderRef.offsetWidth -
      (sliderArrowLeft.offsetWidth + sliderArrowRight.offsetWidth);

    /* 
    As you might have noticed the state was first set to zero. 
    After that I could get the real size of the navbarlistWith and
    now I can apply it. It need a setTimeout do first get the zero
    */
    setTimeout(() => {
      this.setState({
        navbarListWidth: navbarListWidth,
        navbarListLeft: navbarListLeft
      });
    }, 1000);
  };

  goToPrevSlide = () => {
    console.log("goToPrevSlide");
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === 0) {
      console.log("currentIndex is equal to numberOfChildren");
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
    console.log("goToNextSlide");
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.numberOfChildren) {
      console.log("currentIndex is equal to numberOfChildren");
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
    console.log(
      "slide",
      document.querySelector(`.navelicious-slide${index}`).clientWidth
    );
    return document.querySelector(`.navelicious-slide${index}`).clientWidth;
  };

  render() {
    const { children } = this.props;

    // console.log("currentIndex", this.state.currentIndex);
    return (
      <ThemeConsumer>
        {context => (
          <SliderEl innerRef={this.sliderRef} background={context.background}>
            <LeftArrow
              goToPrevSlide={this.goToPrevSlide}
              background={context.background}
            />
            <NavbarListContainer width={this.state.navbarListWidth}>
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

            <RightArrow
              goToNextSlide={this.goToNextSlide}
              background={context.background}
            />
          </SliderEl>
        )}
      </ThemeConsumer>
    );
  }
}
