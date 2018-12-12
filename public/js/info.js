var softSKillDivCont = document.querySelector(".soft");
var techStackSKillDivCont = document.querySelector(".tech");
var infoTap = document.getElementById("info-tap");
var softTap = document.getElementById("soft-tap");
var techTap = document.getElementById("technical-tap");

infoTap.addEventListener("click", function() {
  softSKillDivCont.classList.add("hide");
    techStackSKillDivCont.classList.add("hide");
});
softTap.addEventListener("click", function() {
  techStackSKillDivCont.classList.add("hide");
  softSKillDivCont.classList.remove("hide");
});

techTap.addEventListener("click", function(){
    softSKillDivCont.classList.add("hide");
    techStackSKillDivCont.classList.remove("hide");
})