// Meminta pengguna untuk memasukkan angka
let angka = parseInt(prompt("Masukkan Angka:"));

// Menggunakan loop bersarang untuk mencetak persegi bintang
for (let i = 0; i < angka; i++) {
    let baris = ""; // Variabel untuk menyimpan satu baris bintang
    for (let j = 0; j < angka; j++) {
        baris += "* "; // Menambahkan bintang dan spasi ke dalam baris
    }
    console.log(baris.trim()); // Mencetak baris bintang tanpa spasi di akhir
}
