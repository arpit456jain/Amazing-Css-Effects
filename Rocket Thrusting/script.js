var container = document.querySelector('.container');
var jetBubbles = document.getElementsByClassName('jetBubble');
var rocketManSVG = document.querySelector('.rocketManSVG');
var shakeGroup = document.querySelector('.shakeGroup');
var star = document.querySelector('.star');
var satellite = document.querySelector('.satellite');
var astronaut = document.querySelector('.astronaut');
var starContainer = document.querySelector('.starContainer');
var badgeLink = document.querySelector('#badgeLink');

TweenMax.set(container, {
  position:'absolute',
  top:'50%',
  left:'50%',
  xPercent:-50,
  yPercent:-50
})

TweenMax.to(astronaut, 0.05, {
  y:'+=4',
  repeat:-1, 
  yoyo:true
})
var mainTimeline = new TimelineMax({repeat:-1});
var mainSpeedLinesTimeline = new TimelineMax({repeat:-1, paused:false});

mainTimeline.timeScale(2);

function createJets(){
  TweenMax.set(jetBubbles, {
    attr:{
      r:'-=5'
    }
  })
 //jet bubbles
  for(var i = 0; i < jetBubbles.length; i++){    
    var jb = jetBubbles[i];    
    var tl = new TimelineMax({repeat:-1});
    tl.to(jb, 1 , {
      attr:{
        r:'+=15'
      },
      ease:Linear.easeNone
    })
    .to(jb, 1 , {
      attr:{
        r:'-=15'
      },
      ease:Linear.easeNone
    })
    
    mainTimeline.add(tl, i/4)
  }
  //speed lines
	for(var i = 0; i < 7; i++){
    var sl = document.querySelector('#speedLine' + i);

    var stl = new TimelineMax({repeat:-1, repeatDelay:Math.random()});
    stl.set(sl, {
      drawSVG:false
    })
    .to(sl, 0.05, {
      drawSVG:'0% 30%',
      ease:Linear.easeNone
    })
    .to(sl, 0.2, {
      drawSVG:'70% 100%',
      ease:Linear.easeNone
    })  
    .to(sl, 0.05, {
      drawSVG:'100% 100%',
      ease:Linear.easeNone
    })
     .set(sl, {
      drawSVG:'-1% -1%'
    });

    mainSpeedLinesTimeline.add(stl, i/23);
}  
  //stars
	for(var i = 0; i < 7; i++){
    
    var sc = star.cloneNode(true);
    starContainer.appendChild(sc);
    var calc = (i+1)/2;
   
    TweenMax.fromTo(sc, calc, {
      x:Math.random()*600,
      y:-30,
      scale:3 - calc
    }, {
      y:(Math.random() * 100) + 600,
      repeat:-1,
      repeatDelay:1,
      ease:Linear.easeNone
    })
  }
  
  rocketManSVG.removeChild(star);
}


var satTimeline = new TimelineMax({repeat:-1});
satTimeline.to(satellite, 46, {
  rotation:360,
  transformOrigin:'50% 50%',
  ease:Linear.easeNone
})

TweenMax.staggerTo('.pulse', 0.8, {
  alpha:0,
  repeat:-1,
  ease:Power2.easeInOut,
  yoyo:false
}, 0.1);

TweenMax.staggerTo('.satellitePulse', 0.8, {
  alpha:0,
  repeat:-1,
  ease:Power2.easeInOut,
  yoyo:false
}, 0.1)

createJets();