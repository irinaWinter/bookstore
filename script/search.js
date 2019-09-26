var search_box = document.querySelector('.search');
var search_word = document.querySelector('.search__input');

search_box.addEventListener('keyup', function(e) {
	books.forEach(function(e, i){
		if (books[i].name.toLowerCase().indexOf(search_word.value.toLowerCase()) == -1) {
			myBooks[i].classList.add("hide");
		} else {
			myBooks[i].classList.remove("hide");
		}
	});
});