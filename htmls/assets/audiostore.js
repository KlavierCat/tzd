$(document).ready(function() {
  var song = document.getElementById('song');
  var mute = sessionStorage.getItem('mute');

  if (mute == 'true') {
	  song.muted = true;
  } else {
    song.muted = false;
  };

  $('#corner-mute-true').hide();

  $('#corner-mute-true, #corner-mute-false').click(function() {
    $(this).toggle().siblings().toggle();
  });

  song.addEventListener('canplay', function playSong() {
    song.currentTime = sessionStorage.getItem('store');
    song.volume = 0.2;
    song.play();
    updateEvidence();
  }, false);

  $('#corner-mute').click(function() {
    if (!song.muted) {
      sessionStorage.setItem('store', song.currentTime);
  	  sessionStorage.setItem('mute', 'true');
      song.muted = true;
    } else {
      song.currentTime = sessionStorage.getItem('store');
  	  sessionStorage.setItem('mute', 'false');
      song.muted = false;
    }
  });

  function resume() {
    if (typeof(Storage) != 'undefined') {
      // Store
      song.currentTime = sessionStorage.getItem('store');
      song.volume = 0.2;
      song.play();
      updateEvidence();
    } else {
      document.getElementById('result').innerHTML = 'Sorry, your browser does not support Web Storage...';
    }
  }
});

$(window).unload(function() {
  var song = document.getElementById('song');
  sessionStorage.setItem('store', song.currentTime)
});