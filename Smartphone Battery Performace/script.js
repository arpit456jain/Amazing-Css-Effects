const minAmps = 5;
const maxAmps = 32;
const batterySize = 78;
const volts = 230;

const battery = document.querySelector("#battery");
const startText = document.querySelector("#start-text");
const endText = document.querySelector("#end-text");
const slider = document.querySelector("#slider");
const sliderLeft = document.querySelector("#slider-left");
const sliderRight = document.querySelector("#slider-right");
const sliderThumb1 = document.querySelector("#slider-thumb-1");
const sliderThumb2 = document.querySelector("#slider-thumb-2");
const durationText = document.querySelector("#duration");
const ampsText = document.querySelector("#amps");
const timeIncrements = 24 * (60 / 15);

let currentCharge = 0.25;
let desiredCharge = 0.5;
let maxDuration = 24;
let minDuration = 1;

function init() {
  maxDuration = calculateDuration(minAmps);
  minDuration = calculateDuration(maxAmps);
  drawTimeline(0, maxDuration);
}

function drawTimeline(targetStartIndex, targetEndIndex) {
  var startIndex = Math.max(0, targetStartIndex);
  var endIndex = Math.max(0, targetEndIndex);

  var targetStartTime = getTime(startIndex / timeIncrements * 24);
  var targetEndTime = getTime(endIndex / timeIncrements * 24);

  console.log(targetStartIndex, targetStartTime, targetEndIndex, targetEndTime);
}

function getTime(time) {
  let hours = Math.floor(time);
  let minutes = Math.round((time - hours) * 60);
  return { hours: hours, minutes: minutes };
}

function calculateAmps(duration) {
  var amountToCharge = batterySize * (desiredCharge - currentCharge);
  return amountToCharge * 1000 / volts / duration;
}

function calculateDuration(amps) {
  var amountToCharge = batterySize * (desiredCharge - currentCharge);
  return amountToCharge / (amps * volts / 1000);
}

// var sliderMin = parseInt(sliderLeft.getAttribute("cx"));
// var sliderMax = parseInt(sliderRight.getAttribute("cx"));
// var sliderRange = sliderMax - sliderMin;
// var isLeft = false;

// var timeIncrements = 24*(60/30);
// var sliderIncrement=sliderRange/timeIncrements;
// var now = roundTime(30, new Date());

// var leftIndex = 0;
// var rightIndex = timeIncrements;

// var minDuration=0;
// var maxDuration=24;

// slider.addEventListener("mousedown", onSliderStart, false);

// function onSliderStart(e) {
// 	 maxDuration = calculateDuration(minAmps);
// 	 minDuration = calculateDuration(maxAmps);
// 	 now = roundTime(30, new Date());
// 	battery.addEventListener("mousemove", onDrag, false);
// 	window.addEventListener("mouseup", onSliderStop, false);

// 	var index = getIndex(getX(e));

// 	var x = getX(e);
// 	var left = parseInt(sliderLeft.getAttribute("cx"));
// 	var right = parseInt(sliderRight.getAttribute("cx"));
// 	isLeft = Math.abs(x - left) <= Math.abs(x - right) ? true : false;

// 	onDrag(e);
// }

// function onSliderStop(e) {
// 	battery.removeEventListener("mousemove", onDrag, false);
// 	window.removeEventListener("mouseup", onSliderStop, false);
// }

// function getTime(time){
// 	hours=Math.floor(time);
// 	minutes= Math.round((time-hours)*60);
// 	return {hours:hours,minutes:minutes}
// }


// function drawTimeline(targetStartIndex, targetEndIndex) {

// 	var startIndex=Math.max(0,targetStartIndex);
// 	var endIndex=Math.max(0,targetEndIndex);


// 	var targetStartTime=getTime((startIndex/timeIncrements)*24);
// 	var targetEndTime=getTime((endIndex/timeIncrements)*24);


// 	var startDate = addMinutes(now,(targetStartTime.hours*60)+targetStartTime.minutes);
// 	var endDate = addMinutes(now,(targetEndTime.hours*60)+targetEndTime.minutes);

// 	if(isLeft){
// 		if(startIndex<endIndex){
// 			console.log(minDuration,maxDuration)
// 		}
// 	}

// 	var startSuffix=startDate.getHours()>=12?"pm":"am";
// 	var endSuffix=endDate.getHours()>=12?"pm":"am";
// 	var startHours=startDate.getHours()%12;
// 	var startMinutes=startDate.getMinutes();
// 	var endHours=endDate.getHours()%12;
// 	var endMinutes=endDate.getMinutes();


// 	startHours=startHours==0?12:startHours;
// 	startMinutes=startMinutes==0?"00":startMinutes;

// 	endHours=endHours==0?12:endHours;
// 	endMinutes=endMinutes==0?"00":endMinutes;
// 	startText.innerHTML = startIndex==0?"now":startHours+":"+startMinutes+startSuffix;
// 	endText.innerHTML =endHours+":"+endMinutes+endSuffix;


