import React, { Component } from "react";
import styled from "styled-components";
import DevelopersDropdown from "../ExampleContent/DevelopersDropdown";
import ProductsDropdown from "../ExampleContent/ProductsDropdown";
import CompanyDropdown from "../ExampleContent/CompanyDropdown";
import {
  Navbar,
  NavbarSection,
  NavbarItem,
  NavbarCustomSection
} from "../../index";
import CreatePortal from "../../core/CreatePortal";

const AppContainer = styled.div`
  background: #53f;
  display: flex;
  flex-direction: column;
  min-height: 200px;

  > div:first-of-type {
    flex: 1 0 200px;
  }
`;

const Logo = styled.div`
  background-color: aliceblue;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px;
`;

class Navelicious extends Component {
  logHello = () => {
    console.log("hello!");
  };

  render() {
    return (
      <AppContainer>
        <Navbar justify="space-between" background="white">
          <NavbarCustomSection>
            <Logo />
          </NavbarCustomSection>
          <NavbarSection
            ease="easeOutExpo"
            duration={500}
            dropdownBackground="white"
            titleColor="black"
            arrowsColor="red"
          >
            <NavbarItem title="Products">
              <ProductsDropdown />
            </NavbarItem>
            <NavbarItem title="Developers">
              <DevelopersDropdown />
            </NavbarItem>
            <NavbarItem title="Company">
              <CompanyDropdown />
            </NavbarItem>

            <NavbarItem title="On Click" onClick={this.logHello} />
            <NavbarItem title="Link A" linkTo="/" />
            {/* <NavbarItem title="A very long Link" linkTo="/" />
            <NavbarItem title="Example">
              <ul>
                <li>asas</li>
              </ul>
            </NavbarItem>
            <NavbarItem title="this another very long Link" linkTo="/" /> */}
          </NavbarSection>
        </Navbar>
      </AppContainer>
    );
  }
}

export default Navelicious;
