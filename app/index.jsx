import React from 'react';
import { render } from 'react-dom';
import App from './App';

// plugins
require('./plugins/highlight/atom-one-dark.css');
// styles
require('./styles.css');

render(<App />, document.getElementById('root'));
