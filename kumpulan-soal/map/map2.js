// Intermediate
// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah objek dengan properti value yang berisi angka tersebut.
const numbers1 = [1, 2, 3, 4, 5];
const newArr1 = numbers1.map((num) => ({ value: num }));
console.log(newArr1);
// Jawaban:
// [{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}]

// Soal:
// Berikan array words = ["apple", "banana", "cherry"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah huruf pertama dari setiap kata.
const words2 = ["apple", "banana", "cherry"];
const newArr2 = words2.map((first) => first[0]);
console.log(newArr2);
// Jawaban:
// ["a", "b", "c"]

// Soal:
// Berikan array numbers = [5, 10, 15, 20]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah hasil penambahan indeks elemen tersebut.
const numbers3 = [5, 10, 15, 20];
const newArr3 = numbers3.map((num, index) => num + index);
console.log(newArr3);
// Jawaban:
// [5, 11, 17, 23]

// Soal:
// Berikan array names = ["Alice", "Bob", "Charlie"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah panjang nama tersebut.
const names = ["Alice", "Bob", "Charlie"];
const newArr4 = names.map((string) => string.length);
console.log(newArr4);
// Jawaban:
// [5, 3, 7]

// Soal:
// Berikan array prices = [10, 20, 30]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah string dalam format mata uang (misalnya, "Rp 10").
const prices = [10, 20, 30];
const newArr5 = prices.map((num) => `Rp ${num}`);
console.log(newArr5);
// Jawaban:
// ["Rp 10", "Rp 20", "Rp 30"]

// Soal:
// Berikan array dates = ["2021-01-01", "2021-02-01", "2021-03-01"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah objek Date.
const dates = ["2021-01-01", "2021-02-01", "2021-03-01"];
const newArr6 = dates.map((date) => `new Date(${date})`);
console.log(newArr6);
// Jawaban:
// [new Date("2021-01-01"), new Date("2021-02-01"), new Date("2021-03-01")]

// Soal:
// Berikan array temperatures = [0, 20, 25, 40]. Gunakan metode map() untuk membuat array baru di mana setiap elemen dikonversi dari Celsius ke Fahrenheit (rumus: (C * 9/5) + 32).
const temperatures = [0, 20, 25, 40];
const newArr7 = temperatures.map((temp) => (temp * 9) / 5 + 32);
console.log(newArr7);
// Jawaban:
// [32, 68, 77, 104]

// Soal:
// Berikan array numbers = [1, 2, 3, 4, 5]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah kuadrat dari angka tersebut.
const numbers8 = [1, 2, 3, 4, 5];
const newArr8 = numbers8.map((num) => num ** 2);
console.log(newArr8);
// Jawaban:
// [1, 4, 9, 16, 25]

// Soal:
// Berikan array words = ["apple", "banana", "cherry"]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah kata terbalik.
const words9 = ["apple", "banana", "cherry"];
const newArr9 = words9.map((word) => word.split("").reverse().join(""));
console.log(newArr9);
// Jawaban:
// ["elppa", "ananab", "yrrehc"]

// Soal:
// Berikan array objects = [{a: 1}, {a: 2}, {a: 3}]. Gunakan metode map() untuk membuat array baru di mana setiap elemen adalah nilai dari properti a.
const objects = [{ a: 1 }, { a: 2 }, { a: 3 }];
const newArr10 = objects.map((obj) => obj.a);
console.log(newArr10);
// Jawaban:
// [1, 2, 3]

// Diberikan array students sebagai berikut:
// const students = [
//   { name: "John", score: 80 },
//   { name: "Jane", score: 95 },
//   { name: "Doe", score: 75 }
// ];
// Buatlah sebuah array baru studentRemarks yang berisi kalimat untuk setiap siswa dalam format "Nama: John, Nilai: 80, Keterangan: Lulus" untuk siswa yang memiliki nilai 70 ke atas, dan "Nama: Doe, Nilai: 75, Keterangan: Tidak Lulus" untuk siswa yang memiliki nilai di bawah 70.
const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 95 },
  { name: "Doe", score: 75 },
];
const studentRemarks = students.map((student) => {
  if (student.score >= 70) {
    return `Siswa: ${student.name}, Nilai: ${student.score}, Keterangan: Lulus`;
  } else {
    return `Siswa: ${student.name}, Nilai: ${student.score}, Keterangan: Tidak Lulus`;
  }
});
console.log(studentRemarks);
// Soal 1:
// Diberikan array products sebagai berikut:

