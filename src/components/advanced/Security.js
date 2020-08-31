import React from 'react';
import styled from 'styled-components';
import 'css.escape';

// 任意の入力をスタイルに適用できる場合、入力をサニタイズする必要がある。
// CSS をサニタイズするためには、css.escape をインポートして、
// CSS.escape() でサニタイズする。
const userInput = CSS.escape('/api/withdraw-funds');
const ArbitraryComponent = styled.div`
  // userInput がサニタイズされていないと、インジェクジョンが発生する可能性がある。
  background: url(${userInput});
`;

export const Security = () => {
  return <ArbitraryComponent>Secutiry</ArbitraryComponent>;
};
