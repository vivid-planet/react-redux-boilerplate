import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';

export default function createMiddelwares() {
    const middlewares = [];

    // thunk
    middlewares.push(thunk);

    // Router
    middlewares.push(routerMiddleware(hashHistory));

    // no logging
    // use redux dev tools instead https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=de 

    return middlewares;
}
