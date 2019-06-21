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
		<button className={props.timer_status === 'pause' ? 'btn-start-timer' +
			' pause' : 'btn-start-timer start'}
			onClick={props.timerStatus} >
			<figure></figure>
		</button>
	</div>)
}

const mapState = state => ({
	rounds: state.initState.rounds,
	cycles: state.initState.cycles,
	work_time: state.initState.work_time,
	timer_status: state.initState.timerStatus
})

const mapDispatch = dispatch => ({
	timerStatus: () => dispatch.timerStatus,
})

export default connect(mapState, mapDispatch)(TimerTable)
