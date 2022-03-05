const spotlightSize = 400;

document.addEventListener(
  "mousemove",
  function (event) {
    if (window.event) {
      event = window.event;
    }
    // Coordinates of Text
    let titleRect = document.querySelector(".title").getBoundingClientRect();

    // X-position
    let mouseX = event.clientX;

    // Position spotlight x coordinate
    let spotlightX = mouseX - spotlightSize / 2 - titleRect.left;

    // Y position
    let mouseY = event.clientY;

    // Position spotlight x coordinate
    let spotlightY = mouseY - spotlightSize / 2 - titleRect.top;

    const element = document.querySelector(".title");
    element.style.backgroundPosition = spotlightX + "px " + spotlightY + "px";
  },
  false
);
