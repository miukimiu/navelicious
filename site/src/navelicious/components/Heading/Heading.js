import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeadingEl = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${props => (props.noMarginBottom ? 0 : '1rem')};
  color: ${({ color }) => (color ? `red` : 'var(--blue)')};
`;

const Heading = ({ children, color }) => (
  <HeadingEl color={color}>{children}</HeadingEl>
);

Heading.defaultProps = {
  color: '#000'
};

Heading.propTypes = {
  color: PropTypes.string
};

export default Heading;
