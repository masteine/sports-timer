import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { init } from '@rematch/core'

import App from './components/App/App'

import initState from './components/ControlButton/models'

import './index.css'

const store = init({
	models: {
		initState
	}
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
