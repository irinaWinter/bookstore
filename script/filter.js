var profession__item = document.querySelectorAll('.profession__item');
var myBooks = document.querySelectorAll('.book');
var profession__item_selected;


for (var j = 0; j < profession__item.length; j++) {

	profession__item[j].addEventListener('click', function () {
		var _this = this;
		if (profession__item_selected == undefined) {
			this.classList.toggle('profession__item_selected');
			profession__item_selected = document.querySelectorAll('.profession__item_selected');
		
			books.forEach(function(element, index) {
				if (element.specialty !== _this.getAttribute("Name")) {
					myBooks[index].classList.add("hide");	
				} 
			});
		} else {
			profession__item.forEach(function(e) {
				e.classList.remove("profession__item_selected");
			});


				// Переписать

			this.classList.toggle('profession__item_selected');		
			books.forEach(function(element, index) {
				if (element.specialty !== _this.getAttribute("Name")) {
					myBooks[index].classList.add("hide");	
				} 
			});
			
		}	
	});
};



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