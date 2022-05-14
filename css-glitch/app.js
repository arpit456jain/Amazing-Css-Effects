const pointer = document.querySelector('#cursor');
const glitch = document.querySelector('h1');

const cursor = (e) => {
    pointer.style.top = e.pageY + 'px'
    pointer.style.left = e.pageX + 'px'
}

window.addEventListener('mousemove', cursor);
glitch.addEventListener('mouseenter', () => {
    pointer.style.transform = 'scale(5)';
});
glitch.addEventListener('mouseleave', () => {
    pointer.style.transform = 'scale(1)';
});