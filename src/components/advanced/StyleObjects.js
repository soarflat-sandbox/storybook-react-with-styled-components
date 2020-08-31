import React from 'react';
import styled from 'styled-components';

const Box = styled.div({
  background: 'palevioletred',
  height: '50px',
  width: '50px',
});
// ↑ は以下と等価
// const Box = styled.div`
//   background: palevioletred;
//   height: 50px;
//   width: 50px;
// `;

const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px',
}));
// ↑ は以下と等価
// const PropsBox = styled.div`
//   background: ${props => props.background};
//   height: 50px;
//   width: 50px;
// `;

export const StyleObjects = () => {
  return (
    <div>
      <Box />
      <PropsBox background="blue" />
    </div>
  );
};
