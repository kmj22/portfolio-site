/* NavBar Setup */
var nav = document.getElementById('nav');
nav.innerHTML = `	
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#links" id="small-menu">
				</button>
			
				<a class="navbar-brand">Kevyn Jaremko</a>
			</div>
			<div class="collapse navbar-collapse" id="links">
				<ul id="url-list" class="nav navbar-nav navbar-right">
				</ul>
			</div>
		</div>
	</nav>`;

var list = document.getElementById('url-list');
var smallMenu = document.getElementById('small-menu');

var urls = ["index.html",
			"projects.html",
			"game.html"];

var names = ["About Me", 
			"Sample Projects", 
			"Game Design"];			
			
// grab the end of current url to compare with urls array
var currentURL = document.URL.split('/').pop();			

// add each url to the navbar with its corresponding title			
for (var i = 0; i < urls.length; i++){
	var url = urls[i];
	var name = names[i];
	
	var item = document.createElement('li');
	var a = document.createElement("a");
	
	a.innerHTML = name;
	
	// mark the current page link as active
	if (url == currentURL || (url == "index.html" && currentURL == "")){
		item.setAttribute('class', 'active');
	}
	else{
		a.setAttribute('href', url);
	}
	
	// add link to list item, then add list item to the list
	item.appendChild(a);
	list.appendChild(item);
	
	// create empty span for small bootstrap hamburger menu
	smallMenu.innerHTML += '<span class="icon-bar"></span>';
}

// Given an array of project objects
// Display each project in a uniform format		
function addProjects(projects){
	var projectContainer = document.getElementById('project-container');
	
	var row = document.createElement('div');
	
	row.setAttribute('class','row');
	projectContainer.appendChild(row);
	
	// number of projects that can be displayed in a row, 1-12
	var projectsPerRow = 2;
	
	var projectsInRow = 0;
	var colWidth = 12 / projectsPerRow;
	
	for (var i = 0; i < projects.length; i++){
		var project = projects[i];
		
		var html = "<h3>" + project.name + "</h3>";
		html += "<h4>" + project.date + "</h4>";
		html += "<p>" + project.description + "</p>";
			
		var column = document.createElement('div');
		column.setAttribute('class','col-sm-' + colWidth);
		
		var panelLink = document.createElement('a');
		panelLink.setAttribute('href', project.url);
		
		var panelContent = document.createElement('div');
		panelContent.setAttribute('class','panel project-panel'); 
		panelContent.innerHTML = html;
		
		column.appendChild(panelLink);
		panelLink.appendChild(panelContent);
		
		if (projectsInRow >= projectsPerRow){
			projectsInRow = 0;
					
			row = document.createElement('div');
			row.setAttribute('class','row');
			projectContainer.appendChild(row);			
		}

		row.appendChild(column);
		projectsInRow++;
	}
}		

// Given an array of job objects
// Display each job in a uniform format	
function addExperience(experience){
	var experienceContainer = document.getElementById('experience-container');
	
	experience.forEach(function(job){
		var title = document.createElement('h4');
		title.innerHTML = job.name + " / " + job.title;
		
		var date = document.createElement('h5');
		date.innerHTML = job.date;
		
		var work = document.createElement('p');
		work.innerHTML = job.work;
		
		experienceContainer.appendChild(title);
		experienceContainer.appendChild(date);
		experienceContainer.appendChild(work);
		experienceContainer.innerHTML += '<hr>';	
	});
}	
	