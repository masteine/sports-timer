import React from 'react'
import './Index.sass'
import { connect } from 'react-redux'

const OptionStatus = props => {
	return (
		<div className="option-status">
			<ul>
				<li>Summary work time: <span>1:25</span></li>
				<li>Rounds: <span>{props.rounds}</span></li>
				<li>Cycles: <span>{props.cycles}</span></li>
			</ul>
		</div>
	);
}

const mapState = state => ({
	rounds: state.initState.rounds,
	cycles: state.initState.cycles,
	work_sum: state.initState.work_sum,
});

export default connect(mapState)(OptionStatus);

