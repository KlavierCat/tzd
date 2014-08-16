
var testBrowser = canPlay();

//testBrowser = false;

if(testBrowser == false)
{
	//alert("you cannot play this game");
	document.getElementById('lightbox1').style.display='inline';
	document.getElementById('submit').style.display='none';
}
else{

	var playedBefore = alreadyPlayed();

	//playedBefore = true;

	if(playedBefore == true)
	{
		document.getElementById('lightbox').style.display='inline';
	}
}

function continueOn()
{
	document.getElementById('linky').innerHTML="CONTINUE";
	document.getElementById('lightbox').style.display='none';
}

function startOver()
{
	resetGame();
	document.getElementById('lightbox').style.display='none';
}