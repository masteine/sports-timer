import React from 'react'

import Header from './Header/Index'
import ControlBar from './ControlBar/Index'
import TimerTable from './TimerTable/Index'

import './App.sass'


function App() {
	return (
		<div className="main p-grid">
			<Header/>
			<TimerTable/>
			<ControlBar/>
		</div>
	);
}

export default App;
