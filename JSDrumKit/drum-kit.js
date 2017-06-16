window.addEventListener('keydown',function(e){
	console.log(e.keyCode)
	const audio = document.querySelector('audio[data-key="'+e.keyCode+'"]');
	const key = document.querySelector('.square[data-key="'+e.keyCode+'"]');
	
	if (!audio)
		return;
	key.classList.add('playing');
	audio.currentTime = 0; //rewind
	audio.play();
	console.log(audio)
});

var removeTransition = function(e){
	console.log(e);
	if (e.propertyName !== 'transform')
		return;

	this.classList.remove('playing');
}
const keys = document.querySelectorAll('.square');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));