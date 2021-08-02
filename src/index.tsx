import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import './index.scss';
import App from './App';


import rootSaga from './redux/sagas/rootSagas';
import { rootReducer } from './redux/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Route path="/" component={App} />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);