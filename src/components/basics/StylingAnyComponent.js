import React from 'react';
import styled from 'styled-components';

const Link = ({ className, children }) => (
  <a className={className} href="">
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export const StylingAnyComponent = () => {
  return (
    <div>
      <Link>Unstyled, boring Link</Link>
      <br />
      <StyledLink>Styled, exciting Link</StyledLink>
    </div>
  );
};
