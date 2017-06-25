var secondhand = document.querySelector('.second-hand');
var minuteHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');


function setDate(){
	
	const now = new Date();
	const seconds = now.getSeconds();
	const mins = now.getMinutes();
	const hours = now.getHours();
	
	if ((seconds%60)-1 == 0 || seconds%60 == 0){
		console.log('true');
		secondhand.style.transition = null;
	}
	else{
		secondhand.style.transition = "all 0.5s";
		secondhand.style.transitionTimingFunction = 'cubic-bezier(0.1,2.7,0.58,1)';
	}
	const secDegrees = seconds*6 + 90;
	const minDegrees = mins*6 + 90;
	const hourDegrees = hours*30 + 90;

	secondhand.style.transform = 'rotate('+secDegrees+'deg)';
	minuteHand.style.transform = 'rotate('+minDegrees+'deg)';
	hourHand.style.transform = 'rotate('+hourDegrees+'deg)';
}

setInterval(setDate,1000);