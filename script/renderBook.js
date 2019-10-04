
var main = document.querySelector('main');

var container = document.createElement('div');
container.className = "container";

var section = document.createElement('div');
section.className = "section";

// var heading = document.createElement('h2'); // прописать в html !!!
// heading.className = "section__heading";
// heading.textContent = "Издания";

main.append(container);
container.append(section);
// section.append(heading);

function renderBook(element) {
	var book = document.createElement('div');
	book.className = "book";
	section.append(book);

	var img = document.createElement('img');
	img.src = "img/" + element.img + ".jpg";
	img.className = "book__img";
	book.append(img);

	var price = document.createElement('p');
	price.textContent = element.price + " ₽";
	price.className = "book__price";
	book.append(price);

	var name = document.createElement('p');
	name.textContent = element.name;
	name.className = "book__name";
	book.append(name);

	var author = document.createElement('p');
	author.textContent = element.author;
	author.className = "book__author";
	book.append(author);
};

books.forEach(function(i){
	renderBook(i);
});