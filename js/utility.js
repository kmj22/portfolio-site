/* NavBar Setup */
var nav = document.getElementById('nav');
nav.innerHTML = `	
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#">Kevyn Jaremko</a>
			</div>
			<ul id="url-list" class="nav navbar-nav navbar-right">
			</ul>
		</div>
	</nav>`

var list = document.getElementById('url-list');

var urls = ["index.html",
			"experience.html",
			"projects.html",
			"game.html"];

var names = ["Home", 
			"Experience", 
			"Sample Projects", 
			"Game Design"];			

// grab the end of the url to compare with relative paths
var currentURL = document.URL.split('/').pop();			
			
for (var i = 0; i < urls.length; i++){
	var url = urls[i];
	var name = names[i];
	
	var item = document.createElement('li');
	var a = document.createElement("a");
	
	a.innerHTML = name;
	
	if (url == currentURL){
		item.setAttribute('class', 'active');
	}
	else{
		a.setAttribute('href', url);
	}
	
	item.appendChild(a);
	list.appendChild(item);
}
		
		
function addEntry(date, company, title, description){
	var bullets;
	
	if (typeof(description) == 'string'){
		bullets = description;
	}
	else{
		bullets = "<ul>";
		for (var i = 0; i < description.length; i++){
			bullets += "<li>" + description[i] + "</li>";
		}
		bullets += "</ul>";
	}
	
	var container = document.createElement('div');
	container.setAttribute('class', 'container');
	
	var row = document.createElement('div');
	row.setAttribute('class', 'row');
	container.appendChild(row);
	
	var col = document.createElement('div');
	col.setAttribute('class', 'col-sm-5');
	col.innerHTML += "<h2>" + company + "</h2>";
	col.innerHTML += "<h3>" + date + "</h3>";
	row.appendChild(col);
	
	var col = document.createElement('div');
	col.setAttribute('class', 'col-sm-7');
	col.innerHTML += "<br /><h4>" + title + "</h4>";
	col.innerHTML += "<p>" + bullets + "</p>";
	row.appendChild(col);
	
	experience.appendChild(container);	
	experience.innerHTML += '<hr>';
	
	/*
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
	*/
}