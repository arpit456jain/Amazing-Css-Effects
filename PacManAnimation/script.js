var backButton = document.querySelector(".back-button");
backButton.addEventListener("click", start);
var pacData = {
  cx: 118,
  cy: 325,
  radius: 24,
  innerRadius: 12.7,
  angle: 0,
  lipAngle: Math.PI * 0.34 };


function draw() {
  let x = Math.cos(pacData.angle) * pacData.radius;
  let y = Math.sin(pacData.angle) * pacData.radius;

  let lipX = Math.cos(pacData.lipAngle) * pacData.innerRadius;
  let lipY = Math.sin(pacData.lipAngle) * pacData.innerRadius;

  let pathData = `M ${x + pacData.cx}, ${-y + pacData.cy}
								A ${pacData.radius}, ${pacData.radius}, 0, 0, 0, ${pacData.cx - pacData.radius}, ${pacData.cy}
								A ${pacData.radius}, ${pacData.radius}, 0, 0, 0, ${x + pacData.cx}, ${y + pacData.cy}
								M ${lipX + pacData.cx}, ${-lipY + pacData.cy}
								L ${pacData.cx - 6}, ${pacData.cy}, ${lipX + pacData.cx}, ${lipY + pacData.cy}`;

  //pathData = pathData.replace(/\s/g, "");

  backButton.setAttribute("d", pathData);
}

draw();

function start() {
  backButton.removeEventListener("click", start);
  var duration = 0.25;
  TweenMax.to(pacData, duration, {
    angle: Math.PI * 0.25,
    ease: Power2.easeInOut,
    onUpdate: draw,
    repeat: -1,
    yoyo: true });


  TweenMax.to(pacData, duration, {
    delay: duration,
    lipAngle: 0,
    ease: Power2.easeInOut,
    onUpdate: draw,
    repeat: -1,
    yoyo: true });


  TweenMax.to(pacData, duration * 0.1, {
    lipAngle: Math.PI * 0.25,
    ease: Power2.easeInOut,
    onUpdate: draw });


  TweenMax.to(pacData, duration, {
    delay: duration,
    innerRadius: pacData.radius,
    ease: Power2.easeInOut,
    onUpdate: draw });


  TweenMax.to("line", 15, {
    delay: duration,
    attr: { x2: 2000 },
    ease: Linear.easeNone });

  TweenMax.to(backButton, 15, {
    delay: duration -= 0.15,
    x: 1850,
    ease: Linear.easeNone });

  TweenMax.to("#instructions", 0.5, {
    autoAlpha: 0,
    ease: Power2.easeOut });

}