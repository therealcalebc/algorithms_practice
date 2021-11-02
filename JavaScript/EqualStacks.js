/**
 * You have three stacks of cylinders where each cylinder has the same diameter, but they may vary in height. You can change the height of a stack by removing and discarding its topmost cylinder any number of times.
 * Find the maximum possible height of the stacks such that all of the stacks are exactly the same height. This means you must remove zero or more cylinders from the top of zero or more of the three stacks until they are all the same height, then return the height.
 */
/*
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 */
function equalStacks(h1, h2, h3) {
	console.log(h1);
	console.log(h2);
	console.log(h3);
	// Write your code here
	if (h1 === 0 || h2 === 0 || h3 === 0) return 0;
	const getSum = (sum, val) => sum + val;
	let x1 = h1.reduce(getSum);
	let x2 = h2.reduce(getSum);
	let x3 = h3.reduce(getSum);
	let i1 = 0;
	let i2 = 0;
	let i3 = 0;
	const shortest = Math.min(x1, x2, x3);
	console.log(`x1=${x1}, x2=${x2}, x3=${x3}, shortest=${shortest}`);
	if (x1 === shortest) {
		// while(i1 < h1.length && i2 < h2.length && i3 < h3.length) {
		while (x1 > 0 && x2 > 0 && x3 > 0) {
			while (x2 > x1 && i2 < h2.length) {
				x2 -= h2[i2];
				i2++;
			}
			while (x3 > x1 && i3 < h3.length) {
				x3 -= h3[i3];
				i3++;
			}
			if (x1 === x2 && x2 === x3) {
				return x1;
			} else {
				while ((x1 > x2 || x1 > x3) && i1 < h1.length) {
					x1 -= h1[i1];
					i1++;
				}
			}
		}
	} else if (x2 === shortest) {
		// while(i1 < h1.length && i2 < h2.length && i3 < h3.length) {
		while (x1 > 0 && x2 > 0 && x3 > 0) {
			while (x1 > x2 && i1 < h1.length) {
				x1 -= h1[i1];
				i1++;
			}
			while (x3 > x2 && i3 < h3.length) {
				x3 -= h3[i3];
				i3++;
			}
			if (x1 === x2 && x2 === x3) {
				return x2;
			} else {
				while ((x2 > x1 || x2 > x3) && i2 < h2.length) {
					x2 -= h2[i2];
					i2++;
				}
			}
		}
	} else if (x3 === shortest) {
		// while(i1 < h1.length && i2 < h2.length && i3 < h3.length) {
		while (x1 > 0 && x2 > 0 && x3 > 0) {
			while (x1 > x3 && i1 < h1.length) {
				x1 -= h1[i1];
				i1++;
			}
			while (x2 > x3 && i2 < h2.length) {
				x2 -= h2[i2];
				i2++;
			}
			if (x1 === x2 && x2 === x3) {
				return x3;
			} else {
				while ((x3 > x1 || x3 > x2) && i3 < h3.length) {
					x3 -= h3[i3];
					i3++;
				}
			}
		}
	}

	// if(x1 < x2 && x1 < x3) {
	//     while(x2 > x1) {
	//         x2 -= h2[i2];
	//         i2++;
	//     }
	//     while(x3 > x1) {
	//         x3 -= h3[i3];
	//         i3++;
	//     }
	// }
	// else if(x2 < x1 && x2 < x3) {
	//     while(x1 > x2) {
	//         x1 -= h1[i1];
	//         i1++;
	//     }
	//     while(x3 > x2) {
	//         x3 -= h3[i3];
	//         i3++;
	//     }
	// }
	// else if(x3 < x2 && x3 < x1) {
	//     while(x2 > x3) {
	//         x2 -= h2[i2];
	//         i2++;
	//     }
	//     while(x1 > x3) {
	//         x1 -= h1[i1];
	//         i1++;
	//     }
	// }
	// if(x1 === x2 && x2 === x3) {
	//     return x1;
	// }
	// while(i1 < h1.length && i2 < h2.length && i3 < h3.length) {
	//     let d1 = h1[i1] - h2[i2];
	//     let d2 = h2[i2] - h3[i3];
	//     if(d1 === 0 && d2 === 0) return x1;
	//     else if(d1 === 0) {
	//         if(d2 > 0) {
	//             x1 -= h1[i1];
	//             i1++;
	//             x2 -= h2[i2];
	//             i2++;
	//         }
	//         else {
	//             x3 -= h2[i3];
	//             i++;
	//         }
	//     }
	//     else if(d2 === 0) {
	//         if(d1 > 0) {
	//             x1 -= h1[i1];
	//             i1++;
	//         }
	//         else {
	//             x2 -= h2[i2];
	//             i2++;
	//             x3 -= h2[i3];
	//             i++;
	//         }
	//     }
	//     else {

	//     }
	// }
	return 0;
}

console.log(equalStacks([3, 2, 1, 1, 1], [4, 3, 2], [1, 1, 4, 1]));
