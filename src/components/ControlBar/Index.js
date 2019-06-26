import React from 'react'
import { connect } from 'react-redux'

import { optionBtnArray } from './optionButton'
import ControlButton from '../ControlButton/Index'
import OptionStatus from '../OptionStatus/Index'

import './Index.sass'


function ControlBar(props) {
	const timerState = props.timerState
	return (
		<div className={timerState ? 'control-bar disable' : 'control-bar '}>
			<OptionStatus/>
			{optionBtnArray.map(item => (
				<ControlButton
					key={item.name
					.toLowerCase()
					.split(' ')
					.join('_')}
					item={item}
				/>
			))}
		</div>
	)
}

const mapState = state => ({
	timerState: state.timerState.timerState,
})

export default connect(
	mapState,
)(ControlBar)