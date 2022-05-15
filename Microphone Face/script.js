window.onload = function () {
    "use strict";
     var head = document.querySelector(".head");
  var mouth = document.querySelector(".mouth");
  var eyes = document.querySelector(".eyes");
    var h = document.getElementsByTagName('h1')[0];
    var report = 0;
    
    var soundAllowed = function (stream) {
        window.persistAudioStream = stream;
        h.innerHTML = "Thanks";
        h.setAttribute('style', 'opacity: 0;');
        var audioContent = new AudioContext();
        var audioStream = audioContent.createMediaStreamSource( stream );
        var analyser = audioContent.createAnalyser();
        audioStream.connect(analyser);
        analyser.fftSize = 1024;
      head.style.display="flex";

        var frequencyArray = new Uint8Array(analyser.frequencyBinCount);
        
        var doDraw = function () {
            requestAnimationFrame(doDraw);
            analyser.getByteFrequencyData(frequencyArray);
          	var adjustedLength;
          var value=0;
            for (var i = 0 ; i < 100; i++) {
              	value+=frequencyArray[i];
            }
          var average = value/100;
          var scale = Math.max(Math.min((average-10)/180,1),0.1);
          mouth.style.transform = `scaleY(${scale})`;
        }
        doDraw();
    }

    var soundNotAllowed = function (error) {
        h.innerHTML = "You must allow your microphone.";
        console.log(error);
    }
    
    navigator.getUserMedia({audio:true}, soundAllowed, soundNotAllowed);
  
  window.addEventListener('mousemove', e => {
  var translateX = ((e.offsetX/window.innerWidth)-0.5)*70;
    var translateY = ((e.offsetY/window.innerHeight)-0.5)*20;
   eyes.style.transform = `translate(${translateX}px,${translateY}px)`;
});

};

function blink(){
  var blinkDuration=0.15;
  gsap.to(".eye", {scaleY: 0.15, duration: blinkDuration,ease:"power2.out"});
  gsap.to(".eye", {scaleY: 1,delay:blinkDuration, duration: blinkDuration,ease:"power2.in", onComplete:()=>{setTimeout(blink,(Math.random()*1000)+800)}});
}

blink();