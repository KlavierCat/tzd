
function play(){
//console.log(sessionStorage.getItem("mute"))
console.log(sessionStorage.getItem("mute"))
var song = document.getElementById("song");
var mute =	sessionStorage.getItem("mute");
if(mute === "false"){
	song.muted=true}else{song.muted=false};	
//sessionStorage.removeItem("mute")
song.currentTime = sessionStorage.getItem("store")
$("#song")[0].volume = 0;
$("#song").animate({volume: 0.2}, 0);
console.log(mute)
song.play();
updateEvidence();
}

window.onload= play;


function resume(){

var song = document.getElementById("song");



if (typeof(Storage) != "undefined") {
    // Store
    sessionStorage.setItem("store", song.currentTime);
    $("#song").animate({volume: 0}, 100);
    
    console.log(sessionStorage.getItem("store"))
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}

}

//mute and unmute evidence and map page
$( document ).ready(function() {
var soundOn = false
var soundOff = true
$("#corner-mute-true").hide();

$('#corner-mute-true, #corner-mute-false').on('click',
                          function() 
                       {
                          $('#corner-mute-true, #corner-mute-false').toggle();   
                         //console.log(document.getElementById("song").muted)
                         sessionStorage.setItem("mute", document.getElementById("song").muted);
                         console.log(sessionStorage.getItem("mute"))
                         
                       }
                       
                       );});
                       
function toggleMuteAudio(){
   $("#song").prop("muted",!$("#song").prop("muted")); 
  
   
   
}


	
//console.log(mute)
	



