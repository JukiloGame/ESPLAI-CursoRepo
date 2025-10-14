function sumatorio(base = 0, ... nums) {
	let total = base;
	for (let num of nums) {
		if(typeof num == "number") {
			total+=num;
		}
	}
	return total;
}


console.log(sumatorio(10, 1, 2, '3', 4));


