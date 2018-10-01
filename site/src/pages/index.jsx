import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import SEO from '../components/SEO';
import config from '../../data/SiteConfig';
import CtaButton from '../components/CtaButton';
import Navigation from '../components/Layout/Navigation';
import CompanyDropdown from '../components/Dropdowns/CompanyDropdown';
import DevelopersDropdown from '../components/Dropdowns/DevelopersDropdown';
import ProductsDropdown from '../components/Dropdowns/ProductsDropdown';

import {
  Navbar,
  NavbarSection,
  NavbarItem,
  NavbarCustomSection
} from '../../../navelicious';

const IndexHeadContainer = styled.div`
  background: ${props => props.theme.secondary};
  text-align: center;
  padding: 0 20px 80px;
`;

const Hero = styled.div`
  padding: 40px 20px 20px;
  color: white;
  & > h1 {
    font-weight: 600;
  }
`;

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }
`;

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

class Index extends React.Component {
  logHello = () => {
    console.log('hello!');
  };

  render() {
    const allSEOMarkdown = this.props.data.allMarkdown.edges;

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={allSEOMarkdown} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <h1>{config.siteTitle}</h1>
              <h4>{config.siteDescription}</h4>
            </Hero>
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
                  <NavbarItem title="A very long Link" linkTo="/" />
                  <NavbarItem title="Example">
                    <ul>
                      <li>asas</li>
                    </ul>
                  </NavbarItem>
                  <NavbarItem title="this another very long Link" linkTo="/" />
                </NavbarSection>
              </NavbarEl>
            </NavbarContainer>
          </IndexHeadContainer>
          <BodyContainer>
            <h2>Navbar example</h2>
            <p>
              Made for modern documentation sites. Table of Contents
              automatically generated from markdown files.{' '}
            </p>
            <CtaButton to={'/lesson-one'}>See Your First Post</CtaButton>

            <div className="contributors">
              <p>
                Created by Eric Windmill.{' '}
                <a href="https:twitter.com/ericwindmill">
                  You should follow him on Twitter.
                </a>{' '}
                Also, <a href="https://github.com/Levino">Levin Keller</a> for
                making it better than I could{"'"}ve alone.
              </p>
            </div>
          </BodyContainer>
        </main>
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
