function itlangspeak(word){
  langspeak('it',word);
}
function enlangspeak(word){
  langspeak('en',word);
}
function langspeak(lang, word){
  soundFileURL = 'http://www.translate.google.com/translate_tts?tl='+lang+'&q='+word;
  speak(soundFileURL,false);
}
function speak(soundFileURL, jQuery){
  //ElementID [hidden.element.sound]
  var embedWav = '<embed src="'+soundFileURL+'" type="audio/wav" height="0" width="0" autostart="1" loop="0"></embed>';
  if(jQuery){
    $('#hidden.element.sound').html(embedWav);
  }else{
    document.getElementById('hidden.element.sound').innerHTML=embedWav;
  }
}