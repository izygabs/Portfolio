// function myFunction() {
//   let button = document.body;
//   button.classList.toggle("darkmode");
// }

const mod = document.querySelector("#btn");

const bod = document.getElementById("dark");

mod.addEventListener("click", () => {
  // document.querySelector("a").innerHTML = "/Moon_icon-removebg-preview.png";

  document.getElementById("dark").classList.toggle("dark-mode");
});
