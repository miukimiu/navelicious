import React from "react";
import styled from "styled-components";

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
  background: #25263e;
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

const NavbarEl = styled(Navbar)`
  background: ${props => props.theme.navBg};
`;

const NavExample = () => {
  const logHello = () => {
    console.log("Hello!");
  };

  return (
    <SiteContainer>
      <h1>Hi people</h1>
      <NavbarContainer>
        <NavbarEl justify="space-between">
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
        </NavbarEl>
      </NavbarContainer>
    </SiteContainer>
  );
};

export default NavExample;
