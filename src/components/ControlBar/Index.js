import React from 'react'
import { connect } from 'react-redux'

import { optionBtnArray } from './optionButton'
import ControlButton from '../ControlButton/Index'
import OptionStatus from '../OptionStatus/Index'

import './Index.sass'

function ControlBar(props) {
	let itemValue = props.state

	return (
		<div className="control-bar">
			<OptionStatus />
			{optionBtnArray.map(item => (
				<ControlButton
					key={item.name
						.toLowerCase()
						.split(' ')
						.join('_')}
					item={item}
					itemValue={itemValue}
				/>
			))}
		</div>
	)
}

const mapState = state => ({
	state: state.initState
})

export default connect(mapState)(ControlBar)
