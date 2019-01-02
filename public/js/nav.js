// nav bar
var personalStatement = document.getElementById("personalStatement");
var projectsDivContent = document.getElementById("projectsSection");
var contactDivCont = document.getElementById("contactSection");
var aboutMeDivCont = document.querySelectorAll("#aboutMeSection");
var addProductDivCont = document.querySelectorAll("addProductDiv");
var addProductButton = document.querySelectorAll("button");
var selector = ".topnav li"

function hideAboutCont() {
  aboutMeSection[0].classList.add("hide");
  aboutMeSection[1].classList.add("hide");
};


$(selector).on('click', function() {
  $(selector).removeClass('active');
  $(this).addClass('active');
});

home.addEventListener("click", function() {
  window.location = "/"
});

projects.addEventListener("click", function() {
  window.location = "projects"
});

contact.addEventListener("click", function() {
  window.location = "/contact";
});

about.addEventListener("click", function() {
  window.location = "/about"
});

addButton[0].addEventListener("click", function() {
  projectsDivContent.classList.add("hide");
  addProductDiv.classList.remove("hide")
});
addButton[1].addEventListener("click", function() {
  projectsDivContent.classList.add("hide");
  addProductDiv.classList.remove("hide")

});
addButton[2].addEventListener("click", function() {
  projectsDivContent.classList.add("hide");
  addProductDiv.classList.remove("hide")
});

back.addEventListener("click", function() {
  projectsDivContent.classList.remove("hide");
  addProductDiv.classList.add("hide")
  window.history.pushState("object or string", "Title", "/projects");
});
