// count model
export default {
	state: {
		timerState: false,
	},
	reducers: {
		timerStatus(state) {
			if ( !state.timerState ) {
				return state = { ...state, timerState: true }
			}
			else {
				return state = { ...state, timerState: false }
			}
		},
	},
}
