import React from "react";
import styled from "styled-components";
import theme from "../config/theme";

import {
  Navbar,
  NavbarSection,
  NavbarItem,
  NavbarCustomSection
} from "../navelicious";

const SiteContainer = styled.div`
  background: ${props => props.theme.secondary};
  height: 400px;
  padding: 40px;
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

  console.log("here ->", theme);

  return (
    <SiteContainer>
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
              <h1>Yep</h1>
            </NavbarItem>
            <NavbarItem title="Developers">
              <h1>Yep</h1>
            </NavbarItem>
            <NavbarItem title="Company">
              <h1>Yep</h1>
            </NavbarItem>

            <NavbarItem title="On Click" onClick={logHello} />
            <NavbarItem title="Link A" linkTo="/" />
            <NavbarItem title="A very long Link" linkTo="/" />
            <NavbarItem title="Example">
              <h1>Yep</h1>
            </NavbarItem>
            <NavbarItem title="this another very long Link" linkTo="/" />
          </NavbarSection>
        </Navbar>
      </NavbarContainer>
    </SiteContainer>
  );
};

export default NavExample;
