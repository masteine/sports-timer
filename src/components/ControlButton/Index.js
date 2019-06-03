import React, { useState } from 'react'
import { InputMask } from 'primereact/inputmask'
import './Index.sass'

function ControlButton({ props }) {
	const init = props.init
	const name = props.label
	const [value, setValue] = useState(init);
	
	return (
		<div className="control-button">
			<label>{name}: </label>
			<button onClick={() => setValue(value + 1)}> + </button>
			<InputMask className="btn-s"
			           mask="00:00"   />
			<button	onClick={() => setValue(value + 1)}> - </button>
		</div>
	);
}

export default ControlButton;
