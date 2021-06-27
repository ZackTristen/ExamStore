import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/error-boundary';
import withServiceGame from '../src/components/hoc/withService'


ReactDOM.render(
    <App />,
    document.getElementById('root')
);


