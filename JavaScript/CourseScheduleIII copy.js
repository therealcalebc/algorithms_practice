class course {
	constructor(dur, end) {
		this.duration = dur;
		this.lastDay = end;
		this.earliestEnd = dur;
		this.latestStart = end - dur + 1;
		this.wiggleRoom = end - dur;
		this.numBefore = 0;
		this.preceeding = [];
	}
	add(c) {
		let added = false;
		for (let i = 0; i < this.preceeding.length; i++) {
			if (c.earliestEnd < this.preceeding[i].latestStart) {
				this.preceeding[i].add(c);
				if (c.lastDay < this.preceeding[i].latestStart) {
					added = true;
				}
				if (this.preceeding[i].numAfter >= this.numBefore)
					this.numBefore = this.preceeding[i].numBefore + 1;
			} else if (this.preceeding[i].earliestEnd < c.latestStart) {
				c.add(this.preceeding[i]);
				if (this.preceeding[i].lastDay < c.latestStart) {
					this.preceeding[i] = c;
					added = true;
				}
				if (c.numBefore >= this.numBefore) this.numBefore = c.numBefore + 1;
			}
		}
		if (!added) {
			this.preceeding.push(c);
			if (this.numBefore == 0) this.numBefore = c.numBefore + 1;
		}
	}
	print() {
		if (this.preceeding.length > 0) {
			let longest = -1;
			for (let i = 0; i < this.preceeding.length; i++) {
				if (this.preceeding[i].numBefore > longest) longest = i;
			}
			if (longest >= 0) this.preceeding[longest].print();
		}
		console.log(this);
	}
}

/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
	console.log("Input:");
	console.log(courses);
	console.log();
	let last = [];
	for (let i = 0; i < courses.length; i++) {
		if (courses[i][0] <= courses[i][1]) {
			// if(courses[i][0] > courses[i][1] && maxCount > 0) maxCount--;
			// else {
			let newCourse = new course(courses[i][0], courses[i][1]);
			// if(courses[i][0] == courses[i][1]) last.push(newCourse);
			// else {
			if (last.length == 0) last.push(newCourse);
			else {
				let added = false;
				for (let j = 0; j < last.length; j++) {
					if (newCourse.earliestEnd < last[j].latestStart) {
						last[j].add(newCourse);
						// if (newCourse.lastDay < last[j].latestStart) added = true;
						added = true;
					} else if (last[j].earliestEnd < newCourse.latestStart) {
						newCourse.add(last[j]);
						// if (last[j].lastDay < newCourse.latestStart) {
						// 	last[j] = newCourse;
						// 	added = true;
						// }
						last[j] = newCourse;
						added = true;
					}
				}
				if (!added) last.push(newCourse);
			}
			// }
		}
	}
	console.log(last);
	console.log();
	let maxCount = 0;
	for (let i = 0; i < last.length; i++) {
		if (last[i].numBefore >= maxCount) maxCount = last[i].numBefore + 1;
		last[i].print();
	}
	return maxCount;
};

console.log(
	"Output: \n" +
		scheduleCourse([
			[100, 200],
			[200, 1300],
			[1000, 1250],
			[2000, 3200],
		])
);
