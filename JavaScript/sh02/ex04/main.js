function createCounter(start, step) {
	return function() {
		start += step; 
		console.log(start); 
		return start;
	};
}

const inc = createCounter(5,2); inc(); inc();