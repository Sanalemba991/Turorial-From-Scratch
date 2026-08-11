//multiple store data type
// let person = {
//     name: "John",
//     age: 30
// };

const { jsx } = require("react/jsx-runtime");

// console.log(person.name , person.age);

//type of 
// const Sai=["sam","ram","saasa"]

// console.log(typeof Sai[0]);

//Arithmetic operator

// let a=10;
// let b=20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

//greater small and equal operator
// let a = 32;
// let b = 90;
// console.log(a<b);


//logical operator
//&& both true and || one true 
// let sam=89;

// let ram=90;

// if(sam<=21 || ram>=21){
//     console.log("eligible for vote");

// }
// else{
//     console.log("not eligible for vote");
// }

//if else statement

// const sana=50;

// if(sana>80){
// console.log("sana is greater than 90")

// }
// else {
//     console.log("sana is less than 90")
// }
//else if statement

// let marks = 78;

// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 75) {
//     console.log("B");
// } else if (marks >= 60) {
//     console.log("C");
// } else {
//     console.log("Fail");
// }

//swicth
// ram =111;

// switch (ram){
// case 1 :
// console.log("Its wrong");
// break;

// case 90:
// console.log("it true");
// break;
//  default:
// console.log("not found")
// }

//function
//function GooBye(){
//     console.log("GOodBYE");
// }
// GooBye();

// function Add(a,f){

//     ram=a+f;
//     console.log(ram);

// }
// Add(43,90);

//function with argument and parameter
// function Add(m,k){
//     Dam=m+k;
//     console.log(Answer =(Dam));
// }
// Add(89,90)

// function with return type
// function giveCandy() {
//     Ram=9021341230;
//     return Ram;
// }

// let x = giveCandy();

// console.log(x);

//function expression 
// const sam=function Rom(){
//     console.log("raaa")
// };
// sam();
//interview qiuestion;
// const Dis=function (deg,sec){
//     return deg-sec;
// }
// console.log(Dis(59,9))

//interview question
// const calculateSalary = function (basicSalary, bonus, tax) {
//     if (basicSalary < 0) {
//         return "Invalid salary";
//     }

//     return basicSalary + bonus - tax;
// };

// console.log(calculateSalary(-100, 500, 50));

//arrow function

// const calculateFinalPrice = (price, discount, tax) => {
//     return price - discount + tax;
// };

// console.log(calculateFinalPrice(1000, 200, 50));

// callback function
// function calculateOperation(a,b,operation){
//     return operation(a,b)
// }

// const Sam= calculateOperation(20, 10, function(a, b) {
//     return a - b;
// })
// console.log(Sam)

// // console.log(Sam)

// const profile =[
//     {
//     name:"Shardha",
//     posts:195,
//     followers:"56k",
//     following: 4,
//     description:"Apna College"


// }
// ]
// console.log(profile[0].description)
// for loop
// for(let sam=1;sam<=900;sam++){
//     console.log("Sam running")
// }
// console.log("its finished")
//sum of n number;
// let sam=0;


// for(let i=1;i<=5;i++){
//     sam=sam+i;//in here first sam=0+1=1 then 1+2=3 then 3+3=6 then 6+4=10 then 10+5=15
// }
// console.log(sam,"Final answer")

//taking input from user
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// let sum = num1 + num2;

// console.log("The sum is:", sum);


// code will not wokred it cause i is working only in blocks
// for (let i=1;i<=5;i++){
//     console.log("i =",i+1)
// }
// cosnole.log(i)


// if i write var it will go to others also


//while
// let i = 1;
// while (i <= 10); {
//     console.log("SAd");
//     i++;
// }
//do while mana shida twdwshina work hanna twrni untill loidribuk krigumba loire while da lkni

// let i=20;
// do{
//     console.log("",i);
//     i++;

// }
// while(i<=30);{

//     console.log("its smaller than 30")
// i++
// }


// Loop	Returns	Best used for
// for...of	Values	Arrays, strings, Sets
// for...in	Indexes/keys	Objects, array indexes
// for	Full control (index)	When you need the index or custom stepping

// for of
// let sam="juniour";

// let cou
// for (let i of sam){
//     console.log(sam);
//     i++;
// }

//for loof with condition statement
// for (let num = 0; num <=100; num++) {

//     if(num%2==0){
//         console.log(num)
//     }
// }


//without using for loop
// const game=25;

// let sam=Number(prompt("eneter the game number"));

// if(sam ===game){

//     console.log("correct ")
// }
// else{
//     console.log("not corect")
// }

//game without using repitation
// const game=25;

// let user=(prompt("guess number"));
// console.log(user)


//Game wit repetation

//p[ractice quesiton]

// const game = 25;

// let userame = prompt("guess number");


// while (userame!=game) {
// userame=prompt("you enter worng number");
// }
// console.log("coprrectr")

//item discount
// let Item=[90,900,34]

// let sum=0;

// for (let i=0;i<Item.length;i++){
//     sum=Item[i]*30/100
//     Item[i]=Item[i]-sum

