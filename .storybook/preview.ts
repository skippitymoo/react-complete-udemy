import type { Preview } from '@storybook/react';

import '../src/sass/main.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// The global.process check ensures Storybook doesn’t attempt to activate the Service Worker in a non-browser environment, as preview.js also gets executed during the Storybook build that runs in Node.js.
if (typeof global.process === 'undefined') {
  const { worker } = require('../src/shared/mocks/msw/browser');
  worker.start();
}

export default preview;
