import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";
import { Heading, HeadingLink, LinkList, DropdownContent } from "../../index";

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

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
`;

const DevelopersDropdown = () => (
  <DropdownContent width="25rem">
    <DropdownSection data-first-dropdown-section>
      <div>
        <Heading>Documentation</Heading>
        <p>Start integrating Stripe&rsquo;s products and tools</p>
        <Flex>
          <div>
            <h4>Get Started</h4>
            <LinkList>
              <li>
                <a href="/">Elements</a>
              </li>
              <li>
                <a href="/">Checkout</a>
              </li>
              <li>
                <a href="/">Mobile apps</a>
              </li>
            </LinkList>
          </div>
          <div>
            <h4>Popular Topics</h4>
            <LinkList>
              <li>
                <a href="/">Apple Pay</a>
              </li>
              <li>
                <a href="/">Testing</a>
              </li>
              <li>
                <a href="/">Launch Checklist</a>
              </li>
            </LinkList>
          </div>
        </Flex>
      </div>
    </DropdownSection>
    <DropdownSection>
      <ul>
        <HeadingLink>
          <a href="/">
            <Icon /> Full API Reference
          </a>
        </HeadingLink>
        <HeadingLink>
          <a href="/">
            <Icon /> API Status
          </a>
        </HeadingLink>
        <HeadingLink noMarginBottom>
          <a href="/">
            <Icon /> Open Source
          </a>
        </HeadingLink>
      </ul>
    </DropdownSection>
  </DropdownContent>
);

export default DevelopersDropdown;
