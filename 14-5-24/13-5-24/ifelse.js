///withoutternary///

//nilai//
var i = 37;//variabel nilai yang dimasukkan//

var withoutternary;//nama variabel//

if (i>95){ //kemungkinan pertama//

withoutternary = "A";

}
else if (i>80){ //kemungkinan kedua//
    withoutternary ="B";
}
else if (i>75){ //kemungkinan ketiga//
    withoutternary ="C";
}
else if (i>60){ //kemungkinan keempat//
    withoutternary ="D";
}
else if (i>50){ //kemungkinan kelima//
    withoutternary ="E";
}
 else { //kemungkinan terakhir//
withoutternary ="UJIAN ULANG"
}

//suhu//
var x = 19;

var suhu;

if (x>25){

suhu = "Panas";
}
else if (x>=20){
    suhu ="Normal";
}
 else {
suhu ="Dingin"
}

//usia//
var y = 9;

var usia;

if (y>=60){

usia = "Lansia";

}
else if (y>18){
    usia ="Dewasa";
}
else if (y>10){
    usia ="Remaja";
}
 else {
usia ="anak-anak"
}

//tinggi badan//
var z = 178;

var tb;

if (z>170){

tb = "Tinggi";

}
else if (z>150){
    tb ="Normal";
}
 else {
tb ="Pendek"
}

//berat badan//
var r = 84;

var bb;

if (r>65){

bb = "Obesitas";

}
else if (r>35){
    bb ="Normal";
}
 else {
bb ="Kurang Gizi"
}

//kode untuk menampilkan hasil//
console.log(withoutternary)
console.log(suhu)
console.log(usia)
console.log(tb)
console.log(bb)

///ternaryanswer///

//nilai//
var i=87;//variabel nilai yang dimasukkan//
const ternaryanswer = i > 75 ?"Tuntas": "Remidi"; //?=if,:=else//

//suhu//
var x=22;
const derajat = x > 20 ? "Panas": "Dingin";

//usia//
var y=19;
const umur = y > 20 ? "Dewasa": "Anak-anak";

//tinggi//
var z=167;
const tinggi = z > 165 ? "Tinggi": "Pendek";

//berat badan//
var r=45;
const berat = r > 55 ? "Di Atas Rata-rata": "Di Bawah Rata-rata";

//kode untuk menampilkan hasil//
console.log(ternaryanswer)
console.log(derajat)
console.log(umur)
console.log(tinggi)
console.log(berat)

///ternarywithif///

//nilai//
var i= 46;//variabel yang ingin dimasukkan//
const ternarywithif = i > 80 ? "Lulus" : i < 65? "Remidi": "Tidak Lulus";//?=kemungkinan pertama(if),:=if else, : terakhir=else//

//suhu//
var x= 21;
const celsius = x > 25 ? "Panas" : x > 20? "Normal": "Dingin";

//usia//
var y= 20;
const lama = i > 60 ? "Lansia" : i > 20? "Dewasa": "Anak-anak";

//tinggi badan//
var z= 155;
const pendek = z > 165 ? "Tinggi" : z > 150? "Normal": "Pendek";

//berat badan//
var r= 50;
const ringan = r > 80 ? "Obesitas"  : r > 45? "Normal": "Kurang Gizi";

//kode untuk menampilkan hasil//
console.log(ternarywithif)
console.log(celsius)
console.log(lama)
console.log(pendek)
console.log(ringan)
