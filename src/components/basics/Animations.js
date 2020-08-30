import React from 'react';
import styled, { keyframes } from 'styled-components';

// キーフレームを生成する
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
export const Animations = () => {
  return <Rotate>&lt; 💅🏾 &gt;</Rotate>;
};
