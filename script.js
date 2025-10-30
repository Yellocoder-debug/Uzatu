
// Basic JS: nothing complex — could add smooth scroll or analytics here.
document.addEventListener('DOMContentLoaded', function(){
  // If audio placeholder exists but no source, hide controls
  var audio = document.querySelector('audio');
  if(audio){
    var src = audio.querySelector('source');
    if(!src || !src.getAttribute('src') || src.getAttribute('src').includes('placeholder')){
      // keep it visible so user can replace, but show a note in console
      console.log('Replace audio-placeholder.mp3 with your mp3 or point to a hosted file or YouTube embed.');
    }
  }
});
