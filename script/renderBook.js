function renderBook(element) {
	var div = document.createElement('div');
	div.className = "book";
	document.body.append(div);

	var img = document.createElement('img');
	img.src = "img/" + element.img + ".jpg";
	img.className = "book__img";
	div.append(img);

	var price = document.createElement('p');
	price.textContent = element.price + " ₽";
	price.className = "book__price";
	div.append(price);

	var name = document.createElement('p');
	name.textContent = element.name;
	name.className = "book__name";
	div.append(name);

	var author = document.createElement('p');
	author.textContent = element.author;
	author.className = "book__author";
	div.append(author);
	console.log(img.src);
}

renderBook(books[0]);