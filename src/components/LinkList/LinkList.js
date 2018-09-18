import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";

const LinkListEl = styled.ul`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }

  margin-left: ${props => (props.marginLeft ? props.marginLeft : 0)};
`;

const LinkList = ({ marginLeft }) => (
  <LinkListEl marginLeft={marginLeft}>
    <li>
      <a href="/">Stripe Atlas &rsaquo;</a>
    </li>
    <li>
      <a href="/">Stripe Home &rsaquo;</a>
    </li>
    <li>
      <a href="/">Improved Fraud Detection &rsaquo;</a>
    </li>
  </LinkListEl>
);

export default LinkList;
