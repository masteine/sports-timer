import React from 'react'

import { optionBtnArray } from './optionButton'
import ControlButton from '../ControlButton/Index'
import OptionStatus from '../OptionStatus/Index'

import './Index.sass'

function ControlBar() {
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
				/>
			))}
		</div>
	)
}

export default ControlBar
