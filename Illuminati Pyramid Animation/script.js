var pupil,outline,eyeMask,eyeLash;
var outlinePath={valueY:57.3};
var pathString;

////// Init
window.onload = function () {
  pupil= document.getElementById("pupil");
  outline= document.getElementById("outline");
  eyeMask= document.getElementById("eyeMaskReference");
  eyeLash= document.getElementById("eyeLash");
  var pathString=outline.getAttribute("d");
  outlinePath.prefix=pathString.substring(0,pathString.indexOf("57.3,61.1,57.3"));
  outlinePath.suffix=pathString.substring(pathString.indexOf("57.3,61.1,57.3")+14,pathString.length);
  animatePupil();
  animateBlink();
};
function animatePupil(){
  var x=((Math.random()*50)-25)+100;
  var y=((Math.random()*50)-25)+100;
  TweenMax.to(pupil,.3,{delay:(Math.random()*3)+.1,attr:{cx:x,cy:y},ease:Quint.easeInOut,onComplete:animatePupil})
}
function animateBlink(){
  var delay=(Math.random()*3)+1;
  TweenMax.to(outlinePath,.2,{delay:delay,valueY:140,ease:Quint.easeInOut,onUpdate:updatePath});
  TweenMax.to(outlinePath,.2,{delay:delay+.2,valueY:57.3,ease:Quint.easeOut,onUpdate:updatePath,onComplete:animateBlink});
  TweenMax.to(eyeLash,.2,{delay:delay,scaleY:-1,transformOrigin:"50% 130%",ease:Quint.easeInOut});
  TweenMax.to(eyeLash,.2,{delay:delay+.2,scaleY:1,transformOrigin:"50% 130%",ease:Quint.easeOut});
}
function updatePath(object,path){
  var string=outlinePath.prefix+outlinePath.valueY+",61.1,"+outlinePath.valueY+outlinePath.suffix;
  outline.setAttribute("d",string);
  eyeMask.setAttribute("d",string);
}