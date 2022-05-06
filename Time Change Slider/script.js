var digital = document.querySelector(".digital");
var time = { value: 0 };

const digitalUpdate = () => {
  let hours = Math.floor(time.value) % 12;
  if (hours === 0) {
    hours = 12;
  }
  let minutes = Math.floor(time.value * 60) % 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  let seconds = Math.floor(time.value * 60 * 60) % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  digital.textContent = `${hours}:${minutes}:${seconds}`;
};

var tl = gsap.timeline({
  paused: true,
  onStart: digitalUpdate,
  onUpdate: digitalUpdate,
  defaults: {
    ease: "none",
    duration: 60 * 60 * 24,
    transformOrigin: "bottom" } });



tl.to(time, {
  value: 24 });


tl.to(
".seconds",
{
  ease: "steps(86400)",
  rotation: 518400 },

0);

tl.to(
".big-hand",
{
  rotation: 8640 },

0);

tl.to(
".small-hand",
{
  rotation: 720 },

0);


const update = value => {
  const progress = value / 24;
  tl.progress(progress);
};