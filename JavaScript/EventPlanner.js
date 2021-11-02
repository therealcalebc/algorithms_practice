class Event {
	constructor(arrive, duration) {
		this.start = arrive;
		this.end = arrive + duration;
		this.after = [];
		this.numAfter = 0;
	}
	addAfter(event) {
		let added = false;
		// let replaced = false;
		for (let i = 0; i < this.after.length; i++) {
			if (event.start >= this.after[i].end) {
				this.after[i].addAfter(event);
				if (this.numAfter <= this.after[i].numAfter)
					this.numAfter = this.after[i].numAfter + 1;
				added = true;
			}
			// else if (this.after[i].start >= event.end) {
			// 	event.addAfter(this.after[i]);
			// 	// if(this.after[i].numAfter >= event.numAfter)
			// 	// 	event.numAfter = this.after[i].numAfter + 1;
			// 	if (event.numAfter >= this.numAfter) this.numAfter = event.numAfter + 1;
			// 	if (!replaced) this.after[i] = event;
			// 	else {
			// 		for (let j = i + 1; j < this.after.length; j++) {
			// 			this.after[j - 1] = this.after[j];
			// 		}
			// 		this.after.pop();
			// 	}
			// 	replaced = true;
			// }
			else if (event == this.after[i]) {
				added = true;
				break;
			}
		}
		// if (!added && !replaced) {
		if (!added) {
			this.after.push(event);
			if (this.numAfter <= event.numAfter) this.numAfter = event.numAfter + 1;
			console.log(this);
		}
	}
	printChain() {
		console.log(this);
		if (this.after.length > 0) {
			let mostAfter = 0;
			for (let i = 1; i < this.after.length; i++) {
				if (this.after[i].numAfter > this.after[mostAfter].numAfter) mostAfter = i;
			}
			this.after[mostAfter].printChain();
		}
	}
}
const maxEvents = (arrive, duration) => {
	const events = [];
	for (let i = 0; i < arrive.length; i++) events.push(new Event(arrive[i], duration[i]));
	events.sort((a, b) => a.start - b.start);
	console.log("\nevents:");
	console.log(events);
	console.log("\n***CHAINING***\n");
	const first = new Event(-1, 1);
	for (let i = 0; i < events.length; i++) first.addAfter(events[i]);

	// const first = [];
	// for (let i = 0; i < arrive.length; i++) {
	// 	const newEvent = new Event(arrive[i], duration[i]);
	// 	let added = false;
	// 	let replaced = false;
	// 	for (let j = 0; j < first.length; j++) {
	// 		if (newEvent.start >= first[j].end) {
	// 			first[j].addAfter(newEvent);
	// 			added = true;
	// 		} else if (first[j].start >= newEvent.end) {
	// 			// if(first[j].numAfter >= newEvent.numAfter)
	// 			// 	newEvent.numAfter = first[j].numAfter + 1;
	// 			newEvent.addAfter(first[j]);
	// 			if (!replaced) {
	// 				first[j] = newEvent;
	// 			} else {
	// 				for (let k = j + 1; k < first.length; k++) first[k - 1] = first[k];
	// 				first.pop();
	// 			}
	// 			replaced = true;
	// 		}
	// 	}
	// 	if (!added && !replaced) first.push(newEvent);
	// }
	// let max = 0;
	// for (let i = 0; i < first.length; i++) {
	// 	if (first[i].numAfter >= max) max = first[i].numAfter + 1;
	// }
	console.log("\n***************");
	console.log("\nfirst:");
	// console.log(first);
	first.printChain();
	console.log("\noutput:");
	return first.numAfter;
};
let arrLen = 10;
const arrivalTimes = new Array(arrLen);
const durationTimes = new Array(arrLen);
for (let i = 0; i < arrLen; i++) {
	arrivalTimes[i] = Math.floor(Math.random() * 100) + 1;
	durationTimes[i] = Math.floor(Math.random() * 20) + 1;
}
console.log("\narrivalTimes:");
console.log(arrivalTimes);
console.log("\ndurationTimes:");
console.log(durationTimes);
// console.log("\noutput:");
console.log(maxEvents(arrivalTimes, durationTimes));
