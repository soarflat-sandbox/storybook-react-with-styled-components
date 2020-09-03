import React from 'react';
import styled from 'styled-components';

// styled.tagnamme で styled component を取得できる。
// 今回は styled.button を実行しているので、button 要素の styled component になる。
const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

// styled(Component) で styled component を取得できる。
// 今回は Button コンポーネントを styled component にしている。
const TomatoButton = styled(Button)`
  background: tomato;
`;

export const Styled = () => {
  return (
    <>
      <Button>I'm purple.</Button>
      <br />
      <TomatoButton>I'm red.</TomatoButton>
    </>
  );
};
