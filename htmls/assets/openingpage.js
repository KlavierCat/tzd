
var testBrowser = canPlay();

//testBrowser = false;

if(testBrowser == false)
{
	//alert("you cannot play this game");
	document.getElementById('lightbox1').style.display='inline';
	document.getElementById('submit').style.display='none';
}


function showStory()
{
	document.getElementById('lightbox').style.display='inline';
	document.getElementById('submit').style.display='none';
	var playedBefore = alreadyPlayed();
	//playedBefore = true;

	if(playedBefore == true)
	{
			document.getElementById('replay').style.display='inline';
	}else
	{
		document.getElementById('first_play').style.display='inline';
	}
			
}
	
function continueOn()
{
	location.href='map.html';
}

function startOver()
{
	resetGame();
	location.href='map.html';
	
}

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	         .register('service-worker.js')
	         .then(function() {console.log('Service Worker Registered.');});
}