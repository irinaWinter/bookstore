var heading = document.querySelectorAll('h2');

var newBooks = heading[0];
var popularBooks = heading[1];

books.forEach(function(i) {
	if (i.new) {
		renderBook(i);
	}
})

books.forEach(function(i) {
	if (i.popular) {
		renderBook(i);
	}
})