const myArray = [1, 2, 4, 3]

function stableNumericSort(arr) {
	let sortedArr = arr.slice();
	sortedArr.sort((a,b)=>a-b);	
	return sortedArr
}

console.log(stableNumericSort(myArray));
console.log(myArray);