var profession__item = document.querySelectorAll('.profession__item');
for (var i = 0; i < profession__item.length; i++) {
	profession__item[i].addEventListener('click', function () {
		this.classList.toggle('profession__item_selected');
	});
}	

