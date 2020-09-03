import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeInButton = styled.button`
  animation: 1s ${fadeIn} ease-out;
`;

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animation = props =>
  css`
    ${pulse} ${props.animationLength} infinite alternate;
  `;

const PulseButton = styled.button`
  animation: ${animation};
`;

export const Keyframes = () => {
  return (
    <>
      <FadeInButton>FadeInButton</FadeInButton>
      <PulseButton animationLength="1000ms">PulseButton</PulseButton>
    </>
  );
};
