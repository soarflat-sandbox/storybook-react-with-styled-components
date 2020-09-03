import React from 'react';
import styled, { StyleSheetManager } from 'styled-components';

const Box = styled.div`
  color: ${props => props.theme.color};
  display: flex;
`;

export const StyleSheetManager1 = () => {
  return (
    <>
      {/* StyleSheetManager に disableVendorPrefixes を指定すると、生成される DOM のスタイルに
      ベンダープレッフィックスは付与されない*/}
      <StyleSheetManager disableVendorPrefixes>
        <Box>flex のベンダープレッフィックスは付与されない</Box>
      </StyleSheetManager>
    </>
  );
};
