var body = document.querySelector('body');
var myBooks = document.querySelectorAll('.book');
var popup = document.createElement('div');
var detail__close = document.createElement('img');
var detail = document.createElement('div');
var detail__illustration = document.createElement('div');
var detail__img = document.createElement('img');
var detail__text = document.createElement('div');
var detail__price = document.createElement('p');
var detail__name = document.createElement('p');
var detail__author = document.createElement('p');
var detail__specialty = document.createElement('p');
var detail__year = document.createElement('p');
var detail__format = document.createElement('p');
var detail__pages = document.createElement('p');
var detail__annotation = document.createElement('p');
var detail__reissue = document.createElement('p');
var createPopup = {
	create: function(element) {
		var main = document.querySelector('main');
		

		body.style.overflow = "hidden";

		// плашка
		// var popUp = document.createElement('div');
			popup.className = "popup";
			main.append(popup);

		// окно для контента
		
			detail.className = "detail";
			popup.append(detail);

		// крестик для закрытия окна

			detail__close.className = "detail__close";
			detail__close.src = "img/close.png";
			detail.append(detail__close);	

		// иллюстрации
			detail__illustration.className = "detail__illustration";
			detail.append(detail__illustration);

			detail__img.className = "detail__img";
			detail__img.src = "img/" + element.img + ".jpg";
			detail__illustration.append(detail__img);


		

		





		// БЛОК С ТЕКСТОВОЙ ИНФОРМАЦИЕЙ

			detail__text.className = "detail__text";
			detail.append(detail__text);

		// цена

			detail__price.className = "detail__price";
			detail__price.textContent = element.price + " ₽";
			detail__text.append(detail__price);

		// название издания

			detail__name.className = "detail__name";
			detail__name.textContent = element.name;
			detail__text.append(detail__name);

		// автор
	
			detail__author.className = "detail__author";
			detail__author.textContent = element.author;
			detail__text.append(detail__author);

		// специальность

			detail__specialty.className = "detail__info";
			detail__specialty.textContent = "Специальность: " + element.specialty;
			detail__text.append(detail__specialty);

		// год издания
		
			detail__year.className = "detail__info";
			detail__year.textContent = "Год издания: " + element.year;
			detail__text.append(detail__year);

		// формат
		
			detail__format.className = "detail__info";
			detail__format.textContent = "Формат: " + element.format;
			detail__text.append(detail__format);

		// объем
		
			detail__pages.className = "detail__info";
			detail__pages.textContent = "Объём: " + element.pages + " с.";
			detail__text.append(detail__pages);

		// аннотация
		
			detail__annotation.className = "detail__annotation";
			detail__annotation.textContent = element.annotation;
			detail__text.append(detail__annotation);

		// переиздание
		
			detail__reissue.className = "detail__info";
			detail__reissue.textContent = "Издание: " + element.reissue;
			detail__text.append(detail__reissue);
	},
	close: function() {
		popup.remove();
		body.style.overflow = "visible";
	}


}


myBooks.forEach(function(e, i) {	
	e.addEventListener("click", function() {
		createPopup.create(books[i]);
	});
});

detail__close.addEventListener("click", function() {
	createPopup.close();
});
