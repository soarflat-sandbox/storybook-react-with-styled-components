import React from 'react';
import { ThemeProvider, ThemeConsumer, withTheme } from 'styled-components';

// withTheme でラップしたコンポーネントは ThemeProvider から渡された
// theme props を取得できる。
// React コンポーネントから theme の値を取得したい時に利用する。
const MyComponent = withTheme(props => {
  return <h1>The theme color is {props.theme.color}.</h1>;
});

const theme = {
  color: 'mediumseagreen',
};

export const WithThemeAndThemeConsumer = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MyComponent />
        <ThemeConsumer>
          {theme => <div>The theme color is {theme.color}.</div>}
        </ThemeConsumer>
      </ThemeProvider>
    </>
  );
};