// 	// if(startText.innerHTML="12:00pm"){
// 	// 	startText.innerHTML="midnight";
// 	// }


// // 	var startIndex = Math.min(Math.max(targetStartIndex, 0), 24);
// // 	var endIndex = Math.min(Math.max(targetEndIndex, 0), 24);

// // 	console.log(maxDuration,minDuration);



// // 	if (isLeft) {
// // 		if (startIndex < endIndex) {
// // 			startIndex = Math.min(Math.max(0, startIndex), endIndex - minDuration);
// // 		} else if (startIndex > endIndex) {
// // 			startIndex = Math.min(Math.max(startIndex, endIndex + 1), 24);
// // 		} else {
// // 			startIndex = Math.min(endIndex + 1, 24 - minDuration);
// // 		}
// // 	} else {
// // 		if(startIndex>23-minDuration){
// // 			endIndex = Math.min(Math.max((startIndex+minDuration)%24,endIndex),startIndex-1);
// // 		} else if (startIndex < endIndex) {
// // 			endIndex = Math.max(Math.min(24, endIndex), startIndex + minDuration);
// // 		} else if (startIndex > endIndex) {
// // 			endIndex = Math.min(Math.max(0, endIndex), startIndex - 1);
// // 		} else {
// // 			endIndex = startIndex + minDuration;
// // 		}
// // 	}


// 	var sliderLeftX = Math.round(startIndex * sliderIncrement + sliderMin);
// 	var sliderRightX = Math.round(endIndex * sliderIncrement + sliderMin);

// 	sliderLeft.setAttribute("cx", sliderLeftX);
// 	sliderRight.setAttribute("cx", sliderRightX);
// 	startText.setAttribute("x", sliderLeftX);
// 	endText.setAttribute("x", sliderRightX);

// // 	if (startIndex < endIndex) {
// // 		sliderThumb1.setAttribute("x", sliderLeftX - 5);
// // 		sliderThumb1.setAttribute("width", sliderRightX - sliderLeftX + 11);
// // 		sliderThumb2.setAttribute("width", 0);
// // 		startText.setAttribute("text-anchor", "end");
// // 		endText.setAttribute("text-anchor", "start");
// // 	} else {
// // 		sliderThumb1.setAttribute("x", sliderMin - 5);
// // 		sliderThumb1.setAttribute("width", sliderRightX - sliderMin + 11);
// // 		sliderThumb2.setAttribute("x", sliderLeftX - 5);
// // 		sliderThumb2.setAttribute("width", sliderMax - sliderLeftX + 10);
// // 		startText.setAttribute("text-anchor", "start");
// // 		endText.setAttribute("text-anchor", "end");
// // 	}




// // 		var nowHours = now.getHours();
// // 		var nowMinutes = now.getMinutes();
// // 		var hoursBump=nowMinutes>30?1:0;

// // 		var start = new Date();
// // 		start.setHours(nowHours + startIndex + hoursBump);
// // 		var startHours = start.getHours();

// // 		var end = new Date();
// // 		end.setHours(startHours + (endIndex - startIndex + hoursBump));
// // 		var endHours = end.getHours();





// // 		if (startIndex < endIndex) {

// // 			durationText.innerHTML=endIndex-startIndex+" hrs";
// // 			var amps=Math.round(calculateAmps(endIndex-startIndex));
// // 			ampsText.innerHTML=amps+" amps";

// // 		} else {
// // 			sliderThumb1.setAttribute("x", sliderMin - 5);
// // 			sliderThumb1.setAttribute("width", sliderRightX - sliderMin + 11);
// // 			sliderThumb2.setAttribute("x", sliderLeftX - 5);
// // 			sliderThumb2.setAttribute("width", sliderMax - sliderLeftX + 10);
// // 			startText.setAttribute("text-anchor", "start");
// // 			endText.setAttribute("text-anchor", "end");
// // 			durationText.innerHTML=(endIndex+(24-startIndex))+" hrs";
// // 		}
// }

// function getX(e) {
// 	var mousePoint = battery.createSVGPoint();
// 	mousePoint.x = e.clientX;
// 	mousePoint = mousePoint.matrixTransform(battery.getScreenCTM().inverse());
// 	return mousePoint.x;
// }

// function getIndex(targetX) {
// 	return Math.round(
// 		((targetX - sliderMin) / sliderRange) * timeIncrements
// 	);
// }



// function addMinutes(date, minutes) {
//     return new Date(date.getTime() + minutes*60000);
// }
// function roundTime(minutes,date) {
//    let ms = 1000 * 60 * minutes; 
//   let roundedDate = new Date(Math.round(date.getTime() / ms) * ms);

//   return roundedDate
// }

// function onDrag(e) {
// 	if (isLeft) {
// 		leftIndex = getIndex(getX(e));
// 	} else {
// 		rightIndex = getIndex(getX(e));
// 	}
// 	drawTimeline(leftIndex, rightIndex);
// }


init();