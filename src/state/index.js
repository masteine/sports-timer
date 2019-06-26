import { init } from '@rematch/core'

import timerOption from '../components/ControlButton/models'
import timerState from '../components/TimerTable/models'

export const store = init({
	models: {
		timerOption,
		timerState
	},
})

store.subscribe(() => {
	//console.log(store.getState())
})


