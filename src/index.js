import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './state/index';

import App from './components/App/App';

//import Timer from './utilities/timer'

import './index.css';

ReactDOM.render(<Provider store={store}>
	<App/>
</Provider>, document.getElementById('root'));
