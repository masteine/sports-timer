import React from 'react'
import { connect } from 'react-redux'

import './Index.sass'


function TimerTable(props) {

	return (<div className="timer-table">
		<div className="work-time">
			<h2>{props.work_time}</h2>
			<p>Work time</p>
		</div>
		<div className="work-cycles">
			<h4>{props.cycles}</h4>
			<p>Rounds</p>
		</div>
		<div className="work-rounds">
			<h4>{props.rounds}</h4>
			<p>Cycles</p>
		</div>
		<button className={props.timer_status ?
			'btn-start-timer' +
			' start' : 'btn-start-timer pause'}
		        onClick={props.changeTimerStatus()}>
			<figure></figure>
		</button>
	</div>)
}

const mapState = state => ({
	rounds: state.timerOption.rounds,
	cycles: state.timerOption.cycles,
	work_time: state.timerOption.work_time,
	timer_status: state.timerState.timerState,
})

const mapDispatch = ({ timerState: { timerStatus } }) => ({
	changeTimerStatus: () => timerStatus,
})

export default connect(mapState, mapDispatch)(TimerTable)