// }
//  console.log(Item)

//for of

// let item=[32,90,78,90]
// let idx=0;
// for(let val of item){
//     console.log(`index of ${idx}= ${val}`)
//     idx++
// }

//push only end one others all by splice
// let Marvel = ["asdasd", "oasjdpasd", "sana"];

// let sam=Marvel.push("sana");
// console.log(sam)
// console.log(Marvel)
// Marvel.push("Hero")
// console.log(Marvel)

//to striong


//concat
// let Marvel = ["asdasd", "oasjdpasd", "sana"];
// let Sam=["iojpoasd"]

// let Sams=Marvel.concat(Sam)
// console.log(Sams)

//Array Adding shif,unsfhit,pusp,pop,splice,slice

//Create an array to store the following companies:
//"Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//a. Remove the first company from the array
//b. Remove "Uber" and add "Ola" in its place.
//c. Add "Amazon" at the end of the array.

// let Company=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// Company.shift();
// Company.splice(1,1,"Ola")
// console.log(Company)
// Company.push("Amazon")
// console.log(Company)


// }
// ]
// console.log(profile[0].description)

// reverse string


//new style
// let  a=90;
// let b=80
// console.log("a+b=",a+b)

// ** hyrishe keino hyba mtm da power ne 2*2*2*


//unary operator 

// let a=9

// let b=a;

// console.log(b)//9
// console.log(a)//10 increment operator first use then increment , increase after stored

//operators

// a=9

// a %= 34;

// console.log(a);//10 increment operator first use then increment , increase after stored

// let a =9;

//  a **= 9;
// console.log(a);

// conparision operator

// b=9;
// c=9;

// b==c;

// console.log("b==c",b===c);

// b=9;

// c=90;

// c !==b;

// console.log("c!==b",c!==b);

//conditional operator

//if
// let age =20;

// if (age >=18){
//     console.log("eligible for vote");
// }
// else{
//     console.log("not eligible for vote");
// }


// let mode="white";
// let color;
// if(mode==="dark"){

//     color="black";
// }
// else{

//     color="white";
// }

// console.log(color);
//divisible
// let num=10

// if(num %2==0){
//     console.log("its devisible")
// }


// let num = 13;

// if (num % 2 == 0) {
//     console.log("It's divisible by 2");
// } else {
//     console.log("It's not divisible by 2");
// // }
// let numb = 90;

// if (numb % 30 === 0) {

//     console.log("its devided by 90")

// }
// else if (numb % 30 === 0) {
//     console.log("its divided by 30")
// }
// else (numb % 40 === 0)
// {
//     console.log("its divided by 40")
// } syntax error will be there 

// syntax not error
// let numb = 90;

// if (numb % 20 === 0) {
//     console.log("It's divisible by 20");
// }
// else if (numb % 3 === 0) {
//     console.log("It's divisible by 3");
// }
// else if (numb % 10 === 0) {
//     console.log("It's divisible by 40");
// }
// else {
//     console.log("It is not divisible by 20, 3, or 40");
// }

//else if

// let age =9;

// if (age === 90){
//     console.log("age is 90")
// }
// else if(age === 40){
//     cosnole.log("age is 40")
// }

// else
// {
//     console.log("not in here")
// }

//ternary operator
// let age =9;

// let you =age>18 ? "adult":"bit wrong";

// console.log(you)


//taking input from user using prompt and alert in here taking prompt is for taking input from user
// alert("hello world");//one tim pop up

// let propm = prompt("Enter the number");

// if (propm % 5 == 0) {
//     console.log("its  Divisible")
// }
// else {
//     console.log(propm,"its not divisble")
// }
//exercise
// let a = -90;

// if (a > 0) {
//     console.log("a is a positive number");
// } else if (a < 0) {
//     console.log("a is a negative number");
// } else {
//     console.log("a is zero");
// }

// let sam = 10;

// if (sam % 2 === 0) {
//     console.log("even")
// }
// else {
//     console.log("odd")
// }



//guessing number 

// const sana = 25;

// let ram = prompt("think the number");

// while (sana !== ram) {
//     ram = prompt("you enter wrong nuime")
// }
// console.log("right")

// string in js


// let str="opiuou"

// console.log(str[0])


//string template with string interpolation
// let obj={
//     name:"Sana",
//     price:89,

// }
// let output=`the cos of pen is ${obj.price}`
// console.log(output);

// console.log(obj.name,obj.price)





//pyramids
// function Sam() {
//     let Str = "sadasdasdasdtewr";
//     let count = 0;

//     for (let i = 0; i < Str.length; i++) {

//         if (Str || a || e || i || i || o || u) {

//         }
//         {
//             count = count + Str[i];
//             console.log(count)
//         }
//     }
//     return Sam
// }
// console.log(Sam())



//Create a function using the “function” keyword that takes a String as an argument &
//returns the number of vowels in the string.
//count the vowel
// function Sam() {
//     let Str = "sadasdasdasdtewr";
//     let count = 0;

