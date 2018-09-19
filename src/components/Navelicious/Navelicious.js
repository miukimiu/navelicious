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

const AppContainer = styled.div`
  background: #53f;
  display: flex;
  flex-direction: column;
  min-height: 200px;

  > div:first-of-type {
    flex: 1 0 200px;
  }
`;

class Navelicious extends Component {
  logHello = () => {
    console.log("hello!");
  };

  render() {
    return (
      <AppContainer>
        <Navbar justify="space-between">
          <NavbarCustomSection>Logo</NavbarCustomSection>
          <NavbarSection
            ease="easeOutExpo"
            duration={500}
            dropdownBackground="white"
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

            <NavbarItem title="Click" onClick={this.logHello} />
            <NavbarItem title="Link" linkTo="/" />
          </NavbarSection>
        </Navbar>
      </AppContainer>
    );
  }
}

export default Navelicious;
