import React, { useState } from 'react'
import { InputMask } from 'primereact/inputmask'
import './Index.sass'

function ControlButton({ item, itemValue }) {
	const label = item.name
	const valueType = item.time
	const itemName = item.name
		.toLowerCase()
		.split(' ')
		.join('_')

	let val

	for (let i in itemValue) {
		if (i === itemName) {
			val = itemValue[i]
			if (valueType) {
				val = val.slice(2, '')
			}
		}
	}

	console.log(val)
	const [value, setValue] = useState(0)

	return (
		<div className="control-button">
			<label>{label}: </label>
			<button onClick={() => setValue(value - 1)}> - </button>
			{/* <InputMask
				className="btn-s"
				mask={valueType ? '00:00' : '0'}
				value={value}
				onChange={e => setValue({ value: e.value })}
			/> */}
			<button onClick={() => setValue(value + 1)}> + </button>
		</div>
	)
}

export default ControlButton
