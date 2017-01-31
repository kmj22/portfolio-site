document.getElementById("navbar").innerHTML =
 `		<ul>
		<li><a href="/~kmj22/personal/">Home
		<li><a href="/~kmj22/personal/experience">Experience</a>
		<li><a href="/~kmj22/personal/projects">Sample Projects</a>
		<li><a href="/~kmj22/personal/game">Game Design</a>
		</ul>
		`;
		
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
	td.innerHTML = "<ul>";
	for (var i = 0; i < bullets.length; i++){
		td.innerHTML += "<li>" + bullets[i] + "</li>";
	}
	td.innerHTML += "</ul>";
	td.setAttribute('class', 'experience-description');
	tr.appendChild(td);
	
	table.appendChild(tr);
	
	experience.appendChild(table);	
	experience.innerHTML += "<br />";
}