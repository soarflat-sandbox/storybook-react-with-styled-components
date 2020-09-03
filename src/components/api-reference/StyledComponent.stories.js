import React from 'react';

import { StyledComponent } from './StyledComponent';

export default {
  title: 'APIReference/Primary/StyledComponent',
  component: StyledComponent,
};

const Template = args => <StyledComponent {...args} />;

export const Default = Template.bind({});
