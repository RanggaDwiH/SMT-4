"use strict";

function coba() {
  a = document.querySelector(".isi");
  a.innerHTML = "belajar event listener";
  console.log("coba event listener");
} // judul.addEventListener("click", coba);
//judul.onclick = coba;


judul.onclick = function () {
  console.log("coba function anony");
};