var TRANSITION_DURATION = 200, // In milliseconds
	THIRD_BTN_DELAY = 30000,
	gameScreen,
	loseScreen,
	thirdBtnTimeout;

function init() {
	gameScreen = document.getElementById('gameScreen');
	loseScreen = document.getElementById('loseScreen');
	
	document.getElementById('aboutBtn').onclick = showInfo;
	document.getElementById('rightBtn').onclick = lose;
	document.getElementById('happyBtn').onclick = lose;
	document.getElementById('thirdBtn').onclick = lose;
	document.getElementById('playAgainBtn').onclick = reset;
	
	thirdBtnTimeout = setTimeout(showThirdBtn, THIRD_BTN_DELAY);
}

function showThirdBtn() {
	document.getElementById('thirdBtn').style.display = 'inline-block';
}

function lose() {
	// Stop the third button timer.
	if (thirdBtnTimeout) {
		clearTimeout(thirdBtnTimeout);
		thirdBtnTimeout = undefined;
	}
	// Switch to the lose screen.
	loseScreen.style.display = 'block';
	loseScreen.offsetWidth; // Force a CSS reflow.
	loseScreen.classList.add('active');
	setTimeout(function () {
		gameScreen.style.display = 'none';
		// Hide the third button.
		document.getElementById('thirdBtn').style.display = 'none';
	}, TRANSITION_DURATION);
}

function reset() {
	// Hide the lose screen.
	loseScreen.classList.remove('active');
	gameScreen.style.display = 'block';
	setTimeout(function () {
		loseScreen.style.display = 'none';
		// Reset the third button timer.
		thirdBtnTimeout = setTimeout(showThirdBtn, THIRD_BTN_DELAY);
	}, TRANSITION_DURATION);
}

function showInfo() {
	alert('Initial concept from a joke suggestion by Andy Phelps, with help from Rob Clifford.  Programmed by Zachary Yaro.');
}


window.onload = init;