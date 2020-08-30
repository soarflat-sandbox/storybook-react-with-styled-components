import React from 'react';

import { ExtendingStyles } from './ExtendingStyles';

export default {
  title: 'Basics/ExtendingStyles',
  component: ExtendingStyles,
};

const Template = args => <ExtendingStyles {...args} />;

export const Default = Template.bind({});