//     for (let i = 0; i < Str.length; i++) {

//         if (Str[i] == "a" ||
//             Str[i] == "e" ||
//             Str[i] == "i" ||
//             Str[i] == "o" ||
//             Str[i] == "u") {
//             count++;

//         }
//     }
//     return count
// }
// console.log(Sam())



//Create a function using the “function” keyword that takes a String as an argument &
//returns the number of vowels in the string.


/// without function 
// let Str = "mnoaisnreioewrnfkfewjmpiorjwpeorjwperwe";
// let count = "";

// for (let i = 0; i < Str.length; i++) {

//     if (Str[i] == "a" ||
//         Str[i] == "e" ||
//         Str[i] == "i" ||
//         Str[i] == "o" ||
//         Str[i] == "u")
//            count = count + Str[i]
//         ; {

//     }

// }
// console.log(count)


/// with function 
// function Sam() {

//     let Str = "mnoaisnreioewrnfkfewjmpiorjwpeorjwperwe";
//     let count = "";

//     for (let i = 0; i < Str.length; i++) {

//         if (Str[i] == "a" ||
//             Str[i] == "e" ||
//             Str[i] == "i" ||
//             Str[i] == "o" ||
//             Str[i] == "u")
//             count = count + Str[i]
//                 ; {

//         }

//     }
//     return count
// }
// console.log(Sam())

//Arrow Function
// const Sam=()=>{

//     let Str = "mnoaisnreioewrnfkfewjmpiorjwpeorjwperwe";
//     let count = "";

//     for (let i = 0; i < Str.length; i++) {

//         if (Str[i] == "a" ||
//             Str[i] == "e" ||
//             Str[i] == "i" ||
//             Str[i] == "o" ||
//             Str[i] == "u")
//             count = count + Str[i]
//                 ; {

//         }

//     }
//     return count
// };
// console.log(Sam())

// let str = "Sana";

// str.split("").forEach((i,r) => {
//     console.log(i,r);
// });


// let Sana = [6, 7, 8, 9, 123];

// Sana.forEach(function (i) {
//     console.log(i * 9);
// });
// //
// let Ram = [6, 7, 8, 9, 123];

// let saa = Sana.map(function (i) {
//     return i * 9;
// });

// console.log(saa);
// //
// let Rom=[1321,432,324]
// let result = Rom.filter(function(i) {
//     return i > 900;
// });

// console.log(result);


//
// let arr = [2, 4, 6, 8, 10];

// const Am=(asm)=>{

// return asm*2;

// }
// let assm=arr.map(Am)

// console.log(assm)


//checking largest
// let arr = [2, 4, 6, 8, 10];
// let store = arr.filter((sad) => {
//   return sad > 3;
// });

// console.log(store);

//most largest

//Max min == find the largest and Max Min find the smallest

//normal function
// let arr = [2, 4, 6, 8, 10];
// let Largest = arr.filter(function (val) {

//     return val === Math.max(...arr)

// })
// console.log(Largest)

// let arr = [2, 4, 6, 8, 10];

// let Largest=arr.filter((val)=>{
//     return val=== Math.min(...arr)
// })

// console.log(Largest)

///

let arr = [10, 20, 30];

// let result = arr.map(function(value) {
//   return value * 2;
// });

// console.log(result);

// function Aso(val) {

//     return val * 2

// }

// let Am = arr.map(Aso);
// console.log(Am)



// //
// let Anmto = ['werwerw', 'wer', 'Shahbaz'];

// function SAM(value) {
//   console.log(value + "erwrwer");
// }

// Anmto.forEach(SAM);


//forEach,map,filter

// let arr = [10, 20, 30, 40, 50];

// // forEach
// function printValue(val) {
//   console.log(val);
// }

// arr.forEach(printValue);


// map
// function doubleValue(val) {
//   return val * 2;
// }

// let doubled = arr.map(doubleValue);

// console.log(doubled);


// filter
// function greaterThan20(val) {
//   return val > 20;
// }

// let filtered = arr.filter(greaterThan20);

// console.log(filtered);

//normal function

// let SAm = ["sadasd", "ikikuik", "jiuiiij"]
//normal function

// function AM(val)
// {
//     console.log (val);
// }
// SAm.forEach(AM);

//anynonymous function
// SAm.forEach((val)=>{
// console.log (val);
// })

//arrow fucntion
// SAm.forEach(function(val){
//     console.log(val)
// })


// let SsAm = ["sadasd", "ikikuik", "jiuiiij"]

//normal function
// function SnM(val){
// return val+"oiasndoiasd"
// }

// let AMM=SsAm.map(SnM)

// console.log(AMM)

// //anynonymous function
// let SAm = (val) => {
//   return val + "op";
// };

// let Sop = SsAm.map(SAm);

// console.log(Sop);


//ARROW
// let SsAm = ["sadasd", "ikikuik", "jiuiiij"]

// let SAMM = SsAm.map((val) => {
//     return val + "asdasd";

// })
// console.log(SAMM)

