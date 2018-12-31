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
  hideAboutCont();
  projectsDivContent.classList.add("hide");
  contactDivCont.classList.add("hide");
  personalStatement.classList.remove("hide");
});

projects.addEventListener("click", function() {
  hideAboutCont();
  personalStatement.classList.add("hide");
  contactDivCont.classList.add("hide");
  projectsDivContent.classList.remove("hide");
});

contact.addEventListener("click", function() {
  hideAboutCont();
  personalStatement.classList.add("hide");
  projectsDivContent.classList.add("hide");
  contactDivCont.classList.remove("hide");
});

about.addEventListener("click", function() {
  personalStatement.classList.add("hide");
  contactDivCont.classList.add("hide");
  projectsDivContent.classList.add("hide");
  aboutMeSection[0].classList.remove("hide");
  aboutMeSection[1].classList.remove("hide");
});

addButton[0].addEventListener("click", function() {
  personalStatement.classList.add("hide");
  contactDivCont.classList.add("hide");
  projectsDivContent.classList.add("hide");
  aboutMeSection[0].classList.add("hide");
  aboutMeSection[1].classList.add("hide");
  addProductDiv.classList.remove("hide")
window.history.pushState("object or string", "Title", "/addProduct");
})
addButton[1].addEventListener("click", function() {
  location.href = '/addProduct'
  personalStatement.classList.add("hide");
  contactDivCont.classList.add("hide");
  projectsDivContent.classList.add("hide");
  aboutMeSection[0].classList.add("hide");
  aboutMeSection[1].classList.add("hide");
  addProductDiv.classList.remove("hide")
  window.history.pushState("object or string", "Title", "/addProduct");

})
addButton[2].addEventListener("click", function() {
  location.href = '/addProduct'
  personalStatement.classList.add("hide");
  contactDivCont.classList.add("hide");
  projectsDivContent.classList.add("hide");
  aboutMeSection[0].classList.add("hide");
  aboutMeSection[1].classList.add("hide");
  addProductDiv.classList.remove("hide")
  window.history.pushState("object or string", "Title", "/addProduct");
})

back.addEventListener("click", function() {
  personalStatement.classList.add("hide");
  contactDivCont.classList.add("hide");
  projectsDivContent.classList.remove("hide");
  aboutMeSection[0].classList.add("hide");
  aboutMeSection[1].classList.add("hide");
  addProductDiv.classList.add("hide")
  window.history.pushState("object or string", "Title", "/");

})
