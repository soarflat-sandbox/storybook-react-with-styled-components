import React from 'react';
import styled from 'styled-components';
import './ExistingCss.css';

const Button = () => <button>Button</button>;
const Button2 = () => <button className="great">Button2</button>;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const TomatoButton2 = styled(Button2)`
  color: tomato;
  border-color: tomato;
`;

const MyComponent = styled.div`
  background-color: green;
`;

export const ExistingCss = ({ className = 'great' }) => {
  return (
    <>
      {/* styled() で生成したコンポーネントは className が有効にならない。
      そのため、以下の great クラスはレンダリングした時にはなくなっている。*/}
      <TomatoButton className="great" />
      <TomatoButton2 />
      <hr />
      <MyComponent>MyComponent</MyComponent>
      {/* import './ExistingCss.css' でインポートしたスタイルが適用される 
      これを解決するには、以下のようにスタイルシートの詳細度を上げる。
      .red-bg.red-bg {
        background-color: red;
      } */}
      <MyComponent className="red-bg">MyComponent</MyComponent>
    </>
  );
};
