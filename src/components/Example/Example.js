// const { Component, Children, cloneElement } = window.React;
// const { keyframes, default: styled } = window.styled;

import React, { Component, Children, cloneElement } from "react";
import styled, { keyframes } from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";
import PropTypes from "prop-types";

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
  border-color: transparent transparent var(--white);
  /* make sure it's above the main dropdown container so now box-shadow bleeds over it */
  z-index: 1;
  position: relative;
  /* prevent any gap in between caret and main dropdown */
  top: 1px;
`;

const DropdownBackground = styled.div`
  transform-origin: 0 0;
  background-color: var(--white);
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
    tweenConfig: PropTypes.shape({
      duration: PropTypes.number,
      easing: PropTypes.string
    })
  };

  render() {
    const { children, direction, animatingOut, tweenConfig } = this.props;
    return (
      <DropdownRoot
        direction={direction}
        animatingOut={animatingOut}
        duration={tweenConfig.duration}
      >
        <Flipped flipId="dropdown-caret">
          <Caret />
        </Flipped>
        <Flipped flipId="dropdown">
          <DropdownBackground>
            <Flipped inverseFlipId="dropdown" scale>
              <div>{this.props.children}</div>
            </Flipped>
          </DropdownBackground>
        </Flipped>
      </DropdownRoot>
    );
  }
}

const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : "1rem")};
  color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")};
`;

const HeadingLink = Heading.withComponent("li");

const LinkList = styled.ul`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }

  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;

const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
`;

const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`;

const CompanyDropdownEl = styled.div`
  width: 18.5rem;
`;

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> About Stripe
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />
              Customers
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon />
              Jobs
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/">
              <Icon />
              Environment
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />
            From the Blog
          </Heading>
          <LinkList marginLeft="25px">
            <li>
              <a href="/">Stripe Atlas &rsaquo;</a>
            </li>
            <li>
              <a href="/">Stripe Home &rsaquo;</a>
            </li>
            <li>
              <a href="/">Improved Fraud Detection &rsaquo;</a>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

const DevelopersDropdownEl = styled.div`
  width: 25rem;
`;

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`;

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Documentation</Heading>
          <p>Start integrating Stripe&rsquo;s products and tools</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <a href="/">Elements</a>
                </li>
                <li>
                  <a href="/">Checkout</a>
                </li>
                <li>
                  <a href="/">Mobile apps</a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Topics</h4>
              <LinkList>
                <li>
                  <a href="/">Apple Pay</a>
                </li>
                <li>
                  <a href="/">Testing</a>
                </li>
                <li>
                  <a href="/">Launch Checklist</a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> Full API Reference
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> API Status
            </a>
          </HeadingLink>
          <HeadingLink noMarginBottom>
            <a href="/">
              <Icon /> Open Source
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};

const ProductsDropdownEl = styled.div`
  width: 29rem;
`;

const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--${color})`};
`;

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 3.2rem;
    display: block;
  }
  a {
    color: var(--dark-grey);
  }
`;

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`;

const WorksWithStripe = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`;

const ProductsDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Logo color="blue" />
            </div>
            <div>
              <Heading color="blue">Payments</Heading>
              <p>A complete payments platform</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="green" />
            </div>
            <div>
              <Heading color="green">Billing</Heading>
              <p>Build and scale your recurring business model</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color="teal" />
            </div>
            <div>
              <Heading color="teal">Connect</Heading>
              <p style={{ marginBottom: 0 }}>
                Everything platforms need to get sellers paid
              </p>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
        <SubProductsList>
          <li>
            <Heading noMarginBottom>Sigma</Heading>
            <div>Your business data at your fingertips.</div>
          </li>
          <li>
            <Heading noMarginBottom>Atlas</Heading>
            <div>The best way to start an internet business.</div>
          </li>
          <li>
            <Heading noMarginBottom>Radar</Heading>
            <div>Fight fraud with machine learning.</div>
          </li>
        </SubProductsList>
        <WorksWithStripe>
          <Heading noMarginBottom>
            <a href="/">
              <Icon /> Works with Stripe
            </a>
          </Heading>
        </WorksWithStripe>
      </DropdownSection>
    </ProductsDropdownEl>
  );
};

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

