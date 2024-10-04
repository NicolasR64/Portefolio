// 1. Init
function onInit_projects(){

	function generate_projects(my_data)
	{
		// 1. 
		//let ProjectsCategories = document.getElementById('projects_categories');
		//ProjectsCategories.innerHTML = '';
		let ProjectsContainer = document.getElementById('pContainer')
		ProjectsContainer.innerHTML = '';

		// 2. 
		if (window.innerWidth > 930)
		{
			// 2.1 PC style
			let projects = '';

			my_data.projects.forEach((project, index) => {
				
				// 2.2 Menu creation
				
				// 2.3 Projects creation
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

			// 2.4 Dislay menu and skills
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
			"type": "Personal Challenge",
			"title": "Lorem ipsum",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper lectus quis leo fringilla lobortis. Curabitur molestie interdum fringilla. Phasellus in suscipit ipsum. In interdum erat imperdiet, rutrum felis vel, cursus arcu. Vestibulum eget consequat ex. Praesent ultricies interdum nunc sit amet porttitor. ",
			"tags":
			[
				{ "name": "HTML" },
				{ "name": "CSS" }
			],
			"links":
			[
				"#",
				"#",
				"#"
			],
			"video": "#",
			"image": "assets/img/card/lorem-ipsum@2x.png",
			"logo": "#",
			"categories": ["Personal"]
		},
		{
			"date": 2023,
			"type": "Personal Project",
			"title": "Generative Adversarial Network",
			"description": "This project is a deep convolutional generative adversarial network that can create high quality images from a random seed like portraits, animals, drawings and more...",
			"tags":
			[
				{ "name": "Python", "url": "https://www.python.org/" },
				{ "name": "PyTorch", "url": "https://pytorch.org/" }
			],
			"links":
			[
				"https://github.com/angeluriot/Generative_adversarial_network",
				"https://github.com/angeluriot/Generative_adversarial_network",
				"none"
			],
			"video": "#",
			"image": "assets/img/card/lorem-ipsum@2x.png",
			"logo": "#",
			"categories": ["Personal", "AI"]
		}
	]
}