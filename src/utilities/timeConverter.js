export default function timeConverter(arg) {

	let minutes = Math.floor(arg / 60)
	let seconds = arg - 60 * minutes

	if ( seconds < 10 ) {
		seconds = `0${seconds}`
	}

	if ( minutes < 10 ) {
		minutes = `0${minutes}`
	}

	return (`${minutes}:${seconds}`)
}

/*
Prepare:  00:10 -> float
Work time:  00:20 -> float
Rest: 00:10 -> float
Rest between cycles: 00:59 -> float
Cycles: int
Rounds: int
 */