// Intermediate
// Soal:
// Berikan string text = "Hello World! Welcome to JavaScript.". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah spasi.
const text1 = "Hello World! Welcome to JavaScript.";
const Arr1 = text1.split(" ");
console.log(Arr1);
// Jawaban:
// ["Hello", "World!", "Welcome", "to", "JavaScript."]

// Soal:
// Berikan string text = "John,Jane,Doe". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma dan ambil elemen kedua.
const text2 = "John,Jane,Doe";
const Arr2 = text2.split(",");
console.log(Arr2[1]);
// Jawaban:
// "Jane"

// Soal:
// Berikan string text = "apple-orange-banana". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah tanda hubung (-) dan ambil elemen terakhir.
const text3 = "apple-orange-banana";
const Arr3 = text3.split("-");
console.log(Arr3[2]);
// Jawaban:
// "banana"

// Soal:
// Berikan string text = "red,green,blue,yellow". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma dan ambil elemen pertama.
const text4 = "red,green,blue,yellow";
const Arr4 = text4.split(",");
console.log(Arr4[0]);
// Jawaban:
// "red"

// Soal:
// Berikan string text = "cat.dog.bird.fish". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah titik (.) dan ambil elemen ketiga.
const tetx5 = "cat.dog.bird.fish";
const Arr5 = text5.split(".");
console.log(Arr5[2]);
// Jawaban:
// "bird"

// Soal:
// Berikan string text = "JavaScript|HTML|CSS|Python". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah tanda garis tegak (|) dan ambil elemen kedua.
const text6 = "JavaScript|HTML|CSS|Python";
const arr6 = text6.split("|");
console.log(arr6[1]);
// Jawaban:
// "HTML"

// Soal:
// Berikan string text = "car,bike,train,plane". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma dan ambil elemen kedua hingga keempat.
const text7 = "car,bike,train,plane";
const arr7 = text7.split(",");
console.log(arr7.slice(1));
// Jawaban:
// ["bike", "train", "plane"]

// Soal:
// Berikan string text = "lion,tiger,bear,elephant". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah koma dan ambil elemen kedua dan ketiga.
const text8 = "lion,tiger,bear,elephant";
const arr8 = text8.split(",");
console.log(arr8.slice(1, 3));
// Jawaban:
// ["tiger", "bear"]

// Soal:
// Berikan string text = "apple|orange|banana|grape". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah tanda garis tegak (|) dan ambil elemen pertama hingga ketiga.
const text9 = "apple|orange|banana|grape";
const arr9 = text9.split("|");
console.log(arr9.slice(0, 3));
// Jawaban:
// ["apple", "orange", "banana"]

// Soal:
// Berikan string text = "red:green:blue:yellow". Gunakan metode split() untuk membagi string menjadi array berdasarkan pemisah titik dua (:) dan ambil elemen kedua hingga terakhir.
const text10 = "red:green:blue:yellow";
const arr10 = text10.split(":");
console.log(arr10.slice(1));
// Jawaban:
// ["green", "blue", "yellow"]
