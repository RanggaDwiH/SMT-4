let tblmenu = [{
        idmenu: 11,
        idkategori: 28,
        menu: "Amicia",
        gambar: "xrITo2du_400x400_2.jpg",
        harga: 5500
    },
    {
        idmenu: 12,
        idkategori: 28,
        menu: "Amicia Michella",
        gambar: "ETNjawsUUAIIK7B_1.png",
        harga: 10000
    },
    {
        idmenu: 16,
        idkategori: 28,
        menu: "A m i c i n",
        gambar: "Amicia_Michella_Headshot.png",
        harga: 7000
    },
    {
        idmenu: 20,
        idkategori: 28,
        menu: "Amicia @w@",
        gambar: "download (2).jpg",
        harga: 6000
    },
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="produk-content">
            <div class="image">
                <img src="upload/${kolom.gambar}" alt="" />
            </div>
            <div class="titel">
                <h2>${kolom.menu}</h2>
            </div>
            <div class="harga">
                <h2>Rp. ${kolom.harga}</h2>
            </div>
            <div class="btn-beli">
                <button data-id=${kolom.idmenu}> Beli </button>
            </div>
            </div>`;
})

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function (a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    };
}

// console.log(cart);