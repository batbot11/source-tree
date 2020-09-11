import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.img`
  width: 32px;
`;

const ButtonLoader = () => {
  return (
    <StyledLoader src="/images/loader.gif" />
  );
};

export default ButtonLoader;