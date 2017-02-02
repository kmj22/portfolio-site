/* NavBar Setup */
var list = document.createElement('ul');

var urls = ["https://web.njit.edu/~kmj22/personal/",
			"https://web.njit.edu/~kmj22/personal/experience/",
			"https://web.njit.edu/~kmj22/personal/projects/",
			"https://web.njit.edu/~kmj22/personal/game/"];
var names = ["Home", 
			"Experience", 
			"Sample Projects", 
			"Game Design"];			

for (var i = 0; i < urls.length; i++){
	var url = urls[i];
	var name = names[i];
	
	var item = document.createElement('li');
	var a = document.createElement("a");
	
	a.innerHTML = name;
	
	if (url == document.URL){
		a.id = 'current-link';
	}
	else{
		a.setAttribute('href', url);
	}
	
	item.appendChild(a);
	list.appendChild(item);
	navbar.appendChild(list);
}
		
		
function addEntry(date, company, title, bullets){
	var table = document.createElement('table');
	table.setAttribute('border', '1');
	
	var tr = document.createElement('tr');
	
	var td = document.createElement('td');	
	td.setAttribute('rowspan', '3');
	td.setAttribute('class', 'experience-date');
	td.innerHTML = date;
	tr.appendChild(td);
	
	var td = document.createElement('td');	
	td.innerHTML = "<b>" + company + "</b>";
	td.setAttribute('class', 'experience-company');
	tr.appendChild(td);
	
	table.appendChild(tr);
	
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	td.setAttribute('class', 'experience-title');	
	td.innerHTML = title;
	tr.appendChild(td);
	
	table.appendChild(tr);
	
	var tr = document.createElement('tr');
	var td = document.createElement('td');	
	if (typeof(bullets) == 'string'){
		td.innerHTML = bullets;
	}
	else{
		td.innerHTML = "<ul>";
		for (var i = 0; i < bullets.length; i++){
			td.innerHTML += "<li>" + bullets[i] + "</li>";
		}
		td.innerHTML += "</ul>";
	}
	td.setAttribute('class', 'experience-description');
	tr.appendChild(td);
	
	table.appendChild(tr);
	
	experience.appendChild(table);	
	experience.innerHTML += "<br />";
}