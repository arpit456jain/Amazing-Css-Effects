var numItems = 5;

var svg = document.querySelector("svg");
var spacing = 25;
var radius = 8;
var strokeWidth=2;
var index = 0;
var ringList=[];
var initX = (300-spacing*(numItems-1))*.5;
var dot = createElement("circle",{cx:initX+(index*spacing),cy:100,fill:"#fff",r:radius-(strokeWidth*2)});
svg.appendChild(dot);
paginate();
disable(ringList[index]);
TweenMax.set(dot,{fill:ringList[index].color});

gotoIndex(3);
function onSelect(e){
  gotoIndex(e.target.index);
}
function gotoIndex(targetIndex){
  var distance= Math.abs(targetIndex-index)*spacing*.5;
  var duration=Math.min((distance/spacing)*.2,.4);
  TweenMax.to(dot,.15,{scaleX:1.5,scaleY:.5,transformOrigin:"bottom",ease:Sine.easeOut,yoyo:true,repeat:1});
  TweenMax.to(dot,duration,{delay:.175,fill:ringList[targetIndex].color,x:targetIndex*spacing,ease:Sine.easeInOut});
  TweenMax.to(dot,duration*.5,{delay:.175,y:-distance,ease:Sine.easeOut,yoyo:true,repeat:1,onComplete:squish});
  enable(ringList[index]);
  disable(ringList[targetIndex]);
  index=targetIndex;
}
function enable(target){
  target.setAttribute("pointer-events","all");
}
function disable(target){
  target.setAttribute("pointer-events","none");
}
function squish(){
  TweenMax.to(dot,.15,{scaleX:1.5,scaleY:.75,transformOrigin:"bottom",ease:Sine.easeOut,yoyo:true,repeat:1});
}


function paginate() {
  for (var i = 0; i < numItems; i++) {
    var randomColor = "hsl("+(((i/(numItems))*360))+", 65%, 55%)";
    var ring = createElement("circle", {
      cx: initX+(i * spacing),
      cy: "50%",
      fillOpacity: 0,
      r: radius,
      stroke: randomColor,
      cursor:"pointer",
      strokeWidth: strokeWidth,
    });
    ring.index=i;
    ringList.push(ring);
    ring.color = randomColor;
    ring.addEventListener("click",onSelect);
    svg.appendChild(ring);
  }
}

function setAttributes(element, attributes) {
  var keyword, key;
  for (keyword in attributes) {
    key = keyword.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    element.setAttributeNS(keyword === "xlink:href" ? "http://www.w3.org/1999/xlink" : null, key, attributes[keyword]);
  }
}

function createElement(type, attributes) {
  var element = document.createElementNS("http://www.w3.org/2000/svg", type);
  setAttributes(element, attributes);
  return element;
}