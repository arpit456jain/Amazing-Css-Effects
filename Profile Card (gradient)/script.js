const q = (el) => { return document.querySelector(el) }
q("main").addEventListener('click', toggleOpen)
function toggleOpen(){
	q('main').style.cursor = 'default'
	q('main').style.height = '400px'
	q('.logo').style.marginTop = '-45px'
	q('.logo').style.width = '90px'
	q('.logo').style.height = '90px'
	q('.logo').style.boxShadow = '2.5px 2.5px 5px #151515, -2.5px -2.5px 5px #333'
	setTimeout(function(){
		q(".hidden").style.opacity = '1'
		q('svg').style.opacity = '1'
	}, 150)
	setTimeout(function(){
		q(".skill-div1").style.width = '100%'
		q(".skill-div2").style.width = '55%'
		q(".skill-div3").style.width = '75%'
	}, 300)
	q("main").removeEventListener('click', toggleOpen)
}
