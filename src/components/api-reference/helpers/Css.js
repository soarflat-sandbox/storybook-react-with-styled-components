import React from 'react';
import styled, { css } from 'styled-components';

const complexMixin = css`
  color: ${props => (props.redColor ? 'red' : 'black')};
`;

const StyledComp = styled.div`
  /* This is an example of a nested interpolation */
  ${props => (props.complex ? complexMixin : 'color: blue;')};
`;

export const Css = () => {
  return (
    <>
      <StyledComp>StyledComp</StyledComp>
      <StyledComp complex>StyledComp</StyledComp>
      <StyledComp complex redColor>
        StyledComp
      </StyledComp>
    </>
  );
};
