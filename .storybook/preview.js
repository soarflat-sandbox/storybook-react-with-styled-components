export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Basics',
        [
          'GettingStarted',
          'AdaptingBasedOnProps',
          'ExtendingStyles',
          'StylingAnyComponent',
          'PassedProps',
          'ComingFromCss',
          'AttachingAdditionalProps',
          'Animations',
        ],
        'Advanced',
        [
          'Theming',
          'FunctionThemes',
          'GettingTheThemeViaUseContext',
          'Ref',
          'Security',
          'ExistingCss',
          'TaggedTemplateLiterals',
          'ReferringToOtherComponents',
          'StyleObjects',
        ],
        'APIReference',
        [
          'Primary',
          ['Styled', 'TaggedTemplateLiteral', 'StyledComponent'],
          'Helpers',
          [
            'CreateGlobalStyle',
            'Css',
            'Keyframes',
            'StyleSheetManager',
            'IsStyledComponent',
            'WithThemeAndThemeConsumer',
          ],
        ],
      ],
    },
  },
};
