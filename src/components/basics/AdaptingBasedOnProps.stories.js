import React from 'react';

import { AdaptingBasedOnProps } from './AdaptingBasedOnProps';

export default {
  title: 'Basics/AdaptingBasedOnProps',
  component: AdaptingBasedOnProps,
};

const Template = args => <AdaptingBasedOnProps {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: false,
  label: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
