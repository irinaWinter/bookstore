var profession__item =  document.querySelectorAll('.profession__item');

var filter = {
	profession__item_selected: document.querySelectorAll('.profession__item_selected'),
	myBooks: document.querySelectorAll('.book'),
	selected: false,
	checkSpecialty: undefined,
	setSelect: function(eventObj) {
		if (!this.selected) {
			eventObj.classList.add('profession__item_selected');
			element = eventObj;
			this.selected = true;
			this.showSpecialty = eventObj;
			// this.checkSpecialty = eventObj.getAttribute("name"); 
		} else {
			element.classList.remove('profession__item_selected');
			this.selected = false;
			this.setSelect(eventObj);
		}
	},
	sort: function(checkSpecialty) {
		console.log(checkSpecialty);
	}
}

profession__item.forEach(function(e) {	
	e.addEventListener("click", function() {
		filter.setSelect(e);
		// filter.sort();
	});
});



