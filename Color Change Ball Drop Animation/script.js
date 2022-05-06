TweenMax.from("circle", 1,{y:-60,ease:Bounce.easeOut,onComplete:turnRed});


function turnRed(){
	TweenMax.to("circle",0.6,{fill:"hsl(60,100,50)"})
}