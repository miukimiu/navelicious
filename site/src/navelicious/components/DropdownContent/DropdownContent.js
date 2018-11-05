import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DropdownContentEl = styled.div`
  width: ${({ width }) => `${width}`};
  padding: ${props => props.padding};
`;

const DropdownContent = ({ width, children, padding }) => {
  return (
    <DropdownContentEl width={width} padding={padding}>
      {children}
    </DropdownContentEl>
  );
};

DropdownContent.defaultProps = {
  width: '100px',
  padding: '5px'
};

DropdownContent.propTypes = {
  justify: PropTypes.string,
  padding: PropTypes.string
};

export default DropdownContent;
