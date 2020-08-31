import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

const theme = {
  fg: 'palevioletred',
  bg: 'white',
};

// ThemeProvider の theme props には関数も渡せる。
// コンポーネントの階層が以下の場合
//
// <ThemeProvider theme={theme}>
//   <ThemeProvider theme={invertTheme}></ThemeProvider>
// </ThemeProvider>
//
// invertTheme のような関数は、親階層の ThemeProvider に渡された theme の値を受け取る。
// 関数の実行結果が、新たな theme 変数になる。
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});

export const FunctionThemes = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button>Default Theme</Button>
        <ThemeProvider theme={invertTheme}>
          <Button>Inverted Theme</Button>
        </ThemeProvider>
      </div>
    </ThemeProvider>
  );
};
