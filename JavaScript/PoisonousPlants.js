/**
 * There are a number of plants in a garden. Each of the plants has been treated with some amount of pesticide. After each day, if any plant has more pesticide than the plant on its left, being weaker than the left one, it dies.
 * You are given the initial values of the pesticide in each of the plants. Determine the number of days after which no plant dies, i.e. the time after which there is no plant with more pesticide content than the plant to its left.
 * Example:
 * p = [3,6,2,7,5] //pesticide levels
 * Considering p as a 1-indexed array...
 * On day 1, plants 2 and 4 die leaving p' = [3,2,5]. On day 2, plant 3 in p' dies leaving p" = [3,2]. There is no plant with a higher concentration of pesticide than the one to its left, so plants stop dying after day 2.
 * Constraints:
 * 1 <= n <= 10^5 //number of plants (length of array p)
 * 0 <= p[i] <= 10^9
 */

/**
 * @param {number[]} p - list of pesticide levels of plants
 * @returns {number} - number of days that have past
 */

//my original attempt (recursive solution)
// function poisonousPlants(p = []) {
// 	if (p.length < 2) return 0;
// 	const remaining = [p[0]];
// 	let someDied = false;
// 	for (let i = 0; i < p.length - 1; i++) {
// 		const j = i + 1;
// 		if (p[j] <= p[i]) {
// 			remaining.push(p[j]);
// 		} else someDied = true;
// 	}
// 	if (someDied) {
// 		return poisonousPlants(remaining) + 1;
// 	}
// 	return 0;
// }

//my second attempt ('while' replacement of recursive)
// function poisonousPlants(p = []) {
// 	let days = 0;
// 	if (p.length > 1) {
// 		let someDied = true;
// 		while (someDied) {
// 			someDied = false;
// 			const remaining = [p[0]];
// 			for (let i = 0; i < p.length - 1; i++) {
// 				const j = i + 1;
// 				if (p[j] <= p[i]) {
// 					remaining.push(p[j]);
// 				} else someDied = true;
// 			}
// 			if (someDied) {
// 				p = remaining;
// 				days++;
// 			} else break;
// 		}
// 	}
// 	return days;
// }

//my third attemp
// function poisonousPlants(p = []) {
// 	if (p.length < 2) return 0;
// 	const dayDied = new Array(p.length);
// 	// dayDied.fill(0);
// 	dayDied[0] = 0;
// 	let maxDay = 0;
// 	for (let i = 1; i < p.length; i++) {
// 		dayDied[i] = 0;
// 		if (p[i] > p[i - 1]) dayDied[i] = 1;
// 		else {
// 			let tempMaxDay = dayDied[i - 1];
// 			for (let j = i - 2; j >= 0; j--) {
// 				if (dayDied[j] > tempMaxDay) tempMaxDay = dayDied[j];
// 				if (p[i] > p[j]) {
// 					dayDied[i] = tempMaxDay + 1;
// 					break;
// 				}
// 			}
// 		}
// 		if (dayDied[i] > maxDay) maxDay = dayDied[i];
// 	}
// 	return maxDay;
// }

//my fourth attempt (incomplete)
// function poisonousPlants(p = []) {
// 	if (p.length < 2) return 0;
// 	const findNextSmallest = (start = 1, end = p.length) => {
// 		for (let i = start; i < end; i++) {
// 			if (p[i] < p[start - 1]) return i;
// 		}
// 		return end;
// 	};
// 	const findFirstDeath = (start = 0, end = p.length) => {
// 		for (let i = start + 1; i < end; i++) {
// 			if (p[i] > p[i - 1]) return i;
// 		}
// 		return end;
// 	};
// 	const countDays = (start = 1, end = p.length) => {
// 		let days = 1;
// 		for (let i = start; i < end; i++) {
// 			if (p[i] > p[i - 1]) continue;
// 			days++;
// 		}
// 		return days;
// 	};
// 	let maxDays = 0;
// 	let firstDeath = findFirstDeath() - 1;
// 	if ((firstDeath = p.length - 1)) return 0;
// 	for (let i = firstDeath; i < p.length; i++) {
// 		// if(p[i] > p[i-1]) {
// 		// 	if(maxDays === 0) maxDays = 1;
// 		// 	continue;
// 		// }
// 		// live = i;
// 		// const start = i;
// 		const nextSmallest = findNextSmallest(i);
// 		const tempDays = countDays(i, nextSmallest);
// 		if (tempDays > maxDays) maxDays = tempDays;
// 		i = findFirstDeath(nextSmallest);
// 		// if(p[i] < p[live]) {
// 		// 	const tempDays = countDays(live + 1, i);
// 		// 	if(tempDays > maxDays) maxDays = tempDays;
// 		// }
// 	}
// 	// if(live < p.length - 1) {
// 	// 	const tempDays = countDays(live + 1, p.length);
// 	// 	if (tempDays > maxDays) maxDays = tempDays;
// 	// }
// 	return maxDays;
// }

