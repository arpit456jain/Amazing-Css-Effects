var track = document.getElementById("track");
var coaster = document.getElementById("coaster");
var progress = {
  percentage: 0
};
TweenMax.to(progress, 3, {
  repeatDelay: 2,
  percentage: 1,
  repeat: -1,
  ease: Quint.easeInOut,
  onUpdate: update
});

function update() {
  var trackLength = track.getTotalLength();
  var point = track.getPointAtLength(progress.percentage * trackLength);
  coaster.setAttribute("cx", point.x);
  coaster.setAttribute("cy", point.y);
}