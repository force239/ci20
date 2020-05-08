function show(target) {
  var typography = document.querySelectorAll("img");
  for (i = 0; i < typography.length; i++) {
    typography[i].classList.add('shown');
  }

  var a = document.querySelectorAll("a");
  for (j = 0; j < a.length; j++) {
    a[j].style.display ="none";
  }
}

function hide(helvetica) {
  var image = document.querySelectorAll("img");
  for (h = 0; h < image.length; h++) {
    image[h].style.display = "none";
  }

  var typeface = document.querySelectorAll("a");
  for (t = 0; t < typeface.length; t++) {
    typeface[t].style.display = "block";
  }
}

console.log("stream lofi by jw francis");
