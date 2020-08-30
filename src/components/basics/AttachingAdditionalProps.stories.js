import React from 'react';

import { AttachingAdditionalProps } from './AttachingAdditionalProps';

export default {
  title: 'Basics/AttachingAdditionalProps',
  component: AttachingAdditionalProps,
};

const Template = args => <AttachingAdditionalProps {...args} />;

export const Default = Template.bind({});
