import React from 'react'
import { connect } from "react-redux";

import './Index.sass'

const TimerTable = props => (
	<div className="timer-table">
		<div className="work-time">
			<h2>
				{props.work_time}
			</h2>
			<p>
				Work time
			</p>
		</div>
		<div className="work-cycles">
			<h4>
				{props.rounds}
			</h4>
			<p>
				Rounds
			</p>
		</div>
		<div className="work-rounds">
			<h4>
				{props.cycles}
			</h4>
			<p>
				Cycles
			</p>
		</div>
	</div>
);

const mapState = state => ({
	rounds: state.initState.rounds,
	cycles: state.initState.cycles,
	work_time: state.initState.work_time,
});

export default connect(mapState)(TimerTable);
