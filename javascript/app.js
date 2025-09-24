document.body.innerHTML += "Welcome";
//alert("Hello Dat.js");
console.log("Hello Dat.js");
function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("input").value;
}
document.querySelector("button").addEventListener("click", sayHello);
