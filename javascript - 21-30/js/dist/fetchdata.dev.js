"use strict";

document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
  var url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url) // .then(function (res) {
  //     return res.json();
  // })
  .then(function (res) {
    return res.json();
  }) // .then(function (data) {
  //     console.log(data);
  // })
  .then(function (data) {
    // console.log(data);
    var out = "<ul>";
    data.forEach(function (el) {
      out += "<li>".concat(el.title, "<li>");
      console.log(el.title);
    });
    out += "</ul>";
    document.querySelector("#isi").innerHTML = out;
  });
}