var profession__item = document.querySelectorAll('.profession__item');
var profession__item_selected = document.querySelectorAll('.profession__item_selected');
var myBooks = document.querySelectorAll('.book');


for (var j = 0; j < profession__item.length; j++) {
	profession__item[j].addEventListener('click', function () {
		_this = this;
		this.classList.toggle('profession__item_selected');

		if (this.classList.contains("profession__item_selected")) {
			books.forEach(function(element, index) {
				if (element.specialty == _this.getAttribute("Name")) {

				} else {
					myBooks[index].classList.add("hide");	
				}	
			});
		} else {
			books.forEach(function(element, index) {
				if (element.specialty == _this.getAttribute("Name")) {

				} else {
					myBooks[index].classList.remove("hide");	
				}	
			});
		}
	});
}


// 	for (var j = 0; j < profession__item_selected.length; j++) {
// 	profession__item_selected[j].addEventListener('click', function() {
// 		console.log(this.getAttribute("Name"));
// 	})
		

// }

	// if (this.classList.contains("profession__item_selected")) {
	// 	books.forEach(function(i){
	// 		renderBook(i);
	// 	});
	// }