const NavbarEl = styled.nav`
  margin: auto;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;

class Navbar extends Component {
  render() {
    const { children, onMouseLeave } = this.props;
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarList>{children}</NavbarList>
      </NavbarEl>
    );
  }
}

const navbarConfig = [
  { title: "Products", dropdown: ProductsDropdown },
  { title: "Developers", dropdown: DevelopersDropdown },
  { title: "Company", dropdown: CompanyDropdown }
];

class AnimatedNavbar extends Component {
  state = {
    activeIndices: []
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
      this.props.tweenConfig.duration
    );
  };

  render() {
    const { tweenConfig } = this.props;

    let CurrentDropdown;
    let PrevDropdown;
    let direction;

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

    console.log("currentIndex", currentIndex);
    // console.log("index", index);

    return (
      <Flipper flipKey={currentIndex} {...tweenConfig}>
        <Navbar onMouseLeave={this.onMouseLeave}>
          {navbarConfig.map((n, index) => {
            return (
              <NavbarItem
                title={n.title}
                index={index}
                onMouseEnter={this.onMouseEnter}
              >
                {currentIndex === index && (
                  <DropdownContainer
                    direction={direction}
                    animatingOut={this.state.animatingOut}
                    tweenConfig={this.props.tweenConfig}
                  >
                    {/* <CurrentDropdown /> */}
                    zx`zx
                  </DropdownContainer>
                )}
              </NavbarItem>
            );
          })}
        </Navbar>
      </Flipper>
    );
  }
}

const Form = styled.form`
  padding: 1.5rem 0 0.5rem 0;
  background-color: #fff;
  display: flex;
  justify-content: center;

  > div {
    display: flex;
  }

  fieldset {
    border: 0;
    padding: 1rem 0 1rem 0;
    margin-right: 3rem;
  }

  legend {
    font-weight: bold;
    display: block;
  }
  input {
    margin-right: 0.5rem;
  }
  label + label input {
    margin-left: 1.5rem;
  }
`;

class DemoControls extends Component {
  render() {
    const { duration, ease } = this.props;
    return (
      <Form
        innerRef={el => (this.el = el)}
        onChange={() => {
          this.props.onChange({
            duration: parseInt(
              this.el.querySelector('input[name="duration"]:checked').value,
              10
            ),
            ease: this.el.querySelector('input[name="ease"]:checked').value
          });
        }}
      >
        <div>
          <fieldset key="duration">
            <legend>Duration (ms):</legend>
            {[0, 300, 500, 1500].map(d => {
              return (
                <label key={d}>
                  <input
                    type="radio"
                    name="duration"
                    value={d}
                    checked={duration === d}
                  />
                  {d}
                </label>
              );
            })}
          </fieldset>
          <fieldset key="easing">
            <legend>Easing:</legend>
            {["linear", "easeOutExpo", "easeInOutCirc"].map(e => {
              return (
                <label key={e}>
                  <input
                    type="radio"
                    name="ease"
                    value={e}
                    checked={ease === e}
                  />
                  {e}
                </label>
              );
            })}
          </fieldset>
        </div>
      </Form>
    );
  }
}

const AppContainer = styled.div`
  background: #53f;
  // background: linear-gradient(150deg, #53f 15%, #05d5ff);
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > div:first-of-type {
    flex: 1 0 70vh;
  }
`;

class Example extends Component {
  state = { duration: 1500, ease: "easeOutExpo" };

  onChange = data => {
    this.setState(data);
  };

  render() {
    return (
      <AppContainer>
        <AnimatedNavbar
          tweenConfig={{
            ease: this.state.ease,
            duration: this.state.duration
          }}
        />
        <DemoControls
          duration={this.state.duration}
          onChange={this.onChange}
          ease={this.state.ease}
        />
      </AppContainer>
    );
  }
}

export default Example;
