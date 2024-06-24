// Intermediate - Soal 1

// Jika kita memiliki array let numbers = [1, 2, 3];, bagaimana cara menambahkan semua elemen dari array [4, 5] ke dalam numbers menggunakan push()?
// Kunci Jawaban: numbers akan menjadi [1, 2, 3, 4, 5].
let numbers = [1, 2, 3]
numbers.push(4, 5);
console.log(numbers);
// Intermediate - Soal 2

// Bagaimana cara menambahkan beberapa elemen sekaligus ke dalam array menggunakan push() tanpa menambahkan array baru?
// Kunci Jawaban: Memanggil push() dengan ... (spread operator) pada elemen-elemen yang ingin ditambahkan, misalnya array.push(...items).

// Intermediate - Soal 3

// Apa yang akan terjadi jika kita memanggil push() pada sebuah array dengan objek sebagai argumen?
// Kunci Jawaban: Objek tersebut akan menjadi elemen terakhir dari array.

// Intermediate - Soal 4

// Jika kita memiliki array let arr1 = [1, 2, 3]; dan array let arr2 = [4, 5];, bagaimana cara menambahkan semua elemen dari arr2 ke dalam arr1 menggunakan push()?
// Kunci Jawaban: arr1 akan menjadi [1, 2, 3, 4, 5].
let arr1 = [1, 2, 3]
let arr2 = [4, 5]
arr1.push(...arr2)
console.log(arr1)
// Intermediate - Soal 5

// Apakah push() dapat digunakan untuk menghapus elemen terakhir dari sebuah array?
// Kunci Jawaban: Tidak, push() digunakan untuk menambahkan elemen baru ke akhir array.

// Intermediate - Soal 6

// Bagaimana cara menambahkan semua karakter dari sebuah string ke dalam array menggunakan push()?
// Kunci Jawaban: String tersebut akan dipecah menjadi karakter-karakternya dan dimasukkan sebagai elemen-elemen array.

// Intermediate - Soal 7

// Apakah push() dapat mengubah tipe data elemen yang sudah ada dalam array?
// Kunci Jawaban: Tidak, push() hanya menambahkan elemen baru ke akhir array tanpa mengubah tipe data elemen yang sudah ada.

// Intermediate - Soal 8

// Jika kita memiliki array let arr = [1, 2];, apa yang terjadi jika kita memanggil push() dengan arr sebagai argumen?
// Kunci Jawaban: Array arr akan menjadi array bertingkat atau array dalam array.

// Intermediate - Soal 9

// Apa yang akan terjadi jika kita memanggil push() pada sebuah array dengan undefined sebagai argumen?
// Kunci Jawaban: Array akan memiliki satu elemen dengan nilai undefined.

// Intermediate - Soal 10

// Jika kita memanggil push() pada sebuah array dengan sebuah array kosong sebagai argumen, apa yang terjadi?
// Kunci Jawaban: Tidak ada perubahan pada array yang sudah ada.
