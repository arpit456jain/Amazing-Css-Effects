var date = new Date("Jan 1, 2016");
var valentinesDate = new Date("Feb 14, 2016");
var easterDate = new Date("Mar 27, 2016");
var birthDate = new Date("Jun 25, 2016");
var halloweenDate = new Date("Oct 31, 2016");
var christmasDate = new Date("Dec 25, 2016");

var currentDate = new Date("Jan 1 2016");
var currentTime = new Date(Date.now());
currentDate.setMonth(currentTime.getMonth());
currentDate.setDate(currentTime.getDate());




var container = document.querySelector(".container");
var colors = ["#FF8FEE", "#9282E8"];
var birthdayColor = "#518AFF";
var christmasColor = "#78FFA1";
var halloweenColor = "#FFD900";
var valentinesColor = "#FF38B9";
var easterColor = "#AD2CFF";
var currentColor = "#cccccc";
var previousValue = 0;
var currentValue = 0;
var color = colors[0];
var index = 0;
var lastMonth = 0;
var isSpecial = false;
var offset = date.getDay();

for(var o=0;o<offset;o++){
	createElement();
}



for (var i = 0; i < 366; i++) {

	var day = date.getDate();
	date.setHours(date.getHours() + 24)
	var month = date.getMonth();
	
	var element = createElement();
	element.style.background = color;
	if(isSpecial){
		element.classList.add("special");
		isSpecial = false;
	}
	
	color = colors[(month%12)%2];
	
	
	setColor(valentinesDate,valentinesColor);
	setColor(easterDate,easterColor);
	setColor(birthDate,birthdayColor);
	setColor(halloweenDate,halloweenColor);
	setColor(christmasDate,christmasColor);
	setColor(currentDate,currentColor);
}

function createElement(){
	var element = document.createElement("div");
	element.setAttribute("data-date", day);
	container.appendChild(element);
	element.classList.add("box");
	return element;
}

function setColor(checkDate,dateColor){
	if(date.getTime()==checkDate.getTime()){
		color = dateColor;
		
	isSpecial = true;
	}
}