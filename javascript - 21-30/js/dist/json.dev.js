"use strict";

document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
  var url = "js/tblmenu.json";
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    var output = "<h1>Data Menu</h1> <table><th>Menu</th><th>Harga</th><th>Warna</th>";
    data.forEach(function (element) {
      output += "<tr>\n                    <td>".concat(element.menu, "</td>\n                    <td>").concat(element.harga, "</td>\n                    <td>").concat(element.warna[0], "</td>\n                </tr>");
    });
    output += "</table>";
    document.querySelector("#isi").innerHTML = output;
  });
} // let tblmenu = [{
//         "idmenu": 1,
//         "idkategori": 1,
//         "menu": "Amicia",
//         "harga": 5500,
//         "warna": ["merah", "kuning", "hijau"],
//         "stok": true,
//         "keterangan": null
//     },
//     {
//         "idmenu": 2,
//         "idkategori": 1,
//         "menu": "Amicia Michella",
//         "harga": 11000,
//         "warna": ["merah", "kuning"],
//         "stok": true,
//         "keterangan": null
//     }
// ]
// console.log(tblmenu)