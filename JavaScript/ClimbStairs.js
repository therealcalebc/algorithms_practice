//basic, can either take 1 or 2 stairs at a time
let foundCombos = [0, 1, 2];
const findStepCombos = (numSteps) => {
	if (!numSteps) return 0;
	if (foundCombos[numSteps] == undefined)
		foundCombos[numSteps] = findStepCombos(numSteps - 1) + findStepCombos(numSteps - 2);
	return foundCombos[numSteps];
};

//advanced, set for number of stairs per step passed in as array
let foundCombosAdv = [1];
const findStepCombosAdv = (numSteps, stepOptions) => {
	if (stepOptions === null || stepOptions === undefined) return 0;
	if (numSteps == null || numSteps === undefined || numSteps < 0) return 0;
	// if(numSteps === 0) return 1;
	if (foundCombosAdv[numSteps] == undefined) {
		foundCombosAdv[numSteps] = 0;
		for (let i = 0; i < stepOptions.length; i++) {
			if (numSteps >= stepOptions[i])
				foundCombosAdv[numSteps] += findStepCombosAdv(
					numSteps - stepOptions[i],
					stepOptions
				);
		}
	}
	return foundCombosAdv[numSteps];
};

console.log(findStepCombosAdv(9, [1, 3, 5]));

/*
1;

1, 1;
2;

1, 1, 1;
2, 1;
1, 2;

1, 1, 1, 1;
2, 1, 1;
1, 2, 1;
1, 1, 2;
2, 2;

1, 1, 1, 1, 1;
2, 1, 1, 1;
1, 2, 1, 1;
1, 1, 2, 1;
1, 1, 1, 2;
2, 2, 1;
2, 1, 2;
1, 2, 2;

1, 1, 1, 1, 1, 1;
2, 1, 1, 1, 1;
1, 2, 1, 1, 1;
1, 1, 2, 1, 1;
1, 1, 1, 2, 1;
1, 1, 1, 1, 2;
2, 2, 1, 1;
2, 1, 2, 1;
2, 1, 1, 2;
1, 2, 2, 1;
1, 2, 1, 2;
1, 1, 2, 2;
2, 2, 2;

1, 1, 1, 1, 1, 1, 1;
2, 1, 1, 1, 1, 1;
1, 2, 1, 1, 1, 1;
1, 1, 2, 1, 1, 1;
1, 1, 1, 2, 1, 1;
1, 1, 1, 1, 2, 1;
1, 1, 1, 1, 1, 2;
2, 2, 1, 1, 1;
2, 1, 2, 1, 1;
2, 1, 1, 2, 1;
2, 1, 1, 1, 2;
1, 2, 2, 1, 1;
1, 2, 1, 2, 1;
1, 2, 1, 1, 2;
1, 1, 2, 2, 1;
1, 1, 2, 1, 2;
1, 1, 1, 2, 2;
2, 2, 2, 1;
2, 2, 1, 2;
2, 1, 2, 2;
1, 2, 2, 2;

1; //1, t = 1

1, 1; //2, t = 1

1, 1, 1; //3, t = 2
3;

1, 1, 1, 1; //4, t = 3
3, 1;
1, 3;

1, 1, 1, 1, 1; //5, t = 5
3, 1, 1;
1, 3, 1;
1, 1, 3;
5;

1, 1, 1, 1, 1, 1; //6, t = 8
3, 1, 1, 1;
1, 3, 1, 1;
1, 1, 3, 1;
1, 1, 1, 3;
3, 3;
5, 1;
1, 5;

1, 1, 1, 1, 1, 1, 1; //7, t = 12
3, 1, 1, 1, 1;
1, 3, 1, 1, 1;
1, 1, 3, 1, 1;
1, 1, 1, 3, 1;
1, 1, 1, 1, 3;
3, 3, 1;
3, 1, 3;
1, 3, 3;
5, 1, 1;
1, 5, 1;
1, 1, 5;

1, 1, 1, 1, 1, 1, 1, 1; //8, t = 19
3, 1, 1, 1, 1, 1;
1, 3, 1, 1, 1, 1;
1, 1, 3, 1, 1, 1;
1, 1, 1, 3, 1, 1;
1, 1, 1, 1, 3, 1;
1, 1, 1, 1, 1, 3;
3, 3, 1, 1;
3, 1, 3, 1;
3, 1, 1, 3;
1, 3, 3, 1;
1, 3, 1, 3;
1, 1, 3, 3;
5, 1, 1, 1;
1, 5, 1, 1;
1, 1, 5, 1;
1, 1, 1, 5;
5, 3;
3, 5;

1, 1, 1, 1, 1, 1, 1, 1, 1; //9, t = 30
3, 1, 1, 1, 1, 1, 1;
1, 3, 1, 1, 1, 1, 1;
1, 1, 3, 1, 1, 1, 1;
1, 1, 1, 3, 1, 1, 1;
1, 1, 1, 1, 3, 1, 1;
1, 1, 1, 1, 1, 3, 1;
1, 1, 1, 1, 1, 1, 3;
3, 3, 1, 1, 1;
3, 1, 3, 1, 1;
3, 1, 1, 3, 1;
3, 1, 1, 1, 3;
1, 3, 3, 1, 1;
1, 3, 1, 3, 1;
1, 3, 1, 1, 3;
1, 1, 3, 3, 1;
1, 1, 3, 1, 3;
1, 1, 1, 3, 3;
3, 3, 3;
5, 1, 1, 1, 1;
1, 5, 1, 1, 1;
1, 1, 5, 1, 1;
1, 1, 1, 5, 1;
1, 1, 1, 1, 5;
5, 3, 1;
5, 1, 3;
3, 5, 1;
1, 5, 3;
3, 1, 5;
1, 3, 5;

1; //1, t = 1

1, 1; //2, t = 2
2;

1, 1, 1; //3, t = 3
2, 1;
1, 2;

1, 1, 1, 1; //4, t = 6
2, 1, 1;
1, 2, 1;
1, 1, 2;
2, 2;
4;

1, 1, 1, 1, 1; //5, t = 10
2, 1, 1, 1;
1, 2, 1, 1;
1, 1, 2, 1;
1, 1, 1, 2;
2, 2, 1;
2, 1, 2;
1, 2, 2;
4, 1;
1, 4;

1, 1, 1, 1, 1, 1; //6, t = 18
2, 1, 1, 1, 1;
1, 2, 1, 1, 1;
1, 1, 2, 1, 1;
1, 1, 1, 2, 1;
1, 1, 1, 1, 2;
2, 2, 1, 1;
2, 1, 2, 1;
2, 1, 1, 2;
1, 2, 2, 1;
1, 2, 1, 2;
1, 1, 2, 2;
2, 2, 2;
4, 1, 1;
1, 4, 1;
1, 1, 4;
4, 2;
2, 4;

1, 1, 1, 1, 1, 1, 1; //7, t = 31
2, 1, 1, 1, 1, 1;
1, 2, 1, 1, 1, 1;
1, 1, 2, 1, 1, 1;
1, 1, 1, 2, 1, 1;
1, 1, 1, 1, 2, 1;
1, 1, 1, 1, 1, 2;
2, 2, 1, 1, 1;
2, 1, 2, 1, 1;
2, 1, 1, 2, 1;
2, 1, 1, 1, 2;
1, 2, 2, 1, 1;
1, 2, 1, 2, 1;
1, 2, 1, 1, 2;
1, 1, 2, 2, 1;
1, 1, 2, 1, 2;
1, 1, 1, 2, 2;
2, 2, 2, 1;
2, 2, 1, 2;
2, 1, 2, 2;
1, 2, 2, 2;
4, 1, 1, 1;
1, 4, 1, 1;
1, 1, 4, 1;
1, 1, 1, 4;
4, 2, 1;
4, 1, 2;
2, 4, 1;
2, 1, 4;
1, 4, 2;
1, 2, 4;

1, 1, 1, 1, 1, 1, 1, 1; //8, t = 55
//--------------
2, 1, 1, 1, 1, 1, 1;
1, 2, 1, 1, 1, 1, 1;
1, 1, 2, 1, 1, 1, 1;
1, 1, 1, 2, 1, 1, 1;
1, 1, 1, 1, 2, 1, 1;
1, 1, 1, 1, 1, 2, 1;
1, 1, 1, 1, 1, 1, 2;
//------------
2, 2, 1, 1, 1, 1;
2, 1, 2, 1, 1, 1;
2, 1, 1, 2, 1, 1;
2, 1, 1, 1, 2, 1;
2, 1, 1, 1, 1, 2;

1, 2, 2, 1, 1, 1;
1, 2, 1, 2, 1, 1;
1, 2, 1, 1, 2, 1;
1, 2, 1, 1, 1, 2;

1, 1, 2, 2, 1, 1;
1, 1, 2, 1, 2, 1;
1, 1, 2, 1, 1, 2;

1, 1, 1, 2, 2, 1;
1, 1, 1, 2, 1, 2;

1, 1, 1, 1, 2, 2;
//----------
2, 2, 2, 1, 1;
2, 2, 1, 2, 1;
2, 2, 1, 1, 2;

2, 1, 2, 2, 1;
2, 1, 2, 1, 2;

2, 1, 1, 2, 2;
//--
1, 2, 2, 2, 1;
1, 2, 2, 1, 2;

1, 2, 1, 2, 2;
//--
1, 1, 2, 2, 2;
//--------
2, 2, 2, 2;
//--------
4, 1, 1, 1, 1;
1, 4, 1, 1, 1;
1, 1, 4, 1, 1;
1, 1, 1, 4, 1;
1, 1, 1, 1, 4;
//--------
4, 2, 1, 1;
4, 1, 2, 1;
4, 1, 1, 2;

2, 4, 1, 1;
1, 4, 2, 1;
1, 4, 1, 2;

2, 1, 4, 1;
1, 2, 4, 1;
1, 1, 4, 2;

2, 1, 1, 4;
1, 2, 1, 4;
1, 1, 2, 4;
//------
4, 2, 2;
2, 4, 2;
2, 2, 4;
//----
4, 4;

1;

1, 1;

1, 1, 1;
3;

1, 1, 1, 1;
3, 1;
1, 3;

1, 1, 1, 1, 1;
3, 1, 1;
1, 3, 1;
1, 1, 3;

1, 1, 1, 1, 1, 1;
3, 1, 1, 1;
1, 3, 1, 1;
1, 1, 3, 1;
1, 1, 1, 3;
3, 3;

1, 1, 1, 1, 1, 1, 1;
3, 1, 1, 1, 1;
1, 3, 1, 1, 1;
1, 1, 3, 1, 1;
1, 1, 1, 3, 1;
1, 1, 1, 1, 3;
3, 3, 1;
3, 1, 3;
1, 3, 3;

1;

1, 1;

1, 1, 1;

1, 1, 1, 1;
4;

1, 1, 1, 1, 1;
4, 1;
1, 4;

1, 1, 1, 1, 1, 1;
4, 1, 1;
1, 4, 1;
1, 1, 4;

1, 1, 1, 1, 1, 1, 1;
4, 1, 1, 1;
1, 4, 1, 1;
1, 1, 4, 1;
1, 1, 1, 4;

1, 1, 1, 1, 1, 1, 1, 1;
4, 1, 1, 1, 1;
1, 4, 1, 1, 1;
1, 1, 4, 1, 1;
1, 1, 1, 4, 1;
1, 1, 1, 1, 4;
4, 4;

0;

2;

3;

2, 2;

2, 3;
3, 2;

2, 2, 2;
3, 3;

2, 2, 3;
2, 3, 2;
3, 2, 2;

2, 2, 2, 2;
3, 3, 2;
3, 2, 3;
2, 3, 3;

2, 2, 2, 3;
2, 2, 3, 2;
2, 3, 2, 2;
3, 2, 2, 2;
3, 3, 3;

2, 2, 2, 2, 2;
3, 3, 2, 2;
3, 2, 3, 2;
3, 2, 2, 3;
2, 3, 3, 2;
2, 3, 2, 3;
2, 2, 3, 3;

2, 2, 2, 2, 3;
2, 2, 2, 3, 2;
2, 2, 3, 2, 2;
2, 3, 2, 2, 2;
3, 2, 2, 2, 2;
3, 3, 3, 2;
3, 3, 2, 3;
3, 2, 3, 3;
2, 3, 3, 3;

0;

2;

0;

2, 2;
4;

0;

2, 2, 2;
4, 2;
2, 4;

0;

2, 2, 2, 2;
4, 2, 2;
2, 4, 2;
2, 2, 4;
4, 4;
*/
