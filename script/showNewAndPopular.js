var heading = document.querySelectorAll('h2');

var newBooks = heading[0];
var popularBooks = heading[1];



books.forEach(function(i) {
	renderBook(i);
})
var myBooks = document.querySelectorAll('.book');

filter.showNew();



// books.forEach(function(i) {
// 	if (i.popular) {
// 		renderBook(i);
// 	}
// })