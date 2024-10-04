function onInit_headerScroll(){
    const nav = document.getElementById('nav');

    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll(".section-dark");
        let topPosition = 0;
        let bottomPosition = 0;
        let currentPosition = window.scrollY;
        for(let i = 0; i != sections.length; i++){
            topPosition = sections[i].getBoundingClientRect().top + currentPosition - nav.clientHeight/2;
            bottomPosition = sections[i].getBoundingClientRect().bottom + currentPosition - nav.clientHeight;

            if(topPosition <= currentPosition && bottomPosition >= currentPosition){
                nav.style.backgroundColor = 'transparent'
                nav.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0)';
                break
            }else{
                nav.style.backgroundColor = 'var(--color-darkPurple)'
                nav.style.boxShadow = '0px 0px 20px rgba(0, 0, 0, 0.4)';
            }
        }
      });
}


  