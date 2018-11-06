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
`;

const Logo = styled.div`
  background-color: ${props => props.theme.primary};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px;
`;

const NavExample = props => {
  const logHello = () => {
    console.log("Hello!");
  };

  return (
    <ExampleContainer>
      <h1>Navelicious</h1>
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
    </ExampleContainer>
  );
};

export default NavExample;
