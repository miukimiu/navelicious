import React from "react";
import styled from "styled-components";
import theme from "../config/theme";
import CustomDropdown from "./CustomDropdown";
import {
  Navbar,
  NavbarSection,
  NavbarItem,
  NavbarCustomSection
} from "../navelicious";
import Pickers from "./Pickers";

const ExampleContainer = styled.div`
  background: ${props => props.theme.secondary};
  height: 300px;
  padding: 40px;

  h1 {
    text-align: center;
    color: white;
  }
`;

const NavbarContainer = styled.div`
  background: ${props => props.theme.navBg};
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  background-color: ${props => props.theme.primary};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px;
`;

const Ul = styled.ul`
  list-style: none;
`;

class NavExample extends React.Component {
  state = {
    example: 1
  };
  render() {
    const { example } = this.state;

    const logHello = () => {
      console.log("Hello!");
    };

    const loadExample = id => {
      this.setState({ example: id });
    };

    return (
      <ExampleContainer>
        <h1>Navelicious</h1>

        {example === 1 && (
          <NavbarContainer>
            <Navbar justify="space-between" background={theme.navBg}>
              <NavbarCustomSection>
                <Logo />
              </NavbarCustomSection>
              <NavbarSection
                ease="easeOutExpo"
                duration={500}
                dropdownBackground="white"
                titleColor="white"
                arrowsColor="white"
              >
                <NavbarItem title="Products">
                  <CustomDropdown title="Products Dropwdown" />
                </NavbarItem>
                <NavbarItem title="Developers">
                  <CustomDropdown title="Developers Dropdown" />
                </NavbarItem>
                <NavbarItem title="Company">
                  <CustomDropdown title="Company Dropdown" />
                </NavbarItem>

                <NavbarItem title="On Click" onClick={logHello} />
                <NavbarItem title="Link" linkTo="/" />
                <NavbarItem title="A very long Link" linkTo="/" />
                <NavbarItem title="Example">
                  <CustomDropdown title="Example Dropdown" />
                </NavbarItem>
                <NavbarItem title="This is another very long Link" linkTo="/" />
              </NavbarSection>
            </Navbar>
          </NavbarContainer>
        )}
        {example === 2 && (
          <NavbarContainer>
            <Navbar justify="center" background={theme.navBg}>
              <NavbarSection
                ease="easeOutExpo"
                duration={500}
                dropdownBackground="white"
                titleColor="white"
                arrowsColor="white"
              >
                <NavbarItem title="Products">
                  <CustomDropdown title="Products Dropwdown" />
                </NavbarItem>
                <NavbarItem title="Developers">
                  <CustomDropdown title="Developers Dropdown" />
                </NavbarItem>
                <NavbarItem title="Company">
                  <CustomDropdown title="Company Dropdown" />
                </NavbarItem>

                <NavbarItem title="On Click" onClick={logHello} />
                <NavbarItem title="Link" linkTo="/" />
                <NavbarItem title="A very long Link" linkTo="/" />
                <NavbarItem title="Example">
                  <CustomDropdown title="Example Dropdown" />
                </NavbarItem>
              </NavbarSection>
            </Navbar>
          </NavbarContainer>
        )}

        <UlSytled>
          <li>
            <a href="#" onClick={() => loadExample(1)}>
              Example 1
            </a>
          </li>
          <li>
            <a href="#" onClick={() => loadExample(2)}>
              Example 2
            </a>
          </li>
        </UlSytled>
      </ExampleContainer>
    );
  }
}

export default NavExample;
