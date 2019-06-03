import { init } from "@rematch/core";

const initState = {
	state: {
		work_time: '00:20',
		work_sum: '00:20',
		prepare: '00:10',
		rest: '00:10',
		rest_between_cycles: '00:59',
		cycles: '1',
		rounds: '1',
	},
	
}

export const store = init({
	models: { initState },
});
