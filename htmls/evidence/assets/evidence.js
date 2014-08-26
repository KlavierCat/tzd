function updateEvidence()
{ 
	var evidence = getViewedEvidence();
	
	var evidenceID = parseInt(parseUrl());
	
	if(evidence[evidenceID] != true)
	{
		setViewedEvidence(evidenceID); 
				
		document.getElementById("animation").className += " load";
		//$("#animation").toggleClass( "load" );
			
		setTimeout(function(){flashIcon(false)}, 1500);
		setTimeout(function(){flashIcon(true)}, 1750);
		setTimeout(function(){flashIcon(false)}, 2000);
		setTimeout(function(){flashIcon(true)}, 2250);
		setTimeout(function(){flashIcon(false)}, 2500);
		//setTimeout(function(){flashIcon(true)}, 3000);
		
		//document.getElementById("inventory-corner").className += "afteranimation";
		//$("#inventory-corner").toggleClass( "afteranimation" );
		
	}
	else
	{
		document.getElementById("animation").style.display='none';
	}
};
	
function flashIcon(flashon)
{
	if(flashon == false)
	{
		document.getElementById("inventory-corner").style.backgroundImage = "url(../images/icon_inventory_hover.png)";
		flashon = true;
	}
	else if(flashon == true)
	{
		document.getElementById("inventory-corner").style.backgroundImage = "url(../images/icon_inventory.png)";
		flashon = false;
	}
}