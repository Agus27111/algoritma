// Advanced
// Soal:
// Berikan array fruits = ["Apel", "Pisang", "Jeruk", "Mangga", "Anggur"]. Gunakan metode slice() untuk membuat array baru tanpa elemen pertama dan terakhir.
const fruits = ["Apel", "Pisang", "Jeruk", "Mangga", "Anggur"];
let result1 = fruits.slice(1, fruits.length - 1);
console.log("jawaban soal no 1 = ");
console.log(result1);
// Jawaban:
// ["Pisang", "Jeruk", "Mangga"]

// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5, 6]. Gunakan metode slice() untuk mendapatkan elemen dari indeks 1 hingga -1 (tidak termasuk indeks -1).
const numbers = [1, 2, 3, 4, 5, 6];
let result2 = numbers.slice(1, -1);
console.log("jawaban soal no 2 = ");
console.log(result2);
// Jawaban:
// [2, 3, 4, 5]

// Soal:
// Berikan array colors = ["Merah", "Hijau", "Biru", "Kuning", "Ungu", "Hitam"]. Gunakan metode slice() untuk membuat array baru yang hanya berisi elemen tengah.
const colors = ["Merah", "Hijau", "Biru", "Kuning", "Ungu", "Hitam"];
let result2 = numbers.slice(1, -1);
console.log("jawaban soal no 2 = ");
console.log(result2);
// Jawaban:
// ["Biru", "Kuning"]

// Soal:
// Berikan array animals = ["Kucing", "Anjing", "Kelinci", "Hamster", "Ikan", "Burung"]. Gunakan metode slice() untuk membuat array baru yang berisi elemen dari indeks ke-2 hingga indeks ke-4 (tidak termasuk indeks ke-4) dengan indeks negatif.
const animals = ["Kucing", "Anjing", "Kelinci", "Hamster", "Ikan", "Burung"];
let result3 = animals.slice(-4, -2);
console.log("jawaban soal no 3 = ");
console.log(result3);
// Jawaban:
// ["Kelinci", "Hamster"]

// Soal:
// Berikan array cities = ["Jakarta", "Bandung", "Surabaya", "Bali", "Medan", "Yogyakarta"]. Gunakan metode slice() untuk membuat array baru yang berisi elemen pertama dan elemen terakhir.
const cities = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Bali",
  "Medan",
  "Yogyakarta",
];
let awal = cities.slice(0, 1);
let akhir = cities.slice(-1);
let result4 = awal.concat(akhir);
console.log("jawaban soal no 4 = ");
console.log(result4);

// Jawaban:
// ["Jakarta", "Yogyakarta"]

// Soal:
// Berikan array letters = ["A", "B", "C", "D", "E", "F"]. Gunakan metode slice() untuk membuat array baru yang berisi elemen dari indeks 1 hingga -1 (tidak termasuk indeks -1) dengan indeks negatif.
const letters = ["A", "B", "C", "D", "E", "F"];
let result5 = letters.slice(-5, -1);
console.log("jawaban soal no 5 = ");
console.log(result5);
// Jawaban:
// ["B", "C", "D", "E"]

// Soal:
// Berikan array planets = ["Merkurius", "Venus", "Bumi", "Mars", "Jupiter", "Saturnus"]. Gunakan metode slice() untuk membuat array baru yang berisi elemen dari indeks 2 hingga -2 (tidak termasuk indeks -2).
const planets = ["Merkurius", "Venus", "Bumi", "Mars", "Jupiter", "Saturnus"];
let result6 = planets.slice(2, -2);
console.log("jawaban soal no 6 = ");
console.log(result6);
// Jawaban:
// ["Bumi", "Mars", "Jupiter"]

// Soal:
// Berikan array seasons = ["Spring", "Summer", "Autumn", "Winter"]. Gunakan metode slice() untuk membuat array baru yang berisi elemen kedua hingga elemen terakhir dengan indeks negatif.
const seasons = ["Spring", "Summer", "Autumn", "Winter"];
let result7 = seasons.slice(-3);
console.log("jawaban soal no 7 = ");
console.log(result7);
// Jawaban:
// ["Summer", "Autumn", "Winter"]

// Soal:
// Berikan array tools = ["Hammer", "Screwdriver", "Wrench", "Pliers", "Saw", "Drill"]. Gunakan metode slice() untuk membuat array baru yang berisi elemen ketiga hingga elemen terakhir dengan indeks negatif.
const tools = ["Hammer", "Screwdriver", "Wrench", "Pliers", "Saw", "Drill"];
let result8 = tools.slice(-4);
console.log("jawaban soal no 8 = ");
console.log(result8);
// Jawaban:
// ["Wrench", "Pliers", "Saw", "Drill"]

// Soal:
// Berikan array days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]. Gunakan metode slice() untuk membuat array baru yang berisi elemen dari indeks 1 hingga indeks -1 (tidak termasuk indeks -1).
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let result9 = days.slice(1, -1);
console.log("jawaban soal no 9 = ");
console.log(result9);
// Jawaban:
// ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
