// count model
export default {
	state: {
		work_time: '00:20',
		work_sum: '00:20',
		prepare: '00:10',
		rest: '00:10',
		rest_between_cycles: '01:00',
		cycles: '8',
		rounds: '1'
	},
	reducers: {
		addCount() {}
	}
	// effects: dispatch => ({
	// 	async addByAsync(payload, state) {
	// 		dispatch.count.addBy(1)
	// 	}
	// })
}
