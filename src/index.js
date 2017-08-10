import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <Route path="/" component={App} />
  </Router>, document.getElementById('root'));
registerServiceWorker();
