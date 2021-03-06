var profession__item =  document.querySelectorAll('.profession__item');
var defaultValue = profession__item[8]; 
var filter = {
	selected: false,
	checkSpecialty: undefined,
	setSelect: function(eventObj) {
		if (!this.selected) {
			eventObj.classList.add('profession__item_selected');
			element = eventObj;
			this.selected = true;
			this.showSpecialty = eventObj;
			// this.checkSpecialty = eventObj.getAttribute("name"); 
			this.checkSpecialty = eventObj.textContent; 
		} else {
			element.classList.remove('profession__item_selected');
			this.selected = false;
			this.setSelect(eventObj);
		}
	},
	sort: function() {
		for (var i = 0; i < books.length; i++) {
			if (this.checkSpecialty === "Все специальности") {
				myBooks[i].classList.remove("hide");
			} else if (books[i].specialty.indexOf(this.checkSpecialty) == -1) {
				myBooks[i].classList.add("hide");
			} else {
				myBooks[i].classList.remove("hide");
			}
		}
	},
	showPopular: function() {
		for (var i = 0; i < books.length; i++) {
			if (books[i].popular) {
				myBooks[i].classList.remove("hide");
			} else {
				myBooks[i].classList.add("hide");
			}
		}		
	},
	showNew: function() {
		for (var i = 0; i < books.length; i++) {
			if (books[i].new) {
				myBooks[i].classList.remove("hide");
			} else {
				myBooks[i].classList.add("hide");
			}
		}
	}
};

// дефолтное значение (Все специальности)


profession__item.forEach(function(e, i) {	
	e.addEventListener("click", function() {
		filter.setSelect(e);
		filter.sort();
	});
});



