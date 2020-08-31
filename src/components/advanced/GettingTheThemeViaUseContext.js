import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  return <Button theme={theme}>Themed</Button>;
};

const theme = {
  main: 'mediumseagreen',
};

export const GettingTheThemeViaUseContext = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
};
