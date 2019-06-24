let second = 60
let minutes = second / 60

let currentTime

function startTimer(time) {
	for (let i = 1; time < 1; i++) {
		currentTime = time - 1
		console.log(currentTime)
	}
}

startTimer(55)
