import { init } from "@rematch/core";

const initState = {
	state: {
		work_time: '00:20',
		cycles: '1',
		rounds: '1'
	},
	reducers: {},
	effects: {}
}

export const store = init({
	models: { initState },
});
