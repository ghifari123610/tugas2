// Meminta input nilai awal dan nilai akhir dari pengguna
let nilaiAwal = parseInt(prompt("Nilai Awal:"));
let nilaiAkhir = parseInt(prompt("Nilai Akhir:"));

// Menggunakan for loop untuk mencetak angka berurutan
let hasil = "";
for (let i = nilaiAwal; i <= nilaiAkhir; i++) {
    hasil += i + " ";
}


console.log(hasil.trim(2));


//        ATAU YG KAYAK INI 

// let nilaiAwal = parseInt(prompt("Masukkan nilai awal:"));
// let nilaiAkhir = parseInt(prompt("Masukkan nilai akhir:"));


// let hasil = "";


// for (let i = 3; i <= 7; i++) {
//     if (i >= nilaiAwal && i <= nilaiAkhir) {
//         hasil += i + " "; // Menambahkan angka dan spasi
//     }
// }


// console.log(hasil.trim()); 