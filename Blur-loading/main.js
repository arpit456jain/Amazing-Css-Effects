const background = document.querySelector('.bg');
const text = document.querySelector('.text');

let i = 0;

let time = setInterval(() => {

    i++;
    if (i > 99) {
        clearInterval(time)
    }
    text.innerHTML = `${i}%`;
    text.style.opacity = scale(i, 0, 100, 1, 0);
    background.style.filter = `blur(${scale(i, 0, 100, 30, 0)}px)`;

}, 30);

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}