var pages = ["home", "writings", "drawings", "sketchbook", "prints", "travel", "organizations",
"contact", "links"];

var sidebar = document.querySelector(".sidebar");

for (let i = 0; i < pages.length; i++) {
  console.log(pages[i]);
  var link = `<a href = "${pages[i]}.html" class = "sidebar-link"> ${pages[i]}</a>`;
  sidebar.innerHTML += link;
}
