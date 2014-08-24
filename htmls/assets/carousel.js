$(function(){
  
	var $elems = $('#carousel li'),
	$carousel = $('#carousel'),
    speed = 400,
    evidence = getViewedEvidence(),
    diff = 0,
    currentSelection = 0,
    timelineSelection = 0,
    $itemCount = $elems.length,
    $timeline = $('#timeline li'),
    $itemWidth = $elems.css('width').split('px')[0];
    buildCarousel(evidence);

	$('#carousel li:even').css({'margin-top' : '120px',
								'z-index' : '3',
								'opacity' : '0.7'});

	$('#carousel li:odd').css({'z-index' : '2',
								'opacity' : '0.7'});
if(window.location.hash){
	currentSelection = parseInt((location.hash).split('#')[1]);
	$carousel.animate({
		left: '-' + (currentSelection*$itemWidth) + 'px'
	}, 1);
}else{
//do nothing
}

window.onhashchange = function hashPan(){

	
	currentSelection = parseInt((location.hash).split('#')[1]);

	var el = $elems.eq(currentSelection);

		$carousel.animate({
			left: '-' + (currentSelection*$itemWidth) + 'px'
		}, 400);
};



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
			$elems.eq(key).css({'background-image' : 'url("timeline-previews/' + index + '.jpg")',

									'background-size' : '110%'} );

		}else{
			$elems.eq(key).css({'background-image' : 'url("timeline-previews/lock_v2.png"' + ')',
								'background-size' : '100%',
								'background-repeat' : 'repeat-x',
								'background-position' : 'center'} );
		}	

}




function panCarousel(e){
	
	
	if(e.data.direction == 'forward'){
	

		currentSelection = (currentSelection === ($itemCount-1)) ? (currentSelection = 0) : 
		(currentSelection + 4)%($itemCount);
		if(currentSelection < 0)
			currentSelection = currentSelection+94;
		
		//currentSelection = (currentSelection+4)%$itemCount;
		//modulos operator makes it so that currentSelection resets to 0 if it reaches end of array
		$carousel.animate({
			
			left: '-' + (currentSelection*$itemWidth) + 'px'
		}, speed);
		
		}else{
		
		currentSelection = (currentSelection===0) ? ($itemCount-1) : (currentSelection-4)%($itemCount);
		if(currentSelection < 0)
			currentSelection = currentSelection+94;
		
		$carousel.animate(		
		{
		left : '-' + (currentSelection*$itemWidth) + 'px'
		}, speed);

}
	
}
	
//}


$('#navNext').bind('click', {direction: 'forward',
							 type: 'standardnav'}, panCarousel);

$('#navPrev').bind('click', {direction: 'backward',
								 type: 'standardnav'}, panCarousel);

$('#quicknav a li').click(function(e){
	$(this).toggleClass('activeLink').siblings()
	.removeClass('activeLink');
}).bind('mouseover', changeYear);

$carousel.bind('mouseover', changeYear);


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
			timelineSelection = 6;
			break;
		case 'Quarantine':
			timelineSelection = 7;
			break;
		case 'Evac':
			timelineSelection = 8;
			break;
		case 'End':
			timelineSelection = 9;
			break;
		default:
			break;
	}

		if($timeline.eq(timelineSelection).className != 'selected')
		{
		$timeline.eq(timelineSelection).toggleClass('selected').siblings().toggleClass('selected');
		$timeline.eq(timelineSelection).siblings()
		.addClass('notSelected').removeClass('selected');	
		$timeline.eq(timelineSelection).addClass('selected').removeClass('notSelected');
		
		}
	}
});