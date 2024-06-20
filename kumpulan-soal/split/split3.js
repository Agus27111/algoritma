// Advanced
// Soal:
// Berikan string text = "Hello,World! Welcome,JavaScript.". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma dan spasi (gunakan regex) dan ambil elemen kedua hingga kelima.
const text1 = "Hello,World! Welcome,JavaScript.";
const Arr1 = text1.split(/[, ]+/);
console.log(Arr1.slice(1));
// Jawaban:
// ["World!", "Welcome", "JavaScript."]

// Soal:
// Berikan string text = "a,b,c,d,e,f,g". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma dan gabungkan kembali array menjadi string dengan pemisah tanda hubung (-).
const text2 = "a,b,c,d,e,f,g";
const Arr2 = text2.split(",");
console.log(Arr2.join("-"));
// Jawaban:
// "a-b-c-d-e-f-g"

// Soal:
// Berikan string text = "apple-orange-banana-grape". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah tanda hubung (-), ambil elemen pertama dan terakhir, lalu gabungkan kembali dengan pemisah spasi.
const text3 = "apple-orange-banana-grape";
const arr3 = text3.split("-");
console.log(arr3[0] + " " + arr3[arr3.length - 1]);
// Jawaban:
// "apple grape"

// Soal:
// Berikan string text = "lion tiger bear elephant". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah spasi, ubah semua elemen menjadi huruf kapital, lalu gabungkan kembali dengan pemisah koma.
const text4 = "lion tiger bear elephant";
const arr4 = text4.split(" ");
console.log(arr4.map((arr) => arr.toUpperCase()).join(","));
// Jawaban:
// "LION,TIGER,BEAR,ELEPHANT"

// Soal:
// Berikan string text = "one-two-three-four". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah tanda hubung (-), ambil elemen kedua dan ketiga, lalu gabungkan kembali dengan pemisah tanda garis tegak (|).
const text5 = "one-two-three-four";
const arr5 = text5.split("-");
const newArr = arr5.slice(1, 3);
console.log(newArr.join("|")); //cara satu
console.log(arr5[1] + "|" + arr5[2]); //cara dua
// Jawaban:
// "two|three"

// Soal:
// Berikan string text = "John,Doe,30,New York". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma, lalu buat objek dengan properti firstName, lastName, age, dan city dari elemen-elemen array tersebut.
const text6 = "John,Doe,30,New York";
const arr6 = text6.split(",");
const arr = ["firstName", "lastName", "age", "city"];
const obj = arr6.reduce((acc, curr, index) => {
  acc[arr[index]] = curr;
  return acc;
}, {});
console.log(obj);
// Jawaban:
// { firstName: "John", lastName: "Doe", age: "30", city: "New York" }

// Soal:
// Berikan string text = "HTML,CSS,JavaScript,Python,Java". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma, ambil tiga elemen pertama, lalu gabungkan kembali dengan pemisah spasi.
const text7 = "HTML,CSS,JavaScript,Python,Java";
const arr7 = text7.split(",");
const newArr7 = arr7.slice(0, 3);
console.log(newArr7.join(" "));
// Jawaban:
// "HTML CSS JavaScript"

// Soal:
// Berikan string text = "car-bike-plane-boat". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah tanda hubung (-), ambil elemen kedua dan terakhir, lalu gabungkan kembali dengan pemisah spasi.
const text8 = "car-bike-plane-boat";
const arr8 = text8.split("-");
const secondArr = arr8[1];
const lastArr = arr8[arr8.length - 1];
const newArr8 = [secondArr, lastArr];
console.log(newArr8);
console.log(newArr8.join(" "));
// Jawaban:
// "bike boat"

// Soal:
// Berikan string text = "apple-orange-banana-grape". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah tanda hubung (-), ubah elemen pertama menjadi huruf kapital, lalu gabungkan kembali dengan pemisah koma.
const text9 = "apple-orange-banana-grape";
const arr9 = text9.split("-");
arr9[0] = arr9[0].toLocaleUpperCase();
console.log(arr9.join(","));
// Jawaban:
// "APPLE,orange,banana,grape"

// Soal:
// Berikan string text = "red,green,blue,yellow". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma, hapus elemen kedua, lalu gabungkan kembali dengan pemisah tanda garis tegak (|).
const text10 = "red,green,blue,yellow";
const arr10 = text10.split(",");
arr10.splice(1, 1);
console.log(arr10.join("|"));
// Jawaban:
// "red|blue|yellow"
