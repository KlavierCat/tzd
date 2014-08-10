$(function(){

  
    var elems = $('#carousel li'),
    speed = 400,
    currentSelection = 0,
    timelineSelection = 0,
    $itemCount = elems.length,
    $timeline = $('#timeline li'),
    $itemWidth = elems.css('width').split('px')[0];


function panCarousel(e){
	
	//e.data is the object which holds and processes passed in arguments
	//e.data.direction holds the direction : forward key-value pair

	if(e.data.direction == 'forward'){
		currentSelection = (currentSelection+1)%$itemCount;
		//modulos operator makes it so that currentSelection resets to 0 if it reaches end of array
		$('#carousel').animate({
			
			marginLeft: '-' + (currentSelection*$itemWidth) + 'px'
		}, speed);
		
		//changeTimeline();

		

		}else{
		
		//fixed an issue, when array resets to itemCount it should take 1 off of it, because
		//compooters count from 0, not 1
		currentSelection = (currentSelection===0) ? ($itemCount-1) : (currentSelection-1);
		$('#carousel').animate(		
		{
		marginLeft : '-' + (currentSelection*$itemWidth) + 'px'
		}, speed);


		//changeTimeline();

	
}
	
	

}


$('#navNext').bind('click', {direction: 'forward'}, panCarousel);
$('#navPrev').bind('click', {direction: 'backward'}, panCarousel);

$('#carousel').bind('mouseover', doShit);


function doShit(e){

	if(e.target.className == '2015')
			timelineSelection = 0;
			
		else if(e.target.className == '2018')
			timelineSelection = 1;
		
		else if(e.target.className == '2019')
			timelineSelection = 2;

		else if(e.target.className == '2020')
			timelineSelection = 3;
		
		else if(e.target.className == '2021')//it's 2021
			timelineSelection = 4;
		else
			return;

		if($('#timeline li').eq(timelineSelection).className != 'selected')
		{

			/*
		$(this).siblings('li').addClass('notSelected').removeClass('selected').fadeOut(10);	
		$(this).addClass('selected').removeClass('notSelected').fadeIn(400);*/
		
		
		$('#timeline li').eq(timelineSelection).siblings()
		.addClass('notSelected').removeClass('selected')
		.fadeOut(10);	
		$('#timeline li').eq(timelineSelection).addClass('selected').removeClass('notSelected').fadeIn(400);
		
		}
		//$("timeline li:not(this)").addClass('notSelected');
//			.css('display', 'none');
		
	}
});