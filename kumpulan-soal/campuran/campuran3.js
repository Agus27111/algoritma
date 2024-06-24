// Soal 1
// Soal:
// Berikan array words = ["hello", "world", "javascript", "is", "fun"]. Buat array baru yang hanya mengandung kata-kata yang memiliki lebih dari 3 karakter dan ubah setiap kata menjadi huruf besar.
const words = ["hello", "world", "javascript", "is", "fun"];
const newWords = words
  .filter((word) => word.length > 3)
  .map((w) => w.toUpperCase());
console.log(newWords);

// Jawaban:
// ["HELLO", "WORLD", "JAVASCRIPT"]

// Soal 2
// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Buat array baru yang hanya mengandung angka-angka ganjil dan tambahkan angka 11 di akhir array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = numbers.filter((num) => num % 2 !== 0);
newNumbers.push(11);
console.log(newNumbers);
// Jawaban:
// [1, 3, 5, 7, 9, 11]

// Soal 3
// Soal:
// Berikan string sentence = "The quick brown fox jumps over the lazy dog". Pecah string tersebut menjadi array kata-kata, kemudian buat array baru yang hanya mengandung kata-kata yang tidak mengandung huruf "o".
const sentence = "The quick brown fox jumps over the lazy dog";
const arrSentence = sentence.split(" ");
const newArrSentence = arrSentence.filter(
  (word) => word.includes("o") === false
);
console.log(newArrSentence);
// Jawaban:

// javascript
// Copy code
// ["The", "quick", "jumps", "over", "the", "lazy"]

// Soal 4
// Soal:
// Berikan array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Buat array baru yang mengandung kata-kata yang dihasilkan dengan membalik urutan huruf setiap kata dan menghapus kata terakhir dari array tersebut.
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const newFruits = fruits.map((fruit) => fruit.split("").reverse().join());
newFruits.pop()

console.log(newFruits);
// Jawaban:

// javascript
// Copy code
// ["elppa", "ananab", "yrrehc", "etad"]
// Soal 5
// Soal:
// Berikan array prices = [5, 10, 15, 20, 25]. Buat array baru yang berisi harga-harga yang lebih dari 10, tambahkan harga 30 di akhir array, dan gabungkan semua harga menjadi string yang dipisahkan oleh koma.

// Jawaban:

// javascript
// Copy code
// "15,20,25,30"
// Soal 6
// Soal:
// Berikan array animals = ["cat", "dog", "elephant", "fox", "giraffe"]. Buat array baru yang hanya mengandung hewan-hewan yang memiliki lebih dari 3 karakter, tambahkan "lion" di awal array, dan hapus elemen terakhir dari array tersebut.

// Jawaban:

// javascript
// Copy code
// ["lion", "elephant", "giraffe"]
// Soal 7
// Soal:
// Berikan array mixed = ["apple", 2, "banana", 4, "cherry", 6]. Buat array baru yang hanya mengandung elemen-elemen string dan gabungkan semua elemen tersebut menjadi satu string yang dipisahkan oleh spasi.

// Jawaban:

// javascript
// Copy code
// "apple banana cherry"
// Soal 8
// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Buat array baru yang hanya mengandung angka-angka di indeks genap, tambahkan angka 12 di awal array, dan hapus angka terakhir dari array tersebut.

// Jawaban:

// javascript
// Copy code
// [12, 1, 3, 5, 7, 9]
// Soal 9
// Soal:
// Berikan array strings = ["abc", "def", "ghi", "jkl"]. Buat array baru yang berisi elemen-elemen dari array asli yang dihasilkan dengan membalik urutan huruf setiap kata dan hanya mengambil elemen-elemen dari indeks 1 hingga 3 (inklusif).

// Jawaban:

// javascript
// Copy code
// ["fed", "ihg", "lkj"]
// Soal 10
// Soal:
// Berikan array data = ["apple", 2, "banana", 4, "cherry", 6, "date", 8]. Buat array baru yang hanya mengandung elemen-elemen yang merupakan angka, kemudian kalikan setiap angka dengan 2, dan gabungkan semua elemen tersebut menjadi satu string yang dipisahkan oleh tanda hubung (-).

// Jawaban:

// javascript
// Copy code
// "4-8-12-16"
// Semoga soal-soal ini membantu dalam memahami dan mempraktikkan penggunaan berbagai metode array di JavaScript!
