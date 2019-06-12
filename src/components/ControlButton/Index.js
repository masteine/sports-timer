import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { InputMask } from 'primereact/inputmask'

import './Index.sass'

class ControlButton extends Component {
	
	
	render() {
		const label = this.props.item.name
		const valueType = this.props.item.time
		const itemValue = this.props.store
		const itemName = this.props.item.name
			.toLowerCase()
			.split(' ')
			.join('_')
		
		const { changeValueAction } = this.props
		
		let val
		let countStepDefault = 1
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
				<>
					<button id="down"
					        onClick={(e) => changeValueAction({
						        countStepDefault,
						        itemName,
						        e
					        })}>
						{' '}
						-{' '}
					</button>
					<label className="btn-s">{val}</label>
					<button id="up"
					        onClick={(e) => changeValueAction({
						        countStepDefault,
						        itemName,
						        e
					        })}>
						{' '}
						+{' '}
					</button>
				</>
			</div>
		)
	}
}

const mapState = state => ({
	store: state.initState
})

const mapDispatch = ({ initState: { changeValue } }) => ({
	changeValueAction: ({ countStepDefault, itemName, e }) => changeValue({
		countStepDefault,
		itemName,
		e
	})
})

export default connect(
	mapState,
	mapDispatch
)(ControlButton)
