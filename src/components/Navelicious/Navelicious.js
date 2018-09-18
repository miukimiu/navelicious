import React, { Component } from "react";
import styled from "styled-components";
import DevelopersDropdown from "../ExampleContent/DevelopersDropdown";
import ProductsDropdown from "../ExampleContent/ProductsDropdown";
import CompanyDropdown from "../ExampleContent/CompanyDropdown";
import { Navbar, NavbarItem } from "../../index";
// import Navelicious from "../Navelicious/Navelicious";

const AppContainer = styled.div`
  background: #53f;
  display: flex;
  flex-direction: column;
  min-height: 200px;

  > div:first-of-type {
    flex: 1 0 200px;
  }
`;

const navbarConfig = [
  { title: "Products", dropdown: ProductsDropdown },
  { title: "Developers", dropdown: DevelopersDropdown },
  { title: "Company", dropdown: CompanyDropdown },
  { title: "Just a link", link: "sdas" }
];

class Navelicious extends Component {
  render() {
    return (
      <AppContainer>
        <Navbar
          ease="easeOutExpo"
          duration={500}
          dropdownBackground="white"
          navbarConfig={navbarConfig}
        />
      </AppContainer>
    );
  }
}

export default Navelicious;
