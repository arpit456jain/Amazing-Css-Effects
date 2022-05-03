var svg = document.querySelector("svg");
var columns = 120;
var rows = 80;
var columnSpace = 7;
var rowSpace = 3;
var carWidth = 5;
var carHeight = 3;
var randomX = 5;


for (var x = 0; x < columns; x++) {
  for (var y = 0; y < rows; y++) {
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("width", carWidth);
    rect.setAttribute("height", carHeight);
    rect.setAttribute("x", x * (columnSpace + carWidth) + Math.random() * randomX);
    rect.setAttribute("y", y * (rowSpace + carHeight));
    rect.setAttribute("rx", carHeight * .5);
    var randomColor = `#${Math.round(Math.random() * 0xFFFFFF).toString(16)}`;
    rect.setAttribute("fill", randomColor);
    svg.appendChild(rect);
  }
}

var contentWidth = (carWidth + columnSpace) * columns - columnSpace + randomX;
var contentHeight = (carHeight + rowSpace) * rows - rowSpace;
svg.setAttribute("width", contentWidth);
svg.setAttribute("height", contentHeight);

svg.setAttribute("viewBox", `0 0 ${contentWidth} ${contentHeight}`);