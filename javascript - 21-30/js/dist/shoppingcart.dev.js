"use strict";

var tblmenu = [{
  idmenu: 11,
  idkategori: 28,
  menu: "Amicia",
  gambar: "xrITo2du_400x400_2.jpg",
  harga: 5500
}, {
  idmenu: 12,
  idkategori: 28,
  menu: "Amicia Michella",
  gambar: "ETNjawsUUAIIK7B_1.png",
  harga: 10000
}, {
  idmenu: 16,
  idkategori: 28,
  menu: "A m i c i n",
  gambar: "Amicia_Michella_Headshot.png",
  harga: 7000
}, {
  idmenu: 20,
  idkategori: 28,
  menu: "Amicia @w@",
  gambar: "download (2).jpg",
  harga: 6000
}];
var tampil = tblmenu.map(function (kolom) {
  return "<div class=\"produk-content\">\n            <div class=\"image\">\n                <img src=\"upload/".concat(kolom.gambar, "\" alt=\"\" />\n            </div>\n            <div class=\"titel\">\n                <h2>").concat(kolom.menu, "</h2>\n            </div>\n            <div class=\"harga\">\n                <h2>Rp. ").concat(kolom.harga, "</h2>\n            </div>\n            <div class=\"btn-beli\">\n                <button data-id=").concat(kolom.idmenu, "> Beli </button>\n            </div>\n            </div>");
});
var isi = document.querySelector(".produk");
isi.innerHTML = tampil;
var btnbeli = document.querySelectorAll(".btn-beli > button");
var cart = [];

var _loop = function _loop(index) {
  btnbeli[index].onclick = function () {
    // console.log(btnbeli[index].dataset["idmenu"]);
    // cart.push(btnbeli[index].dataset["idmenu"]);
    tblmenu.filter(function (a) {
      if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
        cart.push(a);
        console.log(cart);
      }
    });
  };
};

for (var index = 0; index < btnbeli.length; index++) {
  _loop(index);
} // console.log(cart);