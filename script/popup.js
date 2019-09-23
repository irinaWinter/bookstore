var myBooks = document.querySelectorAll('.book');
var popup = {
	myBooks: document.querySelectorAll('.book'),
	createPopUp: function(element) {
		var main = document.querySelector('main');

		// плашка
		var popup = document.createElement('div');
			popup.className = "popup";
			main.append(popup);

		// окно для контента
		var detail = document.createElement('div');
			detail.className = "detail";
			popup.append(detail);

		// крестик для закрытия окна
		var detail__close = document.createElement('img');
			detail__close.className = "detail__close";
			detail.append(detail__close);

		// иллюстрации
		var detail__illustration = document.createElement('div');



		var detail__img = document.createElement('img');

		// БЛОК С ТЕКСТОВОЙ ИНФОРМАЦИЕЙ
		var detail__text = document.createElement('div');
			detail__text.className = "detail__text";
			detail__close.append(detail__text);

		// цена
		var detail__price = document.createElement('p');
			detail__price.className = "detail__price";
			detail__price.textContent = books[element].price;
			detail__text.append(detail__price);

		// название издания
		var detail__name = document.createElement('p');
			detail__name.className = "detail__name";
			detail__name.textContent = books[element].name;
			detail__price.append(detail__name);

		// автор
		var detail__author = document.createElement('p');
			detail__author.className = "detail__author";
			detail__author.textContent = books[element].author;
			detail__name.append(detail__author);

		var detail__specialty = document.createElement('p');
			detail__specialty.className = "detail__info";
			detail__specialty.textContent = books[element].specialty;
			detail__author.append(detail__specialty);

		var detail__year = document.createElement('p');
			detail__year.className = "detail__info";
			detail__year.textContent = books[element].year;
			detail__specialty.append(detail__year);

		var detail__format = document.createElement('p');
			detail__format.className = "detail__info";
			detail__format.textContent = books[element].format;
			detail__year.append(detail__format);

		var detail__pages = document.createElement('p');
			detail__pages.className = "detail__info";
			detail__pages.textContent = books[element].pages;
			detail__format.append(detail__pages);

		var detail__annotation = document.createElement('p');
			detail__annotation.className = "detail__annotation";
			detail__annotation.textContent = books[element].annotation;
			detail__pages.append(detail__annotation);


		var detail__reissue = document.createElement('p');
			detail__reissue.className = "detail__info";
			detail__reissue.textContent = books[element].reissue;
			detail__annotation.append(detail__reissue);
	}

}


myBooks.forEach(function(e) {	
	e.addEventListener("click", function() {
		console.log("Привет" + books[e].name);
	});
});
