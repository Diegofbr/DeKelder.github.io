var logo = document.getElementsByTagName("img")[0];

logo.onmouseover = function () {
  this.src="Logo_De-Kelder-yellow.png";
}
logo.onmouseout = function () {
  this.src="Logo_De-Kelder 2.png";
}
logo.onmouseclick = function () {
  this.href="OPhome.html";
}
var slider = document.getElementById("slidefoto");
var slidertekst = document.getElementById("slidertekst");
console.log(slider.length)
var teller = 0;
var slide = ["Mock-Ups-alternatief.png", "Mock-Ups-fotografisch.png", "Mock-Ups-illustratief.png", "Mock-Ups-typografisch.png"];
var slidetekst = ["Imse G","King Z","Vexed","Relics" ]
console.log(slide.length)

var FunctieTijd = function () {
  slidertekst.innerHTML = slidetekst[teller]
  slider.src = slide[teller];
  teller++;
  if (teller === 4) {
    teller = 0
  }
}
setInterval(FunctieTijd, 2500);

var contactknop = document.getElementById("contact");
console.log(contact.innerHTML);

contactknop.onclick = function() {
  console.log("klik");
  window.scrollTo(0,-800)
}
