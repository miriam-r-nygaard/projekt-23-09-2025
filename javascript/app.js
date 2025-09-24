document.body.innerHTML += "Welcome";
//alert("Hello Dat.js");
console.log("Hello Dat.js");
function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("input#navn").value;
}
document.querySelector("button").addEventListener("click", sayHello);

//function sayHello() {
//document.querySelector("h3").textContent =
//" " + document.querySelector("input#alder").value;
//}
//document.querySelector("button").addEventListener("click", sayHello);
