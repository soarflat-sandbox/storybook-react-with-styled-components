import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// 以下は↑と等価
const Title2 = styled.h1([
  'font-size: 1.5em;text-align: center;color: palevioletred;',
]);

export const TaggedTemplateLiterals = () => {
  return (
    <>
      <Title>Hello World!</Title>
      <Title2>Hello World!</Title2>
    </>
  );
};
