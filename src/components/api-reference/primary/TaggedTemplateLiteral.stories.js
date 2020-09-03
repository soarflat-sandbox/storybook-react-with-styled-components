import React from 'react';

import { TaggedTemplateLiteral } from './TaggedTemplateLiteral';

export default {
  title: 'APIReference/Primary/TaggedTemplateLiteral',
  component: TaggedTemplateLiteral,
};

const Template = args => <TaggedTemplateLiteral {...args} />;

export const Default = Template.bind({});
