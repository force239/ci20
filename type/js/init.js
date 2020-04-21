$(document).ready(function(){

var entryCount = 0;
var displayCount = 0;

var lastdate = (new Date()).getTime();

  //capture key presses
  $(document).on("keypress", function(e){
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters
    var char = String.fromCharCode(e.which);
    // console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing" + displayCount);
    createElement(char);

    function createElement(k){
     var elem = $('#cursor');

     // Uppercase Letters
    if (k == "A"){
      elem.before('<span class="inner">A</span><span class="inner">A</span><span class="inner">A</span><span class="inner">A</span>');
     }
     if (k == "B") {
      elem.before('<span class="innerB">B</span><span class="inner">B</span><span class="inner">B</span><span class="inner">B</span>');
     }
     if (k == "C") {
     elem.before('<span class="inner">C</span><span class="inner">C</span><span class="inner">C</span><span class="inner">C</span>');
     }
     if (k == "D") {
     elem.before('<span class="inner">D</span><span class="inner">D</span><span class="inner">D</span><span class="inner">D</span>');
     }
     if (k == "E") {
     elem.before('<span class="inner">E</span><span class="inner">E</span><span class="inner">E</span><span class="inner">E</span>');
     }
     if (k == "F") {
     elem.before('<span class="inner">F</span><span class="inner">F</span><span class="inner">F</span><span class="inner">F</span>');
     }
     if (k == "G") {
     elem.before('<span class="inner">G</span><span class="inner">G</span><span class="inner">G</span><span class="inner">G</span>');
     }
     if (k == "H") {
     elem.before('<span class="inner">H</span><span class="inner">H</span><span class="inner">H</span><span class="inner">H</span>');
     }
     if (k == "I") {
     elem.before('<span class="inner">I</span><span class="inner">I</span><span class="inner">I</span><span class="inner">I</span>');
     }
     if (k == "J") {
     elem.before('<span class="inner">J</span><span class="inner">J</span><span class="inner">J</span><span class="inner">J</span>');
     }
     if (k == "K") {
     elem.before('<span class="inner">K</span><span class="inner">K</span><span class="inner">K</span><span class="inner">K</span>');
     }
     if (k == "L") {
     elem.before('<span class="inner">L</span><span class="inner">L</span><span class="inner">L</span><span class="inner">L</span>');
     }
     if (k == "M") {
     elem.before('<span class="inner">M</span><span class="inner">M</span><span class="inner">M</span><span class="inner">M</span>');
     }
     if (k == "N") {
     elem.before('<span class="inner">N</span><span class="inner">N</span><span class="inner">N</span><span class="inner">N</span>');
     }
     if (k == "O") {
     elem.before('<span class="inner">O</span><span class="inner">O</span><span class="inner">O</span><span class="inner">O</span>');
     }
     if (k == "P") {
     elem.before('<span class="inner">P</span><span class="inner">P</span><span class="inner">P</span><span class="inner">P</span>');
     }
     if (k == "Q") {
     elem.before('<span class="inner">Q</span><span class="inner">Q</span><span class="inner">Q</span><span class="inner">Q</span>');
     }
     if (k == "R") {
     elem.before('<span class="inner">R</span><span class="inner">R</span><span class="inner">R</span><span class="inner">R</span>');
     }
     if (k == "S") {
     elem.before('<span class="inner">S</span><span class="inner">S</span><span class="inner">S</span><span class="inner">S</span>');
     }
     if (k == "T") {
     elem.before('<span class="inner">T</span><span class="inner">T</span><span class="inner">T</span><span class="inner">T</span>');
     }
     if (k == "U") {
     elem.before('<span class="inner">U</span><span class="inner">U</span><span class="inner">U</span><span class="inner">U</span>');
     }
     if (k == "V") {
     elem.before('<span class="inner">V</span><span class="inner">V</span><span class="inner">V</span><span class="inner">V</span>');
     }
     if (k == "W") {
     elem.before('<span class="inner">W</span><span class="inner">W</span><span class="inner">W</span><span class="inner">W</span>');
     }
     if (k == "X") {
     elem.before('<span class="inner">X</span><span class="inner">X</span><span class="inner">X</span><span class="inner">X</span>');
     }
     if (k == "Y") {
       elem.before('<span class="inner">Y</span><span class="inner">Y</span><span class="inner">Y</span><span class="inner">Y</span>');
      }
     if (k == "Z") {
       elem.before('<span class="inner">Z</span><span class="inner">Z</span><span class="inner">Z</span><span class="inner">Z</span>');
    }

    //punctuations
      if (k == "!") { elem.before('<span class="inner">!</span>'); }
      if (k == "@") { elem.before('<span class="inner">@</span>'); }
      if (k == "#") { elem.before('<span class="inner">#</span>'); }
      if (k == "$") { elem.before('<span class="inner">$</span>'); }
      if (k == "%") { elem.before('<span class="inner">%</span>'); }
      if (k == "^") { elem.before('<span class="inner">^</span>'); }
      if (k == "&") { elem.before('<span class="inner">&</span>'); }
      if (k == "*") { elem.before('<span class="inner">*</span>'); }
      if (k == "(") { elem.before('<span class="inner">(</span>'); }
      if (k == ")") { elem.before('<span class="inner">)</span>'); }
      if (k == "?") { elem.before('<span class="inner">?</span>'); }
      if (k == ".") { elem.before('<span class="inner">.</span>'); }
      if (k == ",") { elem.before('<span class="inner">,</span>'); }
      if (k == ":") { elem.before('<span class="inner">:</span>'); }
      if (k == ";") { elem.before('<span class="inner">;</span>'); }
      if (k == "+") { elem.before('<span class="inner">+</span>'); }
      if (k == "=") { elem.before('<span class="inner">=</span>'); }
      if (k == "-") { elem.before('<span class="inner">-</span>'); }
      if (k == "/") { elem.before('<span class="inner">/</span>'); }
      if (k == " ") { elem.before('<span class="inner">&nbsp;</span>'); }

      // Numbers
      if (k == "1") { elem.before('<span class="inner">1</span>'); }
      if (k == "2") { elem.before('<span class="inner">2</span>'); }
      if (k == "3") { elem.before('<span class="inner">3</span>'); }
      if (k == "4") { elem.before('<span class="inner">4</span>'); }
      if (k == "5") { elem.before('<span class="inner">5</span>'); }
      if (k == "6") { elem.before('<span class="inner">6</span>'); }
      if (k == "7") { elem.before('<span class="inner">7</span>'); }
      if (k == "8") { elem.before('<span class="inner">8</span>'); }
      if (k == "9") { elem.before('<span class="inner">9</span>'); }
      if (k == "0") { elem.before('<span class="inner">0</span>'); }

      // Lowercase letters
      if (k == "a") { elem.before('<span class="inner">a</span>'); }
      if (k == "b") { elem.before('<span class="inner">b</span>'); }
      if (k == "c") { elem.before('<span class="inner">c</span>'); }
      if (k == "d") { elem.before('<span class="inner">d</span>'); }
      if (k == "e") { elem.before('<span class="inner">e</span>'); }
      if (k == "f") { elem.before('<span class="inner">f</span>'); }
      if (k == "g") { elem.before('<span class="inner">g</span>'); }
      if (k == "h") { elem.before('<span class="inner">h</span>'); }
      if (k == "i") { elem.before('<span class="inner">i</span>'); }
      if (k == "j") { elem.before('<span class="inner">j</span>'); }
      if (k == "k") { elem.before('<span class="inner">k</span>'); }
      if (k == "l") { elem.before('<span class="inner">l</span>'); }
      if (k == "m") { elem.before('<span class="inner">m</span>'); }
      if (k == "n") { elem.before('<span class="inner">n</span>'); }
      if (k == "o") { elem.before('<span class="inner">o</span>'); }
      if (k == "p") { elem.before('<span class="inner">p</span>'); }
      if (k == "q") { elem.before('<span class="inner">q</span>'); }
      if (k == "r") { elem.before('<span class="inner">r</span>'); }
      if (k == "s") { elem.before('<span class="inner">s</span>'); }
      if (k == "t") { elem.before('<span class="inner">t</span>'); }
      if (k == "u") { elem.before('<span class="inner">u</span>'); }
      if (k == "v") { elem.before('<span class="inner">v</span>'); }
      if (k == "w") { elem.before('<span class="inner">w</span>'); }
      if (k == "x") { elem.before('<span class="inner">x</span>'); }
      if (k == "y") { elem.before('<span class="inner">y</span>'); }
      if (k == "z") { elem.before('<span class="inner">z</span>'); }
     }

     var nowDate = (new Date()).getTime();
     var speed = nowDate - lastdate;
     console.log(speed);
     lastdate = nowDate;
     var width = screen.width;

                if (speed < 50){
                  var numberX = Math.floor(Math.random() * 1200);
                  var numberY = Math.floor(Math.random() * 800);
                  var opacity = Math.random();

                  var innerElements = $('.inner');
                  var lastinnerElement = innerElements[innerElements.length - 1];

                    lastinnerElement.style.left = numberX + 'px';
                    lastinnerElement.style.top = numberY + 'px';
                    lastinnerElement.style.opacity = opacity;
                    $('#container')[0].style.fontSize = '800px';
                    $('#container')[0].style.color = 'blue';
                    $('#cursor')[0].style.fontSize = '800px';
                      if (width < 400){
                        var numberX = Math.floor(Math.random() * 800);
                        var numberY = Math.floor(Math.random() * 2060);
                        var opacity = Math.random();

                        var innerElements = $('.inner');
                        var lastinnerElement = innerElements[innerElements.length - 1];

                          lastinnerElement.style.left = numberX + 'px';
                          lastinnerElement.style.top = numberY + 'px';
                          lastinnerElement.style.opacity = opacity;
                          $('#container')[0].style.fontSize = '800px';
                          $('#container')[0].style.color = 'blue';
                          $('#cursor')[0].style.fontSize = '800px';
                      }
                }

                else if (speed < 800) { // between 200 and 500
                  var numberX = Math.floor(Math.random() * 1200);
                  var numberY = Math.floor(Math.random() * 800);
                  var opacity = Math.random();

                  var innerElements = $('.inner');
                  var lastinnerElement = innerElements[innerElements.length - 1];
                    lastinnerElement.style.opacity = opacity;
                    $('#container')[0].style.color = 'red';
                    $('#container')[0].style.fontSize = '200px';
                    $('#cursor')[0].style.fontSize = '200px';
                    if (width < 400){
                      var numberX = Math.floor(Math.random() * 800);
                      var numberY = Math.floor(Math.random() * 2060);
                      var opacity = Math.random();

                      var innerElements = $('.inner');
                      var lastinnerElement = innerElements[innerElements.length - 1];

                        lastinnerElement.style.left = numberX + 'px';
                        lastinnerElement.style.top = numberY + 'px';
                        lastinnerElement.style.opacity = opacity;
                        $('#container')[0].style.fontSize = '200px';
                        $('#container')[0].style.color = 'red';
                        $('#cursor')[0].style.fontSize = '200px';
                    }
               }

                else if (speed < 2000) {
                  var numberX = Math.floor(Math.random() * 1200);
                  var numberY = Math.floor(Math.random() * 800);
                  var opacity = Math.random();

                  var innerElements = $('.inner');
                  var lastinnerElement = innerElements[innerElements.length - 1];
                    lastinnerElement.style.opacity = opacity;
                    $('#container')[0].style.color = "rgb(255, 213, 3)";
                    $('#container')[0].style.fontSize = '30px';
                    $('#cursor')[0].style.fontSize = '40px';
                    if (width < 400){
                      var numberX = Math.floor(Math.random() * 800);
                      var numberY = Math.floor(Math.random() * 2060);
                      var opacity = Math.random();

                      var innerElements = $('.inner');
                      var lastinnerElement = innerElements[innerElements.length - 1];

                        lastinnerElement.style.left = numberX + 'px';
                        lastinnerElement.style.top = numberY + 'px';
                        lastinnerElement.style.opacity = opacity;
                        $('#container')[0].style.fontSize = '30px';
                        $('#container')[0].style.color = "rgb(255, 213, 3)";
                        $('#cursor')[0].style.fontSize = '40px';



                    }

                }

                // enter key
                if (e.which == 13){
                  document.body.style.backgroundColor = "rgb(0, 0, 0)";
                  $('#container')[0].style.color = "rgb(249, 248, 244)";
                }

                // \ key
                if (e.which == 220){
                  document.body.style.backgroundColor = "rgb(249, 248, 244)";
                  $('#container')[0].style.color = "rgb(0, 0, 0)";

                }


 });



// capture function keys
$(document).on("keydown", function(e){
  // if pressed key is a backspace
  if (e.which == 8){
    e.preventDefault();
    entryCount ++;
    displayCount --;
    if (displayCount < 0) {
      displayCount = 0;
    }
    console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
    deleteElement();
  }

});

});

function deleteElement(){
  $(".inner").last().remove();
}



// 1. Create time interval between 3 states :
  // - Small letters = 2 - 5 letters every 30 + seconds
  // - Medium letters = 2 - 5 letters every 11 - 29 seconds
  // - Large Letters = 2 - 5 letters every 0 - 10 seconds

  // 2. Within the time interval, there are params
      // => Math.random() the coordinates of the screen
      // => Changes the font size to 1200px
      // => Repeats the letters over one another
