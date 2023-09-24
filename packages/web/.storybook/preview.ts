import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from '../src/styles';

import { initialize, mswLoader } from 'msw-storybook-addon';
import { rest } from 'msw';
import users from '../src/test/mocks/users.json';

initialize({
  onUnhandledRequest: 'bypass'
});

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles
  })
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    msw: {
      handlers: {
        users: [
          rest.get('/api/users', (req, res, ctx) => {
            return res(ctx.json(users));
          })
        ]
      }
    }
  },
  loaders: [mswLoader]
};

export default preview;
