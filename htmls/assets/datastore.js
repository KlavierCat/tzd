//function to check if browser is capable of localstorage
function canPlay()
{
	var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

//function to check if user has played before
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

//function to reset the game to the beginning
function resetGame()
{
	var a = new Array(94);
	for (var i = 0; i < a.length; ++i) { a[i] = false; }
	localStorage["evidence"] = JSON.stringify(a);
}

//function that returns array of evidence in order
function getViewedEvidence()
{
	var evidence = JSON.parse(localStorage["evidence"]);	
	return evidence;
}

//function which updates evidence one item at a time
//parameter is number of evidence item


//function returns stage number
function getStage()
{

}

//function checks stage and updates as necessary
function setStage()
{

}

function parseUrl(){
	var pathname = {};
	pathname = location.pathname.split("/");
	pathname.reverse();
	return pathname[0].substring(0, 2);
}


function setViewedEvidence()
{
	var evidenceID = parseInt(parseUrl());
	var evidence = getViewedEvidence();
	evidence[evidenceID] = true;
	localStorage["evidence"] = JSON.stringify(evidence);
	alert(evidenceID);
}