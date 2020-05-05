
// ********** LOADING THE API DATA ********** //
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //getMonth() is 0 based
var yyyy = today.getFullYear();
if(dd < 10) {
    dd = '0' + dd;
}
if(mm < 10) {
    mm = '0' + mm;
}

today = yyyy + mm + dd;
console.log("Today is " + today);

// read the JSON file
var xmlhttp = new XMLHttpRequest();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=oliver-sacks&api-key=CgSJtSLfY5hbsLAhSuTu9uAAK2CMr022";
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    placeImage(data);
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

// ************ BRAIN CURSOR ************ //
var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;
$on('mousemove', function (e) {
     xmouse = e.clientX || e.pageX;
     ymouse = e.clientY || e.pageY;
});

var brain = $('#brain');
var x = void 0,
     y = void 0,
     dx = void 0,
     dy = void 0,
     tx = 0,
     ty = 0,
     key = -1;

var followMouse = function followMouse() {
     key = requestAnimationFrame(followMouse);

     if(!x || !y) {
          x = xmouse;
          y = ymouse;
     } else {
          dx = (xmouse - x) * 0.15;
          dy = (ymouse - y) * 0.15;
          if(Math.abs(dx) + Math.abs(dy) < 0.1) {
               x = xmouse;
               y = ymouse;
          } else {
               x += dx;
               y += dy;
          }
     }
     brain.style.left = x - 45 + 'px';
     brain.style.top = y - 50 + 'px';
};

// temp
const assets = [
  "assets/01.jpg",
  "assets/02.jpg",
  "assets/03.jpg",
  "assets/04.jpg",
  "assets/05.jpg",
  "assets/06.jpg",
  "assets/07.jpg",
  "assets/08.jpg",
  "assets/09.jpg",
  "assets/10.jpg",
  "assets/11.jpg",
  "assets/12.jpg",
  "assets/13.jpg",
  "assets/14.jpg",
  "assets/15.jpg",
  "assets/16.jpg",
  "assets/17.jpg",
  "assets/18.jpg",
  "assets/19.jpg",
  "assets/20.jpg",
  "assets/21.jpg",
  "assets/22.jpg",
  "assets/23.jpg",
  "assets/24.png"
];

let i = 0;

function placeImage(x, y) {
  // soooooooooooo clooooseeee

  // var docs = data.response.docs;
  //
  //      for (a = 0; a < docs.length; a++) {
  //         var anchor = document.createElement("a");
  //         anchor.href = docs[a].web_url;
  //         anchor.target = "_blank";
  //
  //         var image = document.createElement("img");
  //         var imageUrl;
  //           for (b = 0; b < docs[b].multimedia.length; b++) {
  //             if (docs[a].multimedia[b].type == "image") {
  //                 imageUrl = docs[a].multimedia[b].url;
  //                 break;
  //                 }
  //               }
  //
  //               image.src = "http://www.nytimes.com/" + imageUrl;
  //               anchor.appendChild(image);
  //           }

            const nextSrc = assets[i];

            const img = document.createElement("img")
            img.setAttribute("src", nextSrc);
            img.setAttribute("draggable", "false");

            img.style.left = x + "px";
            img.style.top = y + "px";
            img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)";

            document.getElementById("container").appendChild(img);

            i = i + 1;
            if (i >= assets.length) {
              i = 0
            }
          };

          document.getElementById("container").addEventListener("click", function (event) {
            event.preventDefault()
            placeImage(event.pageX, event.pageY)
          });

          document.getElementById("container").addEventListener("touchend", function (event) {
            event.preventDefault()
            placeImage(event.pageX, event.pageY)
          });

          var handler = function(event){
            console.log(event);
        }


console.log("i love you, oliver sacks 🧠");
console.log(" ");
console.log("'Music can lift us out of depression or move us to tears - it is a remedy, a tonic, orange juice for the ear. But for many of my neurological patients, music is even more - it can provide access, even when no medication can, to movement, to speech, to life. For them, music is not a luxury, but a necessity.' - Dr. Sacks");
console.log(" ");
console.log("my brain feels  m e l t y");
console.log(" ");
var mentalBreakdownCheck = "exponential";
console.log(mentalBreakdownCheck);
