import React from 'react';
import styled, { isStyledComponent } from 'styled-components';

const MaybeStyledComponent = ({ className }) => (
  <h1 className={className}>MaybeStyledComponent</h1>
);

const TargetedComponent = isStyledComponent(MaybeStyledComponent)
  ? MaybeStyledComponent
  : styled(MaybeStyledComponent)``;

const ParentComponent = styled.div`
  color: cornflowerblue;

  ${TargetedComponent} {
    color: tomato;
  }
`;

export const IsStyledComponent = () => {
  return (
    <ParentComponent>
      <TargetedComponent />
      <h2>ParentComponent</h2>
    </ParentComponent>
  );
};
