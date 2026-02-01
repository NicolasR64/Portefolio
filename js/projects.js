// 1. Init
function onInit_projects(){

	function generate_projects(my_data)
	{
		// 1. Get container
		let ProjectsContainer = document.getElementById('pContainer')
		ProjectsContainer.innerHTML = '';

		// 2. PC style
		if (window.innerWidth > 930)
		{
			// 2.1 PC style
			let projects = '';

			my_data.projects.forEach((project, index) => {
							
				// 2.2 Projects creation
                projects += `
                    <div class="project-wrapper ${index%2 == 0 ? 'right slide-right' : 'left slide-left'}">
                        <div class="project-picture-side">
                        <div class="project-picture">
                            <img src="${project.image}" alt="#">
                        </div>
                        </div>
                        <div class="project-content-side">
                        <div class="project-type">
                            <span>${project.date}</span>
                            <span>-</span>
                            <span>${project.type}</span>
                        </div>
                        <h4>${project.title}</h4>
                        <div class="project-description">
                            ${project.description}
                        </div>
                        <div class="project-techno-chips-set">
                            ${
                                project.tags.map(tag => `
								<div class="project-chips chips">
									${tag.name}
								</div>`).join('')
                            }                       
                        </div>
                        </div>
                    </div>`;
			});			

			// 2.3 Dislay menu and skills
			ProjectsContainer.innerHTML = `${projects}`;
		}
	}

	generate_projects(JSON_PROJECTS)
}



JSON_PROJECTS = {
	"projects":
	[
		{
			"date": 2024,
			"type": "Personal",
			"title": "Portefolio",
			"description": "The challenge in creating this portfolio was to start from an existing inspiration, whose code was available, and recreate it based solely on the visual appearance. Once the site was rebuilt, I compared my code with the original to analyze the differences and improve my development skills.",
			"tags":
			[
				{ "name": "HTML" },
				{ "name": "CSS" },
				{ "name": "JS"}
			],
			"links":
			[
				"#",
				"#",
				"#"
			],
			"video": "#",
			"image": "assets/img/card/portefolio.png",
			"logo": "#",
			"categories": ["Personal"]
		},
		{
			"date": 2020,
			"type": "School Project",
			"title": "First website",
			"description": "This project was part of my first year of studies and aimed to help me learn HTML and CSS. It was my first major school project, allowing me to apply these web development skills in a practical context.",
			"tags":
			[
				{ "name": "HTML" },
				{ "name": "CSS" }
			],
			"links":
			[
				"#",
				"#",
				"none"
			],
			"video": "#",
			"image": "assets/img/card/first_website.png",
			"logo": "#",
			"categories": ["Personal", "school"]
		}
	]
}