const getCompatible = (courses, startIdx, maxTime) => {
	console.log(`\ngetCompatible(courses, ${startIdx}, ${maxTime})`);
	if (startIdx == 0) {
		if (courses[0][0] <= maxTime) return [courses[0]];
		else return [];
	}
	const groups = [];
	for (let i = startIdx; i > 0; i--) {
		let tempGroup = [];
		if (courses[i][0] < maxTime) {
			const temp = getCompatible(courses, i - 1, maxTime - courses[i][0]);
			console.log("*temp:");
			console.log(temp);
			if (temp.length > 0) tempGroup = [courses[i], ...temp];
			else tempGroup.push(courses[i]);
		}
		if (tempGroup.length > 0) groups.push(tempGroup);
		console.log("*tempGroup:");
		console.log(tempGroup);
	}
	console.log("*groups:");
	console.log(groups);
	console.log();
	if (groups.length == 0) return [];
	let longest = 0;
	for (let i = 1; i < groups.length; i++) {
		if (groups[i].length > groups[longest].length) longest = i;
	}
	return groups[longest];
};

/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
	console.log("Input:");
	console.log(courses);
	console.log();
	courses = courses.filter((c) => c[1] >= c[0]);
	if (courses.length < 2) return courses.length;
	courses.sort((a, b) => a[1] - b[1]);
	console.log(courses);
	console.log();
	const groupings = [];
	for (let i = courses.length - 1; i > 0; i--) {
		let tempGroup = [];
		const temp = getCompatible(courses, i - 1, courses[i][1] - courses[i][0]);
		console.log("*temp:");
		console.log(temp);
		if (temp.length > 0) tempGroup = [courses[i], ...temp];
		else tempGroup.push(courses[i]);
		console.log("*tempGroup:");
		console.log(tempGroup);
	}
	console.log();
	console.log(groupings);
	let maxCount = 0;
	for (let i = 1; i < groupings.length; i++) {
		if (groupings[i].length > groupings[maxCount].length) maxCount = i;
	}
	console.log();
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
