import React from 'react';

import { PassedProps } from './PassedProps';

export default {
  title: 'Basics/PassedProps',
  component: PassedProps,
};

const Template = args => <PassedProps {...args} />;

export const Default = Template.bind({});
