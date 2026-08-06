//multiple store data type
// let person = {
//     name: "John",
//     age: 30
// };

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

