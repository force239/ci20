
var xmlhttp = new XMLHttpRequest();
var url = "data.json"; //your file name
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    if (document.getElementById('index')) {
      buildIndex(data);
    }
    else {
      buildItem(data);
    }
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function buildIndex(data){
  //for each row of data:
  for (i = 0; i < data.length; i++){
    var item = document.createElement("li");
    item.classList.add('items');
    item.classList.add(data[i].Genre);
    item.classList.add(data[i].Subgenre);
    item.classList.add(data[i].Senses2);


    var elem = document.createElement("a");
    elem.innerText = data[i].Name +" "+"-"+" "+ data[i].FavoriteSong;
    // data[i].Name.style.textTransform = "uppercase";
    elem.style.textDecoration = "none";
    elem.href = "item.html?id=" + i;

    item.appendChild(elem);
    //finally, attach to '.result' div
    document.querySelector('.result').appendChild(item);
  }
}

//******** HOMEPAGE TINGS ***********//
function show(target){

   // hide subcategories
  //***** HOME PAGE *****//
  var items = document.querySelectorAll('.genre');
  for (i = 0; i < items.length; i++) {
    items[i].classList.remove('shown');
  }

  var items2 = document.querySelectorAll('.sense');
  for (i = 0; i < items2.length; i++) {
    items2[i].classList.remove('shown');
  }

  // then show target divs
   var selected = document.querySelectorAll(target);
    for (i = 0; i < selected.length; i++) {
     selected[i].classList.add('shown');
  }

  //********* HIDES HOME ENVELOPES AFTER CLICKING *******///
  var home = document.querySelectorAll('.index');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
    }

     document.querySelector(".sub").style.height = "70%";
     document.querySelector(".sub").style.width = "30%";

     document.querySelector(".sub1").style.height = "70%";
     document.querySelector(".sub1").style.width = "30%";

     document.querySelector(".sub2").style.height = "70%";
     document.querySelector(".sub2").style.width = "30%";

     document.querySelector(".sub3").style.height = "70%";
     document.querySelector(".sub3").style.width = "30%";

     document.querySelector(".sub4").style.height = "70%";
     document.querySelector(".sub4").style.width = "30%";

     document.querySelector(".sub5").style.height = "70%";
     document.querySelector(".sub5").style.width = "30%";

     document.querySelector(".sub6").style.height = "70%";
     document.querySelector(".sub6").style.width = "30%";

     document.querySelector(".sub7").style.height = "70%";
     document.querySelector(".sub7").style.width = "30%";
 }

 // ******* SUBGENRE CATEGORIES YALL ******////
 function showSub(list) {

   // hide subcategories
  //***** HOME PAGE *****//
  var subGenre = document.querySelectorAll('.items');
  for (i = 0; i < subGenre.length; i++) {
    subGenre[i].classList.remove('show');
  }

  // then show target divs
   var selected = document.querySelectorAll(list);
    for (i = 0; i < selected.length; i++) {
     selected[i].classList.add('show');
  }

  //***** HIDES HOME ENVELOPES AFTER CLICKING *******///
  var home = document.querySelectorAll('.sub');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  //******* SHOWS THE LIST OF NAMES AND SONGS IN SUB ********//
  var list = document.querySelectorAll(list);
  for (i = 0; i < list.length; i++){
    list[i].style.display = "list-item";
    list[i].style.position = "relative";
    list[i].style.listStyleType = "upper-roman";
  }

  //****** HIDES LIST SUBGENRE LETTERS **********//
  var home = document.querySelectorAll('.sub1');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.sub2');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.sub3');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.sub4');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.sub5');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.sub6');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.sub7');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }
 }

 // ******* SENSE CATEGORIES YALL ******////
 function showSub2(list) {

   // hide subcategories
  //***** HOME PAGE *****//
  var subGenre = document.querySelectorAll('.items');
  for (i = 0; i < subGenre.length; i++) {
    subGenre[i].classList.remove('show');
  }

  // then show target divs
   var selected = document.querySelectorAll(list);
    for (i = 0; i < selected.length; i++) {
     selected[i].classList.add('show');

  }
  //***** HIDES HOME ENVELOPES AFTER CLICKING *******///
  var home = document.querySelectorAll('.sub');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  //******* SHOWS THE LIST OF NAMES AND SONGS IN SUB ********//
  var list = document.querySelectorAll(list);
  for (i = 0; i < list.length; i++){
    list[i].style.display = "list-item";
    list[i].style.position = "relative";
    list[i].style.listStyleType = "upper-roman";
    // list[i].style.listStyleType = "upper-roman";
  }

  //****** HIDES LIST SUBGENRE LIST LETTERS **********//
  var home = document.querySelectorAll('.nine');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.ten');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.eleven');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.twelve');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.thirteen');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.fourteen');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }

  var home = document.querySelectorAll('.fifteen');
    for (i = 0; i < home.length; i++){
    home[i].style.display = "none";
  }
 }

 //************* INDIVIDUAL SONG STYLING ***************//
 function buildItem(data){
   //get URL parameter "id"
   var queryString = window.location.search;
   var urlParams = new URLSearchParams(queryString);
   var id = parseInt(urlParams.get('id'));
   console.log('currently seeing item ' + id);

   document.querySelector('.song').innerText = data[id].FavoriteSong;
   document.querySelector('.name').innerText = data[id].Name;
   document.querySelector('.why').innerText = data[id].Why;
   document.querySelector('.desc').innerText = data[id].HowWouldTheyDescribeIt;
   document.querySelector('.senses').innerText = data[id].Senses;
   document.querySelector('.mem').innerText = data[id].Memories;
   document.querySelector('.background-color').style.background = `linear-gradient(270deg, ${data[id].Color1}, ${data[id].Color2}, ${data[id].Color3}, ${data[id].Color4})`;
   document.querySelector('.background-color').style.animation = `background-flash ${data[id].SpeedOfSound} ${data[id].SpeedOfSound} infinite`;
// need to figure out the animation of the background color...yikes

   // document.querySelector('.background-color').style.insertRule('\
		// 	  @keyframes background-flash {\
   //      0%{background-position:0% 50%}\
   //      50%{background-position:100% 50%}\
   //      100%{background-position:0% 50%}\
   //    }'
		// );
   document.querySelector('.background-color').style.webkitAnimationPlayState = "running";
   var songLink = `<audio controls autoplay>
   <source src="assets/${data[id].Audio}" type="audio/mpeg">
   Your browser does not support the audio element.
   </audio>`;
   document.querySelector('.audio').innerHTML += songLink;

// ********** DRAGGABLE DIVS *********//
// Credit to Kirupa https://www.kirupa.com/html5/drag.html

   var container = document.querySelector("#container");
    var activeItem = null;

    var active = false;
    let passiveSupported = false;

    container.addEventListener("touchstart", dragStart, passiveSupported ? {passive: true} : false);
    container.addEventListener("touchend", dragEnd, passiveSupported ? {passive: true} :  false);
    container.addEventListener("touchmove", drag, passiveSupported ? {passive: true} :  false);

    container.addEventListener("mousedown", dragStart, passiveSupported ? {passive: true} : false);
    container.addEventListener("mouseup", dragEnd, passiveSupported ? {passive: true} : false);
    container.addEventListener("mousemove", drag, passiveSupported ? {passive: true} : false);

    function dragStart(e) {
      if (e.target !== e.currentTarget) {
        active = true;

        // this is the item we are interacting with
        activeItem = e.target;

        if (activeItem !== null) {
          if (!activeItem.xOffset) {
            activeItem.xOffset = 0;
          }

          if (!activeItem.yOffset) {
            activeItem.yOffset = 0;
          }

          if (e.type === "touchstart") {
            activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
            activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
          } else {
            console.log("move those letters! drag those divs 🤠");
            activeItem.initialX = e.clientX - activeItem.xOffset;
            activeItem.initialY = e.clientY - activeItem.yOffset;
          }
        }
      }
    }

    function dragEnd(e) {
      if (activeItem !== null) {
        activeItem.initialX = activeItem.currentX;
        activeItem.initialY = activeItem.currentY;
      }

      active = false;
      activeItem = null;
    }

    function drag(e) {
      if (active) {
        if (e.type === "touchmove") {
          e.preventDefault();

          activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
          activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
        } else {
          activeItem.currentX = e.clientX - activeItem.initialX;
          activeItem.currentY = e.clientY - activeItem.initialY;
        }

        activeItem.xOffset = activeItem.currentX;
        activeItem.yOffset = activeItem.currentY;

        setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
 }

 //********** var mentalBreakdownCheck = 20++; (at least) ********//
