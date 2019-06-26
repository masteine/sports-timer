import timeConverter from '../../utilities/timeConverter'

// count model
export default {
	state: {
		work_time: '00:20',
		work_sum: '03:50',
		prepare: '00:10',
		rest: '00:10',
		rest_between_cycles: '00:30',
		cycles: '8',
		rounds: '1',
	},
	reducers: {
		changeValue(state, payload) {

			function reCountStateValue() {
				let workSummary, workTime, rest;
				workTime = Number(state.work_time.split(':').join(''))
				rest = Number(state.rest.split(':').join(''))
				workSummary = (workTime * state.rounds * state.cycles) + (rest * (state.rounds * state.cycles - 1))
				state.work_sum = timeConverter(workSummary)
			}

			for ( let i in state ) {
				// loop function for string-number with ":"
				if ( i !== 'cycles' && i !== 'rounds' ) {
					let stateMemo
					if ( payload.e.target.id === 'down' ) {
						stateMemo = Number(
							state[i].split(':').join('')) - payload.countStepDefault
						if ( stateMemo === 0 ) {
							stateMemo = 1
						}
					}
					else {
						stateMemo = Number(
							state[i].split(':').join('')) + payload.countStepDefault
					}
					if ( i === payload.itemName ) {
						let stringValue = stateMemo.toString()
						let stringViewValue

						if ( stringValue.length === 1 ) {
							stringViewValue = `00:0${stringValue}`
						}
						if ( stringValue.length === 2 ) {
							if ( Number(stringValue) > 59 ) {
							}
							stringViewValue = `00:${stringValue}`
						}
						if ( stringValue.length === 3 ) {
							stringViewValue = `${stringValue}`
						}

						state[i] = stringViewValue

						reCountStateValue()

						return state = { ...state }
					}
					// loop function for number
				}
				else {
					if ( i === payload.itemName ) {
						if ( payload.e.target.id === 'down' ) {
							state[i] = Number(state[i]) - payload.countStepDefault
							if ( state[i] === 0 ) {
								state[i] = 1
							}
						}
						else {
							state[i] = Number(state[i]) + payload.countStepDefault
						}

						reCountStateValue()

						return state = { ...state }
					}
				}
			}
		},
	},
}
