const ps = document.querySelectorAll('.icon p');

ps.forEach(p => {
    const pStyles = window.getComputedStyle(p);
    const pWidth = p.getBoundingClientRect().width;
    const marginLeft = parseFloat(pStyles.marginLeft);
    const marginRight = parseFloat(pStyles.marginRight);
    const totalWidth = pWidth + marginLeft + marginRight;

    p.style.setProperty('--width', `${totalWidth}px`);
    p.style.setProperty('width', 0)
});
