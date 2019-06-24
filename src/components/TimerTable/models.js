// count model
export default {
	state: {
		timerState: 'pause'
	},
	reducers: {
		timerStatus(state, payload) {
			console.log(payload, '1')
			return state = { ...state }
		},
	},
}
