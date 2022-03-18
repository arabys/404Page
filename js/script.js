window.onmousemove = function(e) {
    let x = e.clientX / 5;
    let y = e.clientY / 5;

    let container = document.querySelector('.container');

    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';

}