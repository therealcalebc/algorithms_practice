/**
 * Flight Itinerary Problem
 * Given an unordered list of flights taken by someone, each represented as (origin, destination) pairs, and a starting airport, compute the person's itinerary.
 * If no such itinerary exists, return null.
 * All flights must be used in the itinerary.
 */

// my first attempt, returns new sorted array of flights in proper order
const flightItinerary = (flights) => {
	if (!flights) return null;
	if (flights.length === 1) return flights;
	const len = flights.length;
	for (let i = 0; i < len; i++) {
		const flight = flights.pop();
		const flightsSorted = flightItinerary([...flights]);
		if (flightsSorted != null) {
			if (flight[0] == flightsSorted[flightsSorted.length - 1][1])
				return [...flightsSorted, flight];
			else if (flight[1] == flightsSorted[0][0]) return [flight, ...flightsSorted];
		}
		flights.unshift(flight);
	}
	return null;
};
let unorderedFlights = [
	["HNL", "AKL"],
	["YUL", "ORD"],
	["ORD", "SFO"],
	["SFO", "HNL"],
];
console.log(flightItinerary(unorderedFlights));

// my reproduction of a python example, returns array of cities in proper order
const getItinerary = (flights = [], currentItinerary = null) => {
	if (!flights.length) return currentItinerary;
	console.log("getItinerary()");
	let lastStop = "";
	if (!currentItinerary) currentItinerary = [];
	else lastStop = currentItinerary[currentItinerary.length - 1];
	console.log("LAST STOP:", lastStop);
	console.log("Current Itinerary:");
	console.log(currentItinerary);
	for (let i = 0; i < flights.length; i++) {
		const [origin, destination] = flights[i];
		console.log(`flight ${i}, origin: ${origin}, dest: ${destination}`);
		// Make a copy of flights without the current one to mark it as used
		if (origin == lastStop) {
			const lessFlights = flights.slice(0, i).concat(flights.slice(i + 1));
			console.log("Remaining Flights:");
			console.log(lessFlights);
			currentItinerary.push(destination);
			console.log();
			return getItinerary(lessFlights, currentItinerary);
		}
		// currentItinerary.pop();
	}
	console.log();
	return null;
};
unorderedFlights = [
	["HNL", "AKL"],
	["YUL", "ORD"],
	["ORD", "SFO"],
	["SFO", "HNL"],
];
console.log(getItinerary(unorderedFlights, ["YUL"]));
