import { init } from "@rematch/core";

const initState = {
	state: {
		work_sum: '00:20',
	},
	reducers: {},
	effects: {}
}

export const store = init({
	models: { initState },
});
