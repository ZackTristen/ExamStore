import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app/App';
import ErrorBoundry from './components/error-boundary/error-boundary';
import ServiceGame from './services/service'
import { StoreServiceProvider } from './components/store-service-context/store-service-context';

import store from './store';

const serviceGame = new ServiceGame();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServiceProvider value={serviceGame}>
                <Router>
                    <App />
                </Router>
            </StoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);


