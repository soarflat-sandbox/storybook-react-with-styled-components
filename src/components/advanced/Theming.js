import React from 'react';
// ThemeProvider は文字通り Provider コンポーネント。
// そのため、以下のような感じで様々な階層のコンポーネントに値を渡せる。
//
// <ThemeProvider theme={theme}>
//   <Wrapper>
//     <Button>Themed</Button>
//   </Wrapper>
// </ThemeProvider>
//
// 上記の theme は Wrapper と Button のどちらかでも値を取得できる。
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.div`
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  // props.theme で ThemeProvider から渡された値にアクセスできる。
  border: 2px solid ${props => props.theme.main};
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// <ThemeProvider> にラップされていない時に、デフォルトで渡される theme 変数
Button.defaultProps = {
  theme: {
    main: 'palevioletred',
  },
};

const theme = {
  main: 'mediumseagreen',
};

export const Theming = () => {
  return (
    <div>
      <Wrapper theme={{ main: 'palevioletred' }}>
        <Button>Normal</Button>
      </Wrapper>

      <ThemeProvider theme={theme}>
        <Wrapper>
          <Button>Themed</Button>
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};
