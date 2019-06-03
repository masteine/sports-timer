import React from 'react'
import ControlButton from '../ControlButton/Index'
import OptionStatus from '../OptionStatus/Index'
import './Index.sass'

function ControlBar() {
	return (
		<div className="control-bar">
			<OptionStatus/>
			{optionBtnArray.map(i =>
				<ControlButton key={i.name.toLowerCase().split(' ').join('')} props={i}/>
			)}
		</div>
	);
}

const optionBtnArray = [
	{
		id: 1,
		name: 'Prepare',
		time: true
	},
	{
		id: 2,
		name: 'Work',
		time: true
	},
	{
		id: 3,
		name: 'Rest',
		time: true
	},
	{
		id: 4,
		name: 'Rest between round',
		time: true
	},
	{
		id: 5,
		name: 'Cycles',
		time: false
	},
	{
		id: 6,
		name: 'Round',
		time: false
	}
]

export default ControlBar

