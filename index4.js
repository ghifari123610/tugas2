// Meminta pengguna untuk memasukkan angka batas atas
let jumlah = parseInt(prompt("Masukkan sebuah angka:"));

// Loop dari 1 sampai jumlah yang dimasukkan oleh pengguna
for (let angka = 1; angka <= jumlah; angka++) {
    if (angka % 3 === 0 && angka % 5 === 0) {
        console.log("FizzBuzz");
    } else if (angka % 3 === 0) {
        console.log("Pondok");
    } else if (angka % 5 === 0) {
        console.log("Informatika");
    } else {
        console.log(angka);
    }
}
