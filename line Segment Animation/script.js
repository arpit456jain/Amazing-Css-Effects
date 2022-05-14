var svg = document.querySelector("svg");
var segments = [];
var h2 = document.querySelector("h2");
var points = [
	[{
		x: 0.25,
		y: 0.25
	}, {
		x: 0.75,
		y: 0.75
	}],
	[{
		x: 0.25,
		y: 0.75
	}, {
		x: 0.75,
		y: 0.25
	}]
];
var pointIndex;
var segmentIndex;
var intersectionPoint;

function draw() {
	for (var i = 0; i < segments.length; i++) {
		var segment = segments[i];
		var data = points[i];
		var line = {};
		line.x1 = Math.round(window.innerWidth * data[0].x);
		line.y1 = Math.round(window.innerHeight * data[0].y);
		line.x2 = Math.round(window.innerWidth * data[1].x);
		line.y2 = Math.round(window.innerHeight * data[1].y);
		setAttributes(segment, {
			x1: line.x1,
			y1: line.y1,
			x2: line.x2,
			y2: line.y2
		});
		setAttributes(segment.controlA, {
			cx: line.x1,
			cy: line.y1
		});
		setAttributes(segment.controlB, {
			cx: line.x2,
			cy: line.y2
		});
		segment.line = line;
	}
	var intersection = getIntersection(segments[0].line, segments[1].line);
	var color = "red";
		var opacityA = .1;
		var opacityB = .1;
		var message = "";
	if (intersection) {
		opacityA = .2;
		opacityB = .2;
		if (!(intersection.segment1 || intersection.segment2)) {
			message = "No segments are intersecting.";
		} else {
			color = "orange";
			if (intersection.segment1) {
				message = "Point intersects segment 1.";
				opacityA = .5;
			}
			if (intersection.segment2) {
				message = "Point intersects segment 2.";
				opacityB = .5;
			}
			if (intersection.intersecting) {
				message = "Both segments are intersecting."
				color = "green";
				opacityA = opacityB = .8;
			}
		}
		setAttributes(intersectionPoint, {
			cx: intersection.x,
			cy: intersection.y,
			fill: color
		});
		
	}else{
		message="Lines are parallel."
	}
	
		setAttributes(segments[0], {
			opacity: opacityA
		});
		setAttributes(segments[1], {
			opacity: opacityB
		});
		h2.innerHTML = message;
}

function init() {
	for (var i = 0; i < points.length; i++) {
		var segment = createElement("line", {
			class: "segment"
		});
		segment.controlA = createElement("circle", {
			class: "control",
			r: 6
		})
		segment.controlB = createElement("circle", {
			class: "control",
			r: 6
		});
		segment.controlA.segmentIndex = segment.controlB.segmentIndex = i;
		segment.controlA.pointIndex = 0;
		segment.controlB.pointIndex = 1;
		svg.appendChild(segment);
		svg.appendChild(segment.controlA);
		svg.appendChild(segment.controlB);
		segment.controlA.addEventListener("mousedown", startDrag);
		segment.controlB.addEventListener("mousedown", startDrag);
		segments.push(segment);
	}
	intersectionPoint = createElement("circle", {
		class: "point",
		r: 6
	});
	svg.appendChild(intersectionPoint);
	draw();
}

init();
window.onresize = draw;

function startDrag(e) {
	segmentIndex = e.target.segmentIndex;
	pointIndex = e.target.pointIndex;
	window.addEventListener("mousemove", drag);
	window.addEventListener("mouseup", stopDrag);
}

function stopDrag(e) {
	window.removeEventListener("mousemove", drag);
	window.removeEventListener("mouseup", stopDrag);
}

function drag(e) {
	var point = points[segmentIndex][pointIndex];
	point.x = Math.min(Math.max(e.clientX / window.innerWidth, 0), 1);
	point.y = Math.min(Math.max(e.clientY / window.innerHeight, 0), 1);
	draw();
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

function getIntersection(segment1, segment2) {
	// segments contain 4 properties x1, y1, x2 and y2
	// calculate difference between segment points
	var dx1 = segment1.x2 - segment1.x1;
	var dy1 = segment1.y2 - segment1.y1;
	var dx2 = segment2.x2 - segment2.x1;
	var dy2 = segment2.y2 - segment2.y1;
	// calculate dot product
	var cx = segment1.x1 - segment2.x1;
	var cy = segment1.y1 - segment2.y1;
	var d = dy2 * dx1 - dx2 * dy1;
	if (d == 0) {
		// if parallel
		return null;
	}
	var ua = (dx2 * cy - dy2 * cx) / d;
	var ub = (dx1 * cy - dy1 * cx) / d;
	// check if point lands on segment 1
	var s1 = ua >= 0 && ua <= 1;
	// check if point lands on segment 2
	var s2 = ub >= 0 && ub <= 1;
	return {
		x: segment1.x1 + ua * dx1,
		y: segment1.y1 + ua * dy1,
		segment1: s1,
		segment2: s2,
		intersecting: s1 && s2
	};
}

TweenMax.to(points[1][1], 2, {
	x: 0.4,
	y: 0.5,
	onUpdate: draw,
	ease: Quint.easeInOut
});
TweenMax.to(points[0][1], 2, {
	x: 0.6,
	y: 0.4,
	onUpdate: draw,
	ease: Quint.easeInOut
});

TweenMax.to(points[1][1], 2, {
	delay: 2,
	x: 0.6,
	y: 0.6,
	onUpdate: draw,
	ease: Quint.easeInOut
});

TweenMax.to(points[1][1], 2, {
	delay: 4,
	x: 0.75,
	y: 0.25,
	onUpdate: draw,
	ease: Quint.easeInOut
});
TweenMax.to(points[0][1], 2, {
	delay: 4,
	x: 0.75,
	y: 0.75,
	onUpdate: draw,
	ease: Quint.easeInOut
});