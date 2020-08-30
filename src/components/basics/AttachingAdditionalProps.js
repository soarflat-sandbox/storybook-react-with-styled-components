import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  // .attrs メソッドを利用することで、コンポーネントに属性をアタッチできる。
  type: 'password',
  size: props.size || '1em',
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export const AttachingAdditionalProps = () => {
  return (
    <div>
      <Input placeholder="A small text input" />
      <br />
      <Input placeholder="A bigger text input" size="2em" />
    </div>
  );
};