//my fifth attempt
// function poisonousPlants(p = []) {
// 	console.log(`\npoisonousPlants([${p}])`);
// 	if (p.length < 2) return 0;
// 	const getDupCount = (start = 1) => {
// 		let count = 1;
// 		for (let i = start; i < p.length; i++) {
// 			if (p[i] === p[i - 1]) count++;
// 			else break;
// 		}
// 		return count;
// 	};
// 	const findFirstDeath = (start = 1) => {
// 		console.log(` findFirstDeath(${start})`);
// 		for (let i = start; i < p.length; i++) {
// 			if (p[i] > p[i - 1]) return i;
// 		}
// 		return p.length;
// 	};
// 	let lastLive = findFirstDeath() - 1;
// 	console.log(` lastLive: ${lastLive}, p.length: ${p.length}`);
// 	if (lastLive === p.length - 1) return 0;
// 	let maxDays = 0;
// 	let tempDays = 1;
// 	console.log(" tempDays:", tempDays, `p[${lastLive}]: ${p[lastLive]}`);
// 	for (let i = lastLive + 1; i < p.length; i++) {
// 		console.log(` p[${i}]: ${p[i]}`);
// 		if (p[i] > p[i - 1]) {
// 			continue;
// 		} else if (p[i] === p[i - 1]) {
// 			const dupCount = getDupCount(i);
// 			console.log(" dupCount:", dupCount);
// 			if (dupCount > tempDays) tempDays = dupCount;
// 			i += dupCount - 2;
// 		} else if (p[i] > p[lastLive]) tempDays++;
// 		else {
// 			if (tempDays > maxDays) {
// 				maxDays = tempDays;
// 				console.log(" maxDays:", maxDays);
// 			}
// 			lastLive = findFirstDeath(i + 1) - 1;
// 			console.log(` p[${lastLive}]: ${p[lastLive]}`);
// 			if (lastLive === p.length - 1) break;
// 			i = lastLive;
// 			tempDays = 1;
// 		}
// 		console.log(" tempDays:", tempDays);
// 	}
// 	if (tempDays > maxDays) return tempDays;
// 	return maxDays;
// }

//my 6th (/6.5th) attempt, passed
// function poisonousPlants(p = []) {
// 	console.log();
// 	console.log(p);
// 	if (p.length < 2) return 0;

// 	const findFirstDeath = (start = 1) => {
// 		// console.log(` findFirstDeath(${start})`);
// 		for (let i = start; i < p.length; i++) {
// 			if (p[i] > p[i - 1]) return i;
// 		}
// 		return p.length;
// 	};

// 	let lastLive = findFirstDeath() - 1;
// 	const lastP = p.length - 1;
// 	// console.log(` lastLive: ${lastLive}, lastP: ${lastP}`);
// 	if (lastLive === lastP) return 0;

// 	let maxDays = 1;
// 	let willDie = [];
// 	let i = lastLive;
// 	// console.log(` p[${lastLive}]: ${p[lastLive]}`);
// 	while (++i < lastP) {
// 		const x = p[i];
// 		const y = p[i + 1];
// 		if (y > x) continue;
// 		if (y < p[lastLive]) {
// 			const tempDays = willDie.length + 1;
// 			if (tempDays > maxDays) maxDays = tempDays;
// 			lastLive = findFirstDeath(i + 1) - 1;
// 			if (lastLive === lastP) return maxDays;
// 			i = lastLive;
// 			willDie = [];
// 		} else {
// 			let push = true;
// 			for (let j = 0; j < willDie.length; j++) {
// 				const temp = willDie[j];
// 				willDie[j] = y;
// 				if (y > temp) {
// 					push = false;
// 					break;
// 				}
// 			}
// 			if (push) {
// 				willDie.push(y);
// 				if (p[i + 2] < y && p[i + 2] > p[lastLive]) {
// 					const c = p[lastLive];
// 					let d = willDie.length + 2;
// 					let k = i + 2;
// 					for (; k < p.length - 1; k++) {
// 						if (p[k] > p[k + 1] && p[k + 1] > c) d++;
// 						else break;
// 					}
// 					if (d > p.length - k) {
// 						if (d > maxDays) return d;
// 						else return maxDays;
// 					}
// 				}
// 			}
// 		}

