(function(){
  // Our speech input element
  var speechElement = document.getElementById("speech");
  /**
   * Here we check is the if webkitSpeeh attribute is equal to true.
   * it might be safer to check for undefined, but this works ok in
   * the browsers I tested (safari, firefox, chrome).
   */
  if (speechElement.webkitSpeech !== true) {
    var overlay = document.getElementById('overlay');
    var image = document.getElementById('sucky-browser');
    // Ugly code, just writting as minimal code as possible :-p
    overlay.style.display = image.style.display = 'block';
    // TODO: Add the image here, that way we only load the image
    // for unsupported browsers.
  }
  else {
    /**
     * Here we attach a webkitspeechchange eventListener.
     * This will fire our callback function after the results are returned.
     */
    speechElement.addEventListener('webkitspeechchange', function (e) {
      if (e.type == 'webkitspeechchange' && e.results) {
        // We don't want to return the 1st value, so lets just
        // subtract one, and forgot arrays start counting at 0.
        var badResultsCount = e.results.length - 1;
        // I'm debating wheter it should be random, or the last.
        // For now I'm doing last.
        speechElement.value = e.results[badResultsCount].utterance;
      }
    }, false);
  }

  // Lets also prevent people from typing.
  speechElement.addEventListener('keypress', function (e) {
    e.preventDefault();
    var msg = document.getElementById('msg');
    msg.style.display = 'block';
  })
})();
