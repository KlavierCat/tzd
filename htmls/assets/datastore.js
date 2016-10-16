/* function to check if browser is capable of localstorage */
function canPlay() {
	var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch(e) {
    return false;
  }
}

/* function to check if user has played before */
function alreadyPlayed()
{
	try {
		var evidence = getViewedEvidence();
		for (var i = 0; i < evidence.length; ++i) {
			if(evidence[i] == true){
				return true;
			}
		}
		return false;
	} catch(e) {
		resetGame();
		return false;
	}
}

/* function to reset the game to the beginning */
function resetGame() {
	var a = new Array(95);
	for (var i = 0; i < a.length; ++i) { a[i] = false; }
	localStorage["evidence"] = JSON.stringify(a);

	var stage = 0;
	localStorage["stage"] = JSON.stringify(stage);
}

/* function that returns array of evidence in order */
function getViewedEvidence() {
	var evidence = JSON.parse(localStorage["evidence"]);
	return evidence;
}

/* function returns stage number */
function getStage() {
	var stage = parseInt(JSON.parse(localStorage["stage"]));
	return stage;
}

/* function checks stage and updates as necessary */
function setStage() {
	var stage = getStage();
	var evidence = getViewedEvidence();

	var trueCounter = 0;

	for (i=0; i<95; i++) {
		if (evidence[i]==true){
			trueCounter = trueCounter + 1;
		}
	}

	switch (stage) {
		case 0:
			if (trueCounter >= 1 && trueCounter <= 2) {
				stage = 1;
				localStorage["stage"] = JSON.stringify(stage);
			}
			break;
		case 1:
			if (trueCounter >= 3 && trueCounter <=5) {
				stage = 2;
				localStorage["stage"] = JSON.stringify(stage);
			}
			break;
		case 2:
			if (trueCounter >= 6 && trueCounter <=9) {
				stage = 3;
				localStorage["stage"] = JSON.stringify(stage);
			}
			break;
		case 3:
			if (trueCounter >= 10 && trueCounter <= 15) {
				stage = 4;
				localStorage["stage"] = JSON.stringify(stage);
			}
			break;
		case 4:
			if (trueCounter >= 16) {
				stage = 5;
				localStorage["stage"] = JSON.stringify(stage);
			}
			break;
	}
}

function parseUrl() {
	var pathname = {};
	pathname = location.pathname.split("/");
	pathname.reverse();
	return pathname[0].substring(0, 2);
}

function setViewedEvidence(evidenceID) {
	try {
		//var evidenceID = parseInt(parseUrl());
		var evidence = getViewedEvidence();
		evidence[evidenceID] = true;
		localStorage["evidence"] = JSON.stringify(evidence);

		setStage();
	} catch(e) {
		//i think this gets called if the user has gone straight to
		//an evidence page without passing through the home page
		//this means the data store was not setup correctly
		//we need them to go to the home page so we might need a
		//redirect here
	}
}