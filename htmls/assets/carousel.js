$(function(){
  
  	//initiate everything
	var $elems = $('#carousel li'),
	$carousel = $('#carousel'),
    speed = 400,
    evidence = getViewedEvidence(),
    diff = 0,
    currentSelection = 0,
    timelineSelection = 0,
    $itemCount = $elems.length,
    $timeline = $('#timeline li'),
    $even = $('#carousel li:even'),
    $odd = $('#carousel li:odd'),
    $quicknav = $('#quicknav a'),
    $itemWidth = $elems.css('width').split('px')[0];
    buildCarousel(evidence);

	$even.css({'margin-top' : '120px',
								'z-index' : '3',
								'opacity' : '0.7'});

	$odd.css({'z-index' : '2',
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
			$elems.eq(key)
			.css({'background-image' : 'url("timeline-previews/lock_v2.png"' + ')',
								'background-size' : '100%',
								'background-repeat' : 'repeat-x',
								'background-position' : 'center'} ).addClass('locked');
		}	

}


function panCarousel(e){
	
	
	if(e.data.direction == 'forward'){
	
		if(currentSelection == 92 || currentSelection == 93 || currentSelection == 94)
			currentSelection = 0;
		else if(currentSelection < 0)
			currentSelection = $itemCount-1;
		else
			currentSelection = (currentSelection === ($itemCount-1)) ? (currentSelection = 0) : 
			(currentSelection + 4)%($itemCount);
		//currentSelection = (currentSelection+4)%$itemCount;
		//modulos operator makes it so that currentSelection resets to 0 if it reaches end of array
		$carousel.animate({
			
			left: '-' + (currentSelection*$itemWidth) + 'px'
		}, speed);
		
		}else{
		if(currentSelection < 4 && currentSelection > 0)
			currentSelection = 0;
		else
			currentSelection = (currentSelection===0) ? ($itemCount-1) : (currentSelection-4)%($itemCount);
		
		
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


$quicknav.bind('mouseover', changeYear);

$quicknav.click(function(){
	$(this).children('li').toggleClass('clicked').end()
	.siblings('a').children('li').removeClass('clicked');
});

$elems.bind('mouseover', changeIndex);

/*
function filter(e){

	var locked = document.querySelectorAll('.locked');
}*/

function changeIndex(e){

	var temp = e.target.id,
	el = temp.substring(1,3);
	var inject = document.getElementById("evidenceIndex");
	$(inject).text('Evidence #' + el);
}


function changeYear(e){

	switch(e.target.className){
		case '0-14':
			timelineSelection = 0;
			break;
		case '15-29':
			timelineSelection = 1;
			break;
		case '30-44':
			timelineSelection = 2;
			break;
		case '45-59':
			timelineSelection = 3;
			break;
		case '60-74':
			timelineSelection = 4;
			break;
		case '75-89':
			timelineSelection = 5;
			break;
		case '90-94':
			timelineSelection = 6;
			break;
		default:
			break;
	}

	if($timeline.eq(timelineSelection).className != 'selected')
		$timeline.eq(timelineSelection).addClass('selected').siblings('li').removeClass('selected');
	
	}
});