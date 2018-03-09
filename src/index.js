import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import configureStore from './store';

function initApp(config = {}) {
    const initialState = {};
    const store = configureStore(initialState, config);
    const history = syncHistoryWithStore(hashHistory, store);
    ReactDOM.render(<App config={config} store={store} history={history} />, document.getElementById('root'));
    registerServiceWorker();
}

initApp();
