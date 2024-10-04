/* Animation : fade-in */
function onInit_animation(){
  const elements = [
    ...document.querySelectorAll('.fade-in-top'),
    ...document.querySelectorAll('.fade-in'),
    ...document.querySelectorAll('.slide-left'),
    ...document.querySelectorAll('.slide-right')
];
  let done = [];
  
  async function animation_fadeIn()
  {
    for (let i = 0; i < elements.length; i++){
      if (!done[i] && elements[i].classList.contains('delay-0') ? isvisible(elements[i], 0) : isvisible(elements[i]))
      {
        elements[i].classList.add('visible');
        done[i] = true;
        if(elements[i].classList.contains('sleep-shrt')){
          await sleep(100)
        }else if(elements[i].classList.contains('sleep-mid')){
          await sleep(200)
        }
      }
    }
  }
  
  window.addEventListener('scroll', function()
  {
    animation_fadeIn();
  });

  function isvisible(element, delay=300)
  {
    const rect = element.getBoundingClientRect();
    return rect.bottom >= delay && rect.top <= (window.innerHeight || document.documentElement.clientHeight)  - delay;
  }

  function sleep(ms)
{
	return new Promise(resolve => setTimeout(resolve, ms));
}

	animation_fadeIn();
}
