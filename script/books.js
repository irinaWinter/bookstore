var books = [
	{
		img: "book",
		name: "Язык творчества",
		author: "Феодор Леонид",
		price: 500,
		specialty: "42.02.02 Дизайн (по отраслям)",
		year: 2019,
		format: "60x90/16",
		pages: 120,
		annotation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		reissue: 2
	}
]

function getSums(arr) {
	var result = [];
	if (!arr.length) return result;

	var totalSum = arr.reduce(function(sum, item) {
		result.push(sum);
		return sum + item;
	});
	result.push(totalSum);

	return result;
}

alert(getSums([1, 2, 3, 4, 5]));
alert( getSums([-2, -1, 0, 1]) );