import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = props => (
  <Button {...props} children={props.children.split('').reverse()} />
);

export const ExtendingStyles = () => {
  return (
    <div>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      {/* as を利用すると要素を動的に変更できる。本来、Button コンポーネントは
      button 要素だが、as="a" を指定しているので、aタグに変更される。*/}
      <Button as="a" href="/">
        Link with Button styles
      </Button>
      <TomatoButton as="a" href="/">
        Link with Tomato Button styles
      </TomatoButton>
      {/* 別のコンポーネントにも変更できる。 */}
      <Button as={ReversedButton}>
        Custom Button with Normal Button styles
      </Button>
    </div>
  );
};
