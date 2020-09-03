import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// styled component（styled.input）attrs をチェインすれば、props を受け取ることが可能。
const Input = styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}))`
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;
  padding: ${props => props.padding};

  ::placeholder {
    color: palevioletred;
  }
`;

const Component = styled.div`
  color: red;
`;

const Drag = props => {
  return <div className={props.className}>{props.children}</div>;
};

const Comp = styled.div`
  // $color は styled component のみで有効
  color: ${props => props.$color || 'black'};
`;

const Comp2 = styled.div
  .withConfig({
    // true を返す prop だけ有効にする（生成される　DOM に渡した props が属性として付く。もしくは React コンポーネントに props として渡される。）
    // 今回の場合、 hidden 以外の HTML 属性が有効になる。
    shouldForwardProp: (prop, defaultValidatorFn) =>
      // defaultValidatorFn は prop が HTML属性（https://developer.mozilla.org/ja/docs/Web/HTML/Attributes）かどうかを判定する関数
      // prop が HTML 属性だと true になる。
      !['hidden'].includes(prop) && defaultValidatorFn(prop),
  })
  .attrs({ className: 'foo' })`
  color: red;
  &.foo {
    text-decoration: underline;
  }
`;

export const StyledComponent = () => {
  return (
    <>
      <Input small placeholder="Small" />
      <Input placeholder="Normal" />
      <Input padding="2em" placeholder="Padded" />
      <hr />
      {/* as を指定することで、スタイルを保ったまま、コンポーネントを別の要差やコンポーネントに切り替えることが可能。 */}
      <Component as="button" onClick={() => alert('It works!')}>
        Hello World!
      </Component>
      <hr />
      {/* $ をつけた 生成される DOM には渡されない。
      そのため、以下のように生成される DOM には color 属性は付かない。
      <div draggable="true" class="sc-fzoKki dGimUG">Drag me!</div> */}
      <Comp $color="red" draggable="true">
        Drag me!
      </Comp>
      {/* $ をつけた props 元になる React コンポーネントには渡されない。
      この Comp コンポーネントは、as を利用して Drag コンポーネントに切り替えているが、
      Drag コンポーネントには $color は渡されない。*/}
      <Comp as={Drag} $color="red" draggable="true">
        Drag me!
      </Comp>
      <hr />
      <Comp2 hidden draggable="true">
        Comp2
      </Comp2>
    </>
  );
};
