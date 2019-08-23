function aboutUs() {
	var container = document.querySelector('.container');
	
	var p = document.createElement('p');
	p.className = 'text';
	p.textContent = "Учебно-методический отдел ГБПОУ МИПК им. И. Федорова занимается созданием и выпуском учебно-методической литературы для студентов следующих специальностей:";
	container.appendChild(p);

	// p.textContent = "Издания активно используются в учебном процессе как самим  колледжем, так и&nbsp;другими учебными заведениями.";
	container.appendChild(p);
	container.appendChild(p);

}

aboutUs();