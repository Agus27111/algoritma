// Beginner
// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5]. Gunakan metode map() untuk membuat array baru di mana setiap elemen dikalikan dengan 2.
const arr1 = [1, 2, 3, 4, 5];
const newArr1 = arr1.map((num) => num * 2);
console.log(newArr1);
// Jawaban:
// [2, 4, 6, 8, 10]

// Soal:
// Berikan array words = ["hello", "world"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen diubah menjadi huruf kapital.
const arr2 = ["hello", "world"];
const newArr2 = arr2.map((word) => word.toUpperCase());
console.log(newArr2);
// Jawaban:
// ["HELLO", "WORLD"]

// Soal:
// Berikan array numbers = [10, 20, 30, 40]. Gunakan metode map() untuk membuat array baru di mana setiap elemen ditambah 5.
const arr3 = [10, 20, 30, 40];
const newArr3 = arr3.map((num) => num + 5);
console.log(newArr3);
// Jawaban:
// [15, 25, 35, 45]

// Soal:
// Berikan array names = ["Alice", "Bob", "Charlie"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen ditambahkan kata "Hello ".
const arr4 = ["Alice", "Bob", "Charlie"];
const newArr4 = arr4.map((word) => "Hello " + word);
console.log(newArr4);
// Jawaban:
// ["Hello Alice", "Hello Bob", "Hello Charlie"]

// Soal:
// Berikan array numbers = [1, 4, 9, 16]. Gunakan metode map() untuk membuat array baru di mana setiap elemen diambil akarnya (square root).
const arr5 = [1, 4, 9, 16];
const newArr5 = arr5.map((num) => Math.sqrt(num));
console.log(newArr5);
// Jawaban:
// [1, 2, 3, 4]

// Soal:
// Berikan array temperatures = [32, 68, 77, 104]. Gunakan metode map() untuk membuat array baru di mana setiap elemen dikonversi dari Fahrenheit ke Celsius (rumus: (F - 32) * 5/9).
const fahrenheit = [32, 68, 77, 104];
const celcius = fahrenheit.map((temp) => ((temp - 32) * 5) / 9);
console.log(celcius);
// Jawaban:
// [0, 20, 25, 40]

// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5]. Gunakan metode map() untuk membuat array baru di mana setiap elemen dikurangi 1.
const arr7 = [1, 2, 3, 4, 5];
const newArr7 = arr7.map((num) => num - 1);
console.log(newArr7);
// Jawaban:
// [0, 1, 2, 3, 4]

// Soal:
// Berikan array prices = [10, 20, 30]. Gunakan metode map() untuk membuat array baru di mana setiap elemen ditambah 10%.
const prices = [10, 20, 30];
const newArr8 = prices.map((num) => num + num * 0.1);
console.log(newArr8);
// Jawaban:
// [11, 22, 33]

// Soal:
// Berikan array words = ["apple", "banana", "cherry"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen diubah menjadi panjangnya (number of characters).
const arr9 = ["apple", "banana", "cherry"];
const newArr9 = arr9.map((word) => word.length);
console.log(newArr9);
// Jawaban:
// [5, 6, 6]

// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5]. Gunakan metode map() untuk membuat array baru di mana setiap elemen diubah menjadi string.
const arr10 = [1, 2, 3, 4, 5];
const newArr10 = arr10.map((num) => num.toString());
console.log(newArr10);
// Jawaban:
// ["1", "2", "3", "4", "5"]
