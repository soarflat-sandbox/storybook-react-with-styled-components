import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  p {
    color: ${props => (props.redColor ? 'red' : 'black')};
  }
`;

const GlobalStyle2 = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }
`;

export const CreateGlobalStyle = () => {
  return (
    <>
      <GlobalStyle redColor />
      <p>GlobalStyle</p>
      <span>GlobalStyle</span>
      <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
        <GlobalStyle2 />
      </ThemeProvider>
    </>
  );
};