// 		// // console.log(` p[${i}]: ${p[i]}, p[${i + 1}]: ${p[i + 1]}`);
// 		// if (p[i + 1] > p[i]) continue;
// 		// if (p[i + 1] < p[lastLive]) {
// 		// 	const tempDays = willDie.length + 1;
// 		// 	// console.log(" tempDays:", tempDays);
// 		// 	if (tempDays > maxDays) {
// 		// 		maxDays = tempDays;
// 		// 		// console.log(" maxDays: ", maxDays);
// 		// 	}
// 		// 	lastLive = findFirstDeath(i + 1) - 1;
// 		// 	// console.log(` p[${lastLive}]: ${p[lastLive]} (lastLive)`);
// 		// 	if (lastLive === lastP) return maxDays;
// 		// 	i = lastLive;
// 		// 	willDie = [];
// 		// } else {
// 		// 	if (willDie.length > 0) {
// 		// 		for (let j = 0; j < willDie.length; j++) {
// 		// 			// const last = willDie[j].length - 1;
// 		// 			// const temp = willDie[j][last];
// 		// 			// console.log(` willDie[${j}][${last}]: ${temp}`);
// 		// 			willDie[j].push(i + 1);
// 		// 			if (p[i + 1] > p[willDie[j][willDie[j].length - 2]]) break;
// 		// 		}
// 		// 		if (
// 		// 			willDie[willDie.length - 1][willDie[willDie.length - 1].length - 1] === i + 1 &&
// 		// 			p[i + 1] <=
// 		// 				p[willDie[willDie.length - 1][willDie[willDie.length - 1].length - 2]]
// 		// 		)
// 		// 			willDie.push([i + 1]);
// 		// 	} else willDie.push([i + 1]);
// 		// 	// console.log("willDie:");
// 		// 	// console.log(willDie);
// 		// }
// 	}

// 	const tempDays = willDie.length + 1;
// 	if (tempDays > maxDays) return tempDays;
// 	return maxDays;
// }

class Plant {
	constructor(pLvl = 0) {
		this.pLvl = pLvl;
		this.next = null;
	}
}
class PlantList {
	constructor(plant = null) {
		this.head = plant;
		this.tail = plant;
		this.next = null;
	}
	add(plant) {
		if (this.head === null) {
			this.head = plant;
			this.tail = plant;
		} else {
			this.tail.next = plant;
			this.tail = plant;
		}
	}
	remove() {
		if (this.head !== null) {
			const temp = this.head.next;
			this.head.next = null;
			this.head = temp;
			if (temp === null) this.tail = temp;
		}
	}
	merge(pl = null) {
		if (pl !== null) {
			this.tail.next = pl.head;
			if (pl.tail !== null) this.tail = pl.tail;
			this.next = pl.next;
			this.count += pl.count;
			pl.next = null;
			pl.head = null;
			pl.tail = null;
			return this.next;
		}
		return null;
	}
}

function poisonousPlants(p = []) {
	console.log();
	console.log(`\npoisonousPlants([${p}])`);
	if (p.length < 2) return 0;
	const base = new PlantList(new Plant(p[0]));
	let x = 0;
	while (++x < p.length && p[x] <= p[x - 1]) base.add(new Plant(p[x]));
	if (x === p.length) return 0;
	let pL = new PlantList();
	base.next = pL;
	for (let i = x; i < p.length; i++) {
		if (p[i] > p[i - 1]) {
			const temp = new PlantList(new Plant(p[i]));
			pL.next = temp;
			pL = temp;
		} else {
			pL.add(new Plant(p[i]));
		}
	}
	let day = 0;
	while (day < p.length && base.next !== null) {
		let prev = base;
		let curr = base.next;
		while (curr !== null) {
			curr.remove();
			if (curr.head === null || curr.head.pLvl <= prev.tail.pLvl) {
				curr = prev.merge(curr);
				continue;
			}
			prev = curr;
			curr = curr.next;
		}
		day++;
	}
	return day;
}

console.log("\noutput:", poisonousPlants([3, 6, 2, 7, 5])); //output: 2 - Example
console.log("\noutput:", poisonousPlants([6, 5, 8, 4, 7, 10, 9])); //output: 2 - TC: 0
console.log("\noutput:", poisonousPlants([1, 1, 1, 1, 1])); //output: 0 - TC: 1
console.log("\noutput:", poisonousPlants([3, 2, 5, 4])); //output: 2 - TC: 29
console.log("\noutput:", poisonousPlants([4, 3, 7, 5, 6, 4, 2])); //output: 3 - TC: 30
console.log("\noutput:", poisonousPlants([3, 1, 10, 7, 3, 5, 6, 6])); //output: 3 - TC: 7
console.log(
	"\noutput:",
	poisonousPlants([20, 5, 6, 15, 2, 2, 17, 2, 11, 5, 14, 5, 10, 9, 19, 12, 5])
); //output: 4 - TC: 8
