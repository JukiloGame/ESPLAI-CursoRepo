const users = [
{ id: 1, name: 'Ana', age: 28 },
{ id: 2, name: 'Luis', age: 17 },
{ id: 3, name: 'Zoe', age: 34 },
];

function adultToUpper(data) {
	let upperAdults = data.filter(data => data.age >= 18).map(data => data.name.toUpperCase()).sort();
	return upperAdults
	
}

console.log(adultToUpper(users))
console.log(users)