import React from "react";
import styled from "styled-components";

const CustomDropdownEl = styled.div`
  padding: 20px;

  h4 {
    margin: 0 0 10px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      padding: 10px 0;
    }
  }
`;

const Circle = styled.div`
  background-color: ${props => props.theme.secondary};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  display: inline-flex;
`;

const CustomDropdown = ({ title }) => (
  <CustomDropdownEl>
    <h4>{title}</h4>
    <ul>
      <li>
        <Circle />
        One
      </li>
      <li>
        <Circle /> Two
      </li>
      <li>
        <Circle />
        Three
      </li>
    </ul>
  </CustomDropdownEl>
);

export default CustomDropdown;
