var profession__item =  document.querySelectorAll('.profession__item');

var filter = {
	selected: false,
	checkSpecialty: undefined,
	setSelect: function(eventObj) {
		if (!this.selected) {
			eventObj.classList.add('profession__item_selected');
			element = eventObj;
			this.selected = true;
			this.showSpecialty = eventObj;
			this.checkSpecialty = eventObj.getAttribute("name"); 
		} else {
			element.classList.remove('profession__item_selected');
			this.selected = false;
			this.setSelect(eventObj);
		}
	},
	sort: function() {
		for (var i = 0; i < books.length; i++) {
			if (this.checkSpecialty === "all") {
				myBooks[i].classList.remove("hide");
			} else if (books[i].specialty !== this.checkSpecialty) {
				myBooks[i].classList.add("hide");
			} else {
				myBooks[i].classList.remove("hide");
			}
		}
	}
}

profession__item.forEach(function(e) {	
	e.addEventListener("click", function() {
		filter.setSelect(e);
		filter.sort();
	});
});



