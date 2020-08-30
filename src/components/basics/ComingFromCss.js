import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// https://styled-components.com/docs/basics#how-do-styled-components-work-within-a-component
// styled を利用する場合は import styles from './styles.css' のように CSS をインポートするのではなく、
// 以下のように styled を利用して、要素にスタイルを適用した styled components を定義する。
// IMPORTANT: styled components は必ずコンポーネントの外側に定義する。そうしないと処理が無茶苦茶遅くなる。
//            そのため、今回の場合だと StyledCounter を定義する記述を ComingFromCss 内に記述するのは NG。
const StyledCounter = styled.div`
  /* ... */
`;
const Paragraph = styled.p`
  /* ... */
`;
const Button = styled.button`
  /* ... */
`;

// SCSS ライクな構文も書ける。
const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;
  &:hover {
    color: red;
  }
  & ~ & {
    background: tomato; // <Thing> の隣ににない <Thing>(兄弟要素)
  }
  & + & {
    background: lime;
  }
  &.something {
    background: orange;
  }
  .something-else & {
    border: 1px solid;
  }
`;

const Thing2 = styled.div`
  color: blue;

  .something {
    border: 1px solid;
    display: block;
  }
`;

const Thing3 = styled.div`
  // & を 2つ指定することで、同じクラス名が２つ指定される（.lhngrx.lhngrx みたいな感じ）
  // これで CSS の詳細度を上げることができる。
  && {
    color: blue;
  }
`;

const GlobalStyle = createGlobalStyle`
  div${Thing3} {
    color: red;
  }
`;

export const ComingFromCss = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <>
      <StyledCounter>
        <Paragraph>{count}</Paragraph>
        <Button onClick={increment}>+</Button>
        <Button onClick={decrement}>-</Button>
      </StyledCounter>

      <hr />

      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>

      <hr />

      <Thing2>
        <label htmlFor="foo-button" className="something">
          Mystery button
        </label>
        <button id="foo-button">What do I do?</button>
      </Thing2>

      <hr />

      <GlobalStyle />
      <Thing3>I'm blue, da ba dee da ba daa</Thing3>
    </>
  );
};
