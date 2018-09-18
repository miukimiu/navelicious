import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { Heading, DropdownContent } from "../../index";

const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`;

const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
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

const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--${color})`};
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

const ProductsDropdown = () => (
  <DropdownContent width="30rem">
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
  </DropdownContent>
);

export default ProductsDropdown;
