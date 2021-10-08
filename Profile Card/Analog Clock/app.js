const secondHand = document.querySelector('[data-second]');
const minuteHand = document.querySelector('[data-minute]');
const hourHand = document.querySelector('[data-hour]');
console.log('elements selected');

const setClock = () => {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    setRotation(secondRatio, secondHand);
    setRotation(minuteRatio, minuteHand);
    setRotation(hourRatio, hourHand);
}

const setRotation = (rotationRatio, element) => {
    element.style.setProperty('--rotation', rotationRatio * 360);
    console.log('rotating')
}

setClock();
setInterval(setClock, 1000);
