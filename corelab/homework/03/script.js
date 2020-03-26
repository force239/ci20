
// the array of strings in the variable "pages"
var pages = ["home", "writings", "drawings", "sketchbook", "prints", "travel", "organizations",
"contact", "links"];

//this is defining the variable "sidebar" in our js and linking it to
//the div "sidebar" in our css and html by using the query selector
var sidebar = document.querySelector(".sidebar");


// in order to have a continual addition of array names being printed onto the sidebar, must add a for loop.
// here, we are setting the variable "i" equal to zero before the loop starts.
//then, we are defining the condition in the loop to be less than the entire length
// of the array.
// the ".length" in this piece of code is returning the length of the array.
// after, the i++ is adding a value of 1 to the variable. This ensures that in our loop,
// it will continue to add numbers (length) to the array

for (let i = 0; i < pages.length; i++) {
  console.log(pages[i]);

  // in order for the categories of the page to have separate links, we are creating
  // template strings.
  // this is done by using `` to insert the variables we want within the template.
  // in this, we are writing the link to another html page and calling one of the strings
  // in the array "pages".
  // the ${} syntax calls the variable we insert (in this case, we are calling
  // our array of strings).
  // we also include "[i]" to retrieve the strings in the array based on the conditions we already set in place.
  // this will continue to print out the strings we made into the sidebar
  var link = `<a href = "${pages[i]}.html" class = "sidebar-link"> ${pages[i]}</a>`;

  // in this line of code, we are calling the sidebar variable and by using the innerHTML
  // property, we replace the exisiting content with the links we created in the
  // line above
  // basically saying sidebar = sidebar + link
  sidebar.innerHTML += link;
}
