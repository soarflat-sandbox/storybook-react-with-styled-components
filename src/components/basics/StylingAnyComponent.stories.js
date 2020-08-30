import React from 'react';

import { StylingAnyComponent } from './StylingAnyComponent';

export default {
  title: 'Basics/StylingAnyComponent',
  component: StylingAnyComponent,
};

const Template = args => <StylingAnyComponent {...args} />;

export const Default = Template.bind({});
