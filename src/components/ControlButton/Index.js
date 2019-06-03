import React, { useState } from 'react'
import { InputMask } from 'primereact/inputmask'
import './Index.sass'

function ControlButton({ props }) {
	const label = props.name
	const valueType = props.time
	
	const [value, setValue] = useState(0);

	return (
		<div className="control-button">
			<label>{label}: </label>
			<button	onClick={() => setValue(value - 1)}> - </button>
			<InputMask className="btn-s"
			           mask={valueType ? "00:00" : "0"} />
			<button onClick={() => setValue(value + 1)}> + </button>
		</div>
	);
}

export default ControlButton;
