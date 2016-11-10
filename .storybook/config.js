const Storybook = require('@kadira/storybook');
const Knobs = require('@kadira/storybook-addon-knobs');

window.Storybook = Storybook;

Storybook.addons = {
  Knobs,
};

function loadStories() {
  require('../stories/index.js');
}

Storybook.configure(loadStories, module);
