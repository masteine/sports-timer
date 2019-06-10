import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { InputMask } from 'primereact/inputmask'

import './Index.sass'

class ControlButton extends Component {
	//
	// function addCount(e, valName) {
	// 	console.log(valName)
	// 	if (e.target.id === 'down') {
	// 		setValue(value - 1)
	// 	} else {
	// 		setValue(value + 1)
	// 	}
	// }

	render() {
		console.log(this.props)

		const label = this.props.item.name
		const valueType = this.props.item.time
		const itemValue = this.props.store
		const itemName = this.props.item.name
			.toLowerCase()
			.split(' ')
			.join('_')

		const { addCountAction } = this.props
		let val
		// convert value from string to  number
		for (let i in itemValue) {
			if (i === itemName) {
				val = itemValue[i]
				// for time with ":"
				if (valueType) {
					val = val.split(':').join('')
				}
				// for int
				if (i !== valueType) {
					val = Number(val)
				}
			}
		}

		return (
			<div className="control-button">
				<label>{label}: </label>
				<button id="down" onClick={addCountAction}>
					{' '}
					-{' '}
				</button>
				<label className="btn-s">{val}</label>
				<button id="up" onClick={addCountAction}>
					{' '}
					+{' '}
				</button>
			</div>
		)
	}
}

const mapState = state => ({
	store: state.initState
})

const mapDispatch = ({ initState: addCount }) => ({
	addCountAction: () => addCount()
})

export default connect(
	mapState,
	mapDispatch
)(ControlButton)
