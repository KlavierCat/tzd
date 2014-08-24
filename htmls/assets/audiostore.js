
function play(){

var song = document.getElementById("song");

song.currentTime = sessionStorage.getItem("store")
$("#song")[0].volume = 0;
$("#song").animate({volume: 0.6}, 2000);
song.play();

}
window.onload= play;


function resume(){
var song = document.getElementById("song");


if (typeof(Storage) != "undefined") {
    // Store
    sessionStorage.setItem("store", song.currentTime);
    
    console.log(sessionStorage.getItem("store"))
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

}

//mute and unmute evidence and map page
$( document ).ready(function() {
$("#corner-mute-true").hide();

$('#corner-mute-true, #corner-mute-false').on('click',
                          function() 
                       {
                           $('#corner-mute-true, #corner-mute-false').toggle();
                           $('#corner-mute-true, #corner-mute-false',opener.document).toggle();
                           
                           
                           if(window.opener.document.getElementById('song').muted===true){
								window.opener.document.getElementById('song').muted=false}else{
								window.opener.document.getElementById('song').muted=true}
                       }
                       );});
                       
function toggleMuteAudio(){
    $("#song").prop("muted",!$("#song").prop("muted"));
    
    
    
}





