// 1. Init
function onInit_skills(){

	function generate_skills(my_data)
	{
		// 1. Get the menu section
		let MenuBox = document.getElementById('skills_type');
		MenuBox.innerHTML = '';
		let SkillsBox = document.getElementById('skills_box')
		SkillsBox.innerHTML = '';

		// 2. Create menu
		if (window.innerWidth > 930)
		{
			// 2.1 PC style
			let menu = '';
			let skills_box = '';

			my_data.skills_categories.forEach((category, index) => {
				
				// 2.2 Menu creation
				if(index != 0){
					menu += `<a class="link category" >${category.name}</a>`;
				}else{
					menu += `<a class="link link-active category" >${category.name}</a>`;
				}
				// 2.3 Skills creation
				let skills = '';
				category.skills.forEach(skill => {
					skills += `
					<div class="skill">
						<a href="${skill.link}" target="_blank">
							<img src="${skill.logo}">
							<span>${skill.name}</span>
						</a>
					</div>`;
				})
				skills_box += `<div class="skills-container">${skills}</div>`;
			});			

			// 2.4 Dislay menu and skills
			MenuBox.innerHTML = `${menu}`;
			SkillsBox.innerHTML = `${skills_box}`;

			// 2.5 Add event on menu link
			let categories = document.querySelectorAll('#skills_type .category');
			categories.forEach((category, index) => {
				category.addEventListener('click', (e) => {
					displayCategory(index);
				});
			});

			displayCategory(0);
		}
	}

	function displayCategory(i=0){
		let categories = document.querySelectorAll('#skills_box .skills-container');
		let menu = document.querySelectorAll('#skills_type .category');
		let activeMenu = document.querySelector('#skills_type .link-active')
		let activeCategory = document.querySelector('#skills_box .show');
				
		if(activeCategory != null){
			activeCategory.classList.remove('show');
		}
		for (let index = 0; index < categories.length; index++) {
			let category = categories[index];
			if (i == index) {
				activeMenu.classList.remove('link-active');
				menu[index].classList.add('link-active');
				category.classList.add('show');
				break;
			}
		}
		dynamicHeightSection();
	}

	generate_skills(JSON_SKILLS)
}

JSON_SKILLS = {
	"skills_categories":
	[
		{
			"name" : "Front-end Web",
			"skills" :
			[
				{
					"name": "HTML",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://en.wikipedia.org/wiki/HTML"
				},
				{
					"name": "CSS",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://en.wikipedia.org/wiki/CSS"
				},
				{
					"name": "JavaScript",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://en.wikipedia.org/wiki/JavaScript"
				},
				{
					"name": "TypeScript",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://www.typescriptlang.org"
				},
				{
					"name": "jQuery",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://jquery.com/"
				},
				{
					"name": "Bootstrap",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://getbootstrap.com/"
				},
				{
					"name": "Angular",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://angular.dev"
				},
				{
					"name": "Ang. Material",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://material.angular.io"
				},
				{
					"name": "Git",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://git-scm.com/"
				},
				{
					"name": "PHP",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://www.php.net"
				}
			]
		},
		{
			"name" : "Back-end Web",
			"skills" :
			[
				{
					"name": "JavaScript",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://en.wikipedia.org/wiki/JavaScript"
				},
				{
					"name": "TypeScript",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://www.typescriptlang.org"
				},
				{
					"name": "DiscordJS",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://discord.js.org"
				},
				{
					"name": "C#",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
				},
				{
					"name": "SQL",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://sql.sh"
				},
				{
					"name": "PostGresSQL",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://www.postgresql.org"
				},
				{
					"name": "Stripe",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://stripe.com/"
				},
				{
					"name": "Git",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://git-scm.com/"
				},
				{
					"name": "Spring boot",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://spring.io/projects/spring-boot"
				},
				{
					"name": "PHP",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://www.php.net"
				}
			]
		},
		{
			"name" : "Software Development",
			"skills" :
			[
				{
					"name": "C",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://en.wikipedia.org/wiki/C_(programming_language)"
				},
				{
					"name": "Windev",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://pcsoft.fr"
				},
				{
					"name": "Java",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://en.wikipedia.org/wiki/Java_(programming_language)"
				},
				{
					"name": "C#",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
				},
				{
					"name": "Git",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://git-scm.com/"
				}
			]
		},
		{
			"name" : "Design",
			"skills" :
			[
				{
					"name": "Figma",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://www.figma.com/"
				},
				{
					"name": "Canva",
					"logo": "https://upload.wikimedia.org/wikipedia/commons/archive/3/35/20220802133510%21The_C_Programming_Language_logo.svg",
					"link": "https://www.canva.com/"
				}
			]
		}
	]
}


function dynamicHeightSection(){
	let skills_box = document.getElementById('skills_box');
	let skils_menu = document.getElementById('skills_type');
	let skills_container = document.querySelector('#skills_box .show');

	skills_box.style.height = skills_container.getBoundingClientRect().height + skils_menu.getBoundingClientRect().height + 'px';
}