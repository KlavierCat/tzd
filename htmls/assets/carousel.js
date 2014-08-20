$(function(){
  
    var elems = $('#carousel li'),
    speed = 400,
    evidence = getViewedEvidence(),
    
    currentSelection = 0,
    timelineSelection = 0,
    $itemCount = elems.length,
    $timeline = $('#timeline li'),
    $itemWidth = elems.css('width').split('px')[0];
    buildCarousel(evidence);

function buildCarousel(evidence){

	for(var i = 0; i< evidence.length; i++)
	{
		updateElement(i, evidence[i]);
	}
	}

function updateElement(key, value)
{
		
		var index = key.toString();
		
		if(value == true)
		{
			elems.eq(key).css('background-image' , 'url("timeline-previews/' + index + '.jpg")' );
		}else{
			elems.eq(key).css('background-image' , 'url("timeline-previews/lock_v2.png"' + ')' );
		}	
}

/*
function updateElement(key, value){

	if(value == true){
		elems.eq(key).css("background-color", "red");
	}else{
		elems.eq(key).css("background-color", "yellow");
	}

}*/

function panCarousel(e){
	
	if(e.data.type == 'quicknav'){
		//do this
		var incrementIndex = 0;
		switch(e.target.className){
			case '2015':
				incrementIndex = 0;
				break;
			case '2018':
				incrementIndex = 5;
				break;
			case '2019':
				incrementIndex = 10;
				break;
			case '2020':
				incrementIndex = 15;
				break;
			default:
				incrementIndex = 20;
				break;
		}
		currentSelection = (incrementIndex)%$itemCount;
		$('#carousel').animate({
			marginLeft: '-' +(currentSelection*$itemWidth) + 'px'
		}, speed);
	}
	else{
	//e.data is the object which holds and processes passed in arguments
	//e.data.direction holds the direction : forward key-value pair

	if(e.data.direction == 'forward'){
		currentSelection = (currentSelection+1)%$itemCount;
		//modulos operator makes it so that currentSelection resets to 0 if it reaches end of array
		$('#carousel').animate({
			
			marginLeft: '-' + (currentSelection*$itemWidth) + 'px'
		}, speed);
		
		}else{
		
		currentSelection = (currentSelection===0) ? ($itemCount-1) : (currentSelection-1);
		$('#carousel').animate(		
		{
		marginLeft : '-' + (currentSelection*$itemWidth) + 'px'
		}, speed);

}
	
}
	
}


$('#navNext').bind('click', {direction: 'forward',
							 type: 'standardnav'}, panCarousel);

$('#navPrev').bind('click', {direction: 'backward',
								 type: 'standardnav'}, panCarousel);

$('#quicknav li').bind('click', {type: 'quicknav'}, panCarousel);

$('#carousel').bind('mouseover', changeYear);


function changeYear(e){

	switch(e.target.className){
		case '2015':
			timelineSelection = 0;
			break;
		case '2018-a':
			timelineSelection = 1;
			break;
		case '2018-b':
			timelineSelection = 2;
			break;
		case '2019':
			timelineSelection = 3;
			break;
		case 'disaster':
			timelineSelection = 4;
			break;
		case 'IDM':
			timelineSelection = 5;
			break;
		case 'Outbreak':
			timelineSeleciton = 6;
			break;
		case 'Quarantine':
			timelineSeleciton = 7;
			break;
		case 'Evac':
			timelineSelection = 8;
			break;
		case 'End':
			timelineSelection = 9
			break;
		default:
			break;
	}

		if($('#timeline li').eq(timelineSelection).className != 'selected')
		{
		$('#timeline li').eq(timelineSelection).siblings()
		.addClass('notSelected').removeClass('selected');	
		$('#timeline li').eq(timelineSelection).addClass('selected').removeClass('notSelected');
		
		}
	}
});