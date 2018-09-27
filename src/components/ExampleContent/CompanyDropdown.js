import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { DropdownContent, Heading, HeadingLink, LinkList } from "../../index";

const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`;

const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: pink;
  border-radius: 50%;
  opacity: 0.2;
  display: inline-block;
`;

const CompanyDropdown = () => (
  <DropdownContent width="29rem" padding="20px">
    <DropdownSection data-first-dropdown-section>
      <ul>
        <HeadingLink>
          <a href="/">
            <Icon /> About Stripe
          </a>
        </HeadingLink>
        <HeadingLink>
          <a href="/">
            <Icon />
            Customers
          </a>
        </HeadingLink>
        <HeadingLink>
          <a href="/">
            <Icon />
            Jobs
          </a>
        </HeadingLink>
        <HeadingLink noMarginBottom>
          <a href="/">
            <Icon />
            Environment
          </a>
        </HeadingLink>
      </ul>
    </DropdownSection>
    <DropdownSection>
      <div>
        <Heading>
          <Icon />
          From the Blog
        </Heading>
        <LinkList marginLeft="25px">
          <li>
            <a href="/">Stripe Atlas &rsaquo;</a>
          </li>
          <li>
            <a href="/">Stripe Home &rsaquo;</a>
          </li>
          <li>
            <a href="/">Improved Fraud Detection &rsaquo;</a>
          </li>
        </LinkList>
      </div>
    </DropdownSection>
  </DropdownContent>
);

export default CompanyDropdown;
