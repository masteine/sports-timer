import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from "react-redux";
import {store} from "./components/TimerTable/models";

import App from './components/App/App';

import './index.css';



ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));


