//array-string,number,object,func,campuran

let nilai = [{
        nama: "budi",
        ipa: 90,
        bahasa: 70,
        matematika: 80
    },

    {
        nama: "joni",
        ipa: 70,
        bahasa: 70,
        matematika: 90
    },

    {
        nama: "tejo",
        ipa: 80,
        bahasa: 70,
        matematika: 40
    },

    {
        nama: "siti",
        ipa: 50,
        bahasa: 90,
        matematika: 70
    },
]

let nama = ["budi", "joni", "tejo", "siti"];

// nama.push("ani", "roma");

// console.log(nama.shift())

// nama.unshift("bobi", "robi")

// console.log(nama.slice(0, 5))

let mapel = ["ipa", "bahasa", "matematika"]

// console.log(nama.concat(mapel))

// console.log(nama.concat(['ips', 'pkn', 'sejarah']))

// nama.splice(3, 5);

// console.log(nama.pop())

// console.log(nilai[0].nama);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index])

// }

// nama.forEach(function () {
//     console.log[a]
// })

// nama.forEach((a) => console.log(a))

// nilai.filter(function (b) {
//     if (b.ipa > 80) {
//         console.log(b)
//     }
// })

// console.log(nilai);

nilai.filter((a) => (a.ipa > 50 && a.matematika > 80 ? console.log(a.nama) : null))