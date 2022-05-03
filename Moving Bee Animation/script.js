var ease = Sine.easeInOut;
var duration = 0.1;

// adjust body path data
TweenMax.to(".body", duration, {
	attr: {
		d: "M150,0c0,0,-25,0,-48,10"
	},
	repeat: -1,
	yoyo: true,
	ease: ease
});

// rotate entire svg
TweenMax.fromTo("svg", duration, {
	rotation: -5
}, {
	rotation: 5,
	repeat: -1,
	yoyo: true,
	ease: ease
});