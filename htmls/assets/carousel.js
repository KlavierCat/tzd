$(function(){

  
    var elems = $('#carousel li'),
    speed = 400,
    currentSelection = 0,
    timelineSelection = 0,
    $itemCount = elems.length,
    $timeline = $('#timeline li'),
    $itemWidth = elems.css('width').split('px')[0];



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

$('#side-nav li').bind('click', {type: 'quicknav'}, panCarousel);

$('#carousel').bind('mouseover', changeYear);


function changeYear(e){

	switch(e.target.className){
		case '2015':
			timelineSelection = 0;
			break;
		case '2018':
			timelineSelection = 1;
			break;
		case '2019':
			timelineSelection = 2;
			break;
		case '2020':
			timelineSelection = 3;
			break;
		case '2021':
			timelineSelection = 4;
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