// javascript
// Copy code
// const products = [
//   { id: 1, name: "Laptop", price: 1200 },
//   { id: 2, name: "Mouse", price: 20 },
//   { id: 3, name: "Keyboard", price: 100 }
// ];
// Ubahlah setiap objek dalam array products sehingga masing-masing objek memiliki properti formattedPrice yang berisi harga dalam format mata uang (misalnya, $1,200 untuk laptop).
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 20 },
  { id: 3, name: "Keyboard", price: 100 },
];

const formattedPrice = products.map(
  (product) => `$${product.price} untuk ${product.name}`
);
console.log(formattedPrice);

// Soal 2:
// Diberikan array employees sebagai berikut:

// javascript
// Copy code
// const employees = [
//   { id: 1, name: "John Doe", department: "HR", salary: 50000 },
//   { id: 2, name: "Jane Smith", department: "Engineering", salary: 75000 },
//   { id: 3, name: "Michael Johnson", department: "Marketing", salary: 60000 }
// ];
// Tambahkan properti annualSalary pada setiap objek dalam array employees yang berisi gaji tahunan (12 kali gaji bulanan).
const employees = [
  { id: 1, name: "John Doe", department: "HR", salary: 50000 },
  { id: 2, name: "Jane Smith", department: "Engineering", salary: 75000 },
  { id: 3, name: "Michael Johnson", department: "Marketing", salary: 60000 },
];
const newEmployees = employees.map((employee) => ({
  ...employee,
  annualSalary: employee.salary * 12,
}));

console.log(newEmployees);

// Soal 3:
// Diberikan array books sebagai berikut:

// javascript
// Copy code
// const books = [
//   { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//   { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//   { id: 3, title: "1984", author: "George Orwell", year: 1949 }
// ];
// Tambahkan properti summary pada setiap objek dalam array books yang berisi ringkasan singkat tentang buku tersebut.
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];
const newBooks = books.map((book) => ({
  id: book.id,
  title: book.title,
  author: book.author,
  year: book.year,
  summary: `${book.title} was written by ${book.author} in ${book.year}`,
}));

console.log(newBooks);

// Soal 4:
// Diberikan array orders sebagai berikut:

// javascript
// Copy code
// const orders = [
//   { id: 1, customer: "Alice", total: 120 },
//   { id: 2, customer: "Bob", total: 220 },
//   { id: 3, customer: "Charlie", total: 150 }
// ];
// Ubahlah nama properti customer menjadi name pada setiap objek dalam array orders.
const orders = [
  { id: 1, customer: "Alice", total: 120 },
  { id: 2, customer: "Bob", total: 220 },
  { id: 3, customer: "Charlie", total: 150 },
];

const newOrders = orders.map((order) => ({
  id: order.id,
  name: order.customer,
  total: order.total,
}));

console.log(newOrders);

// Soal 5:
// Diberikan array cars sebagai berikut:

// javascript
// Copy code
// const cars = [
//   { id: 1, brand: "Toyota", model: "Camry", year: 2020 },
//   { id: 2, brand: "Honda", model: "Civic", year: 2019 },
//   { id: 3, brand: "Ford", model: "F-150", year: 2021 }
// ];
// Tambahkan properti age pada setiap objek dalam array cars yang berisi usia mobil tersebut (tahun saat ini dikurangi tahun produksi).
const cars = [
  { id: 1, brand: "Toyota", model: "Camry", year: 2020 },
  { id: 2, brand: "Honda", model: "Civic", year: 2019 },
  { id: 3, brand: "Ford", model: "F-150", year: 2021 }
];
const newCars = cars.map((car) => ({
  id: car.id,
  brand: car.brand,
  model: car.model,
  year: car.year,
  age: new Date().getFullYear() - car.year
}))

console.log(newCars);

