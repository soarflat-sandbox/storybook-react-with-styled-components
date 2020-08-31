import React from 'react';

import { TaggedTemplateLiterals } from './TaggedTemplateLiterals';

export default {
  title: 'Advanced/TaggedTemplateLiterals',
  component: TaggedTemplateLiterals,
};

const Template = args => <TaggedTemplateLiterals {...args} />;

export const Default = Template.bind({});
