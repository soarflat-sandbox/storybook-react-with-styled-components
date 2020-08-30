import React from 'react';

import { ComingFromCss } from './ComingFromCss';

export default {
  title: 'Basics/ComingFromCss',
  component: ComingFromCss,
};

const Template = args => <ComingFromCss {...args} />;

export const Default = Template.bind({});
