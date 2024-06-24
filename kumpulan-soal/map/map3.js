// Advanced
// Soal:
// Berikan array students = [{name: "Alice", score: 90}, {name: "Bob", score: 80}, {name: "Charlie", score: 85}]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah objek dengan properti name dan passed (boolean) yang menentukan apakah nilai lebih besar atau sama dengan 85.
const students = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 85 },
];
const newStudents = students.map((student) => ({
  name: student.name,
  passed: student.score >= 85,
}));
console.log(newStudents);
// Jawaban:
// [{name: "Alice", passed: true}, {name: "Bob", passed: false}, {name: "Charlie", passed: true}]

// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah string dari angka tersebut dalam bahasa Inggris (gunakan array tambahan: ["one", "two", "three", "four", "five"]).
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((num) => num.toLocaleString());
console.log(newNumbers);
// Jawaban:
// ["one", "two", "three", "four", "five"]

// Soal:
// Berikan array products = [{price: 10}, {price: 20}, {price: 30}]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah harga setelah ditambah pajak 10%.
const products = [{ price: 10 }, { price: 20 }, { price: 30 }];
const newPrices = products.map((product) => ({
  price: product.price * 1.1,
}));
console.log(newPrices);
// Jawaban:
// [11, 22, 33]

// Soal:
// Berikan array strings = ["1", "2", "3", "4"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen diubah menjadi angka.
const strings = ["1", "2", "3", "4"];
const newStrings = strings.map((string) => +string);

console.log(newStrings);
// Jawaban:
// [1, 2, 3, 4]

// Soal:
// Berikan array numbers = [2, 3, 4]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah faktorial dari angka tersebut (gunakan fungsi rekursif untuk faktorial).
const numbers2 = [2, 3, 4];
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
const newNumbers2 = numbers2.map((num) => factorial(num));
console.log(newNumbers2);
// Jawaban:
// [2, 6, 24]

// Soal:
// Berikan array words = ["apple", "banana", "cherry"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah objek dengan properti word dan length yang berisi kata dan panjangnya.
const words = ["apple", "banana", "cherry"];
const newWords = words.map((word) => ({
  word: word,
  Length: word.length,
}));

console.log(newWords);
// Jawaban:
// [{word: "apple", length: 5}, {word: "banana", length: 6}, {word: "cherry", length: 6}]

// Soal:
// Berikan array names = ["Alice", "Bob", "Charlie"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah objek dengan properti name dan initial yang berisi nama dan huruf pertama dari nama tersebut.
const names = ["Alice", "Bob", "Charlie"];
const newNames = names.map((name) => ({
  name: name,
  initial: name[0].toUpperCase(),
}));
console.log(newNames);

// Jawaban:
// [{name: "Alice", initial: "A"}, {name: "Bob", initial: "B"}, {name: "Charlie", initial: "C"}]

// Soal:
// Berikan array prices = [10, 20, 30]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah string dalam format mata uang dengan dua desimal (misalnya, "Rp 10.00").
const prices = [10, 20, 30];
const newPrices = prices.map((price) => `Rp ${price}.00`);
console.log(newPrices);
// Jawaban:
// ["Rp 10.00", "Rp 20.00", "Rp 30.00"]

// Soal:
// Berikan array temperatures = [0, 100]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah objek dengan properti Celsius dan Fahrenheit yang berisi nilai dalam Celsius dan konversinya ke Fahrenheit.
const temperatures = [0, 100];
const conversionTemp = temperatures.map((temp) => ({
  Celsius: temp,
  Fahrenheit: (temp * 9) / 5 + 32,
}));
console.log(conversionTemp);
// Jawaban:
// [{Celsius: 0, Fahrenheit: 32}, {Celsius: 100, Fahrenheit: 212}]

// Soal:
// Berikan array objects = [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah jumlah dari x dan y.
const objects = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
  { x: 5, y: 6 },
];
const sumObj = objects.map((obj) => obj.x + obj.y);
console.log(sumObj);
// Jawaban:
// [3, 7, 11]
