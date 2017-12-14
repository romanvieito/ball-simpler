import { configure } from '@storybook/react';

// By importing your application's CSS here, we ensure it's included for each story
// import 'http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
