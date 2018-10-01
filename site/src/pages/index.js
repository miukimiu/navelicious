import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import {
  Navbar,
  NavbarSection,
  NavbarItem,
  NavbarCustomSection
} from '../../../navelicious';


const NavbarContainer = styled.div`
  background: ${props => props.theme.brand};
  display: flex;
  flex-direction: column;
  min-height: 100px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
`;

const Logo = styled.div`
  background-color: aliceblue;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 20px;
`;

const NavbarEl = styled(Navbar)`
  background: ${props => props.theme.brand};
`;


const IndexPage = () => {
  
  const logHello = () => {
    console.log("Hello!")
  }
  
  return(
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
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
  </Layout>
)}

export default IndexPage
