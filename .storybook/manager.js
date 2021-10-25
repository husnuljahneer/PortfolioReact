import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://raw.githubusercontent.com/husnuljahneer/Portfolio/master/logo.png',
    brandTitle: 'Husnul Jahaneer Components',
    brandUrl: 'https://jahneer.ninja',
  },
});
