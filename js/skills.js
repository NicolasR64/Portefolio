function skills_events()
{
    function display_skills(data){
        let box = document.querySelector('#skills_section .box');
		box.innerHTML = '';

		if (window.innerWidth > 930)
		{
			let menu = '';
			let box_content = '';

			for (let category of my_data.skills_categories)
			{
				menu += `<div class="category">${category.name}</div>`;

				let skills = '';

				for (let skill of category.skills)
				{
					skills += `<a class="skill" href="${skill.link}" target="_blank">
						<img src="${skill.logo}">
						<span>${skill.name}</span>
					</a>`;
				}

				box_content += `<div class="skills_list">${skills}</div>`;
			}

			box.innerHTML = `<div class="menu">${menu}</div><div class="box_content">${box_content}</div>`;

			events();
		}

		else
		{
			for (let category of my_data.skills_categories)
			{
				box.innerHTML += `<div class="category_title">${category.name}</div>`;

				let skills = '';

				for (let skill of category.skills)
				{
					skills += `<a class="skill" href="${skill.link}" target="_blank">
						<img src="${skill.logo}">
						<span>${skill.name}</span>
					</a>`;
				}

				box.innerHTML += `<div class="box_content"><div class="skills_list">${skills}</div></div>`;
			}
		}
    }
}