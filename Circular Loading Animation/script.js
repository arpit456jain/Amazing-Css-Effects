TweenMax.to("svg",1.5,{scale:1.1,ease:Sine.easeInOut,repeat:-1,yoyo:true});
TweenMax.staggerTo(".sparks line", .4, {
	"stroke-dashoffset": 395,
	yoyo: true,
	repeat: -1,
	ease: Sine.easeInOut
}, .1);

var orbits = document.querySelectorAll(".orbits g");
for (var o = 0; o < orbits.length; o++) {
	var orbit = orbits[o];
	var ellipsis = [].slice.call(orbit.querySelectorAll("ellipse"));
	var electrons = [].slice.call(orbit.querySelectorAll(".electron"));
	var ry = (Number(ellipsis[0].getAttribute("ry")) + Number(ellipsis[1].getAttribute("ry"))) / 2;
	var rx = Number(ellipsis[0].getAttribute("rx"));
	var duration = 3;
	var delay = o * duration * .5;
	var direction = orbit.getAttribute("data-direction");
	direction=direction?1:-1;
	TweenMax.set(electrons, {
		attr: {
			cx: 0,
			cy: 0
		},
		transformOrigin: "center"
	});
	var ex0 = TweenMax.fromTo(electrons[0], duration, {
		x: -rx*direction
	}, {
		x: rx*direction,
		delay: (duration * .5) + delay,
		ease: Sine.easeInOut,
		repeat: -1,
		yoyo: true
	});
	var ex1 = TweenMax.fromTo(electrons[1], duration, {
		x: rx*direction
	}, {
		x: -rx*direction,
		delay: (duration * .5) + delay,
		ease: Sine.easeInOut,
		repeat: -1,
		yoyo: true
	});
	var ey0 = TweenMax.fromTo(electrons[0], duration, {
		y: ry*direction,
		scale: .8
	}, {
		scale: 1.2,
		y: -ry*direction,
		delay: delay,
		ease: Sine.easeInOut,
		repeat: -1,
		yoyo: true
	});
	var ey1 = TweenMax.fromTo(electrons[1], duration, {
		y: -ry*direction,
		scale:1.2
	}, {
		y: ry*direction,
		scale:.8,
		delay: delay,
		ease: Sine.easeInOut,
		repeat: -1,
		yoyo: true
	});
	ex0.progress(5 + delay + (duration * .5));
	ey0.progress(5 + delay);
	ex1.progress(5 + delay + (duration * .5));
	ey1.progress(5 + delay);
	var timeScale = 3;
	ex0.timeScale(timeScale);
	ex1.timeScale(timeScale);
	ey1.timeScale(timeScale);
	ey0.timeScale(timeScale);
}