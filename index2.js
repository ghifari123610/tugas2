// Menggunakan for loop untuk mencetak pola angka dan huruf 'x'
let hasil = "";
for (let i = 1; i <= 8; i++) {
    if (i % 2 === 1) {
        // Jika angka ganjil, cetak angkanya
        hasil += i + " ";
    } else {
        // Jika angka genap, cetak 'x'
        hasil += "x ";
    }
}

// Menampilkan hasil
console.log(hasil.trim()); // Menghapus spasi tambahan di akhir
