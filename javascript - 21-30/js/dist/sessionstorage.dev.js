"use strict";

sessionStorage.setItem("coba", 100);
sessionStorage.setItem("tes", "saya belajar");
sessionStorage.setItem("belajar", "belajar session storage");
sessionStorage.setItem("belajar", "belajar session storage");
console.log(sessionStorage.getItem("coba"));
console.log(sessionStorage.getItem("tes")); // sessionStorage.removeItem("coba");
// sessionStorage.clear();

console.log(sessionStorage.key(2));
console.log(sessionStorage.length);