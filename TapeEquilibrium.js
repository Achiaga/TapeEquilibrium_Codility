function solution(A) {
	// write your code in JavaScript (Node.js 8.9.4)
	const arr = [...A];
	let solution = Infinity;
	let contR = 0;
	let contL = 0;
	function sumTotal(arr) {
		arr.map(item => {
			contL += item;
		});
		return contL;
	}
	sumTotal(arr);
	for (var i = 0; i < arr.length - 1; i++) {
		contR += arr[i];
		contL -= arr[i];
		if (solution > Math.abs(contL - contR)) {
			solution = Math.abs(contL - contR);
		}
	}
	return solution;
}
