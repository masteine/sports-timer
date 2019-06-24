import React from 'react'
import './Index.sass'
import { connect } from 'react-redux'

const OptionStatus = props => {
	return (
		<div className="option-status">
			<ul>
				<li>
					Summary work time: <span>{props.work_sum}</span>
				</li>
				<li>
					Rounds: <span>{props.rounds}</span>
				</li>
				<li>
					Cycles: <span>{props.cycles}</span>
				</li>
			</ul>
		</div>
	)
}

const mapState = state => ({
	rounds: state.timerOption.rounds,
	cycles: state.timerOption.cycles,
	work_sum: state.timerOption.work_sum
})

export default connect(mapState)(OptionStatus)
