
// // Mouse click
// but.addEventListener("click", function () {
//     console.log("Clicked");
// });

// // Mouse enters the button
// but.addEventListener("mouseenter", function () {
//     console.log("Mouse entered");
// });

// // Mouse leaves the button
// but.addEventListener("mouseleave", function () {
//     console.log("Mouse left");
// });

// but.addEventListener("mouseout", () => {
//     console.log("sadasd")
// })
// const btn = document.getElementById("btn");
// btn.addEventListener("mouseover", () => {
//     btn.style.transform = "rotate(10deg)";
// });
// btn.addEventListener("mouseleave", () => {
//     btn.style.opacity = "0.5"
// });
// btn.addEventListener("click", () => {
//     btn.style.opacity = "1"
// });

//     btn.style.display = "none";      // hide
//     btn.style.display = "block";     // show
//     btn.style.opacity = "0.5";       // transparent
//     btn.addEventListener("click", function () {
//     btn.textContent = "Hello Sanal!";
//     btn.style.fontFamily = "Arial";
//     btn.style.color = "red";
//     btn.style.backgroundColor = "blue";
//     btn.style.fontSize = "20px";
//     btn.style.fontWeight = "bold";
//     btn.style.fontStyle = "italic";
//     btn.style.textDecoration = "underline";
//     btn.style.textTransform = "uppercase";
//     btn.style.textAlign = "center";
//     btn.style.textShadow = "2px 2px 2px red";
//     btn.style.textIndent = "20px";
// });
//     btn.style.display = "none";      // hide
//     btn.style.display = "block";     // show
//     btn.style.opacity = "0.5";       // transparent

// metod for addevent listnere

// click
// dblclick
// mouseover
// mouseout
// mousedown
// mouseup
// keydown
// keyup
// input
// change
// submit
// focus
// blur
// scroll

// //create element paragraph
// const p = document.createElement("p");
// p.textContent = "Hello Sanal!";
// document.body.append(p);

// //delte btn
// const sam = document.getElementById("btn")
// sam.remove();


// const title = document.getElementById("title");

// const add = document.getElementById("add");
// const remove = document.getElementById("remove");
// const check = document.getElementById("check");
// const toggle = document.getElementById("toggle");

// add.addEventListener("click", () => {
//     title.classList.add("red");
// });

// remove.addEventListener("click", () => {
//     title.classList.remove("red");
// });

// check.addEventListener("click", () => {
//     console.log(title.classList.contains("red"));
// });

// toggle.addEventListener("click", () => {
//     title.classList.toggle("red");
// });
// let sas = document.getElementById("title");
// let san = document.getElementsByClassName("sam");

// san[0].addEventListener("click", () => {
//     sas.innerHTML = "Helllo"
// })
//Write a program to change the color of a paragraph when a button is clicked.

// let cols = document.querySelector(".Text");
// let sam = document.querySelector(".KL");

// sam.addEventListener("click", () => {
//     cols.style.color = "red";
// });

//Write a program to hide and show a <div> using a button.

// let sam = document.querySelector(".Text");
// let but = document.querySelector(".KL");
// let buts = document.querySelector(".KL1")

// but.addEventListener("click", () => {
//     sam.style.display = "none";
// });

// buts.addEventListener("click", () => {
//     sam.style.display = "block";
// })


// Write a program to change the background color when a button is clicked.
// let back = document.getElementById("sa");

// let but = document.getElementsByClassName("KL1")[0];
// let but2 = document.getElementsByClassName("KL1")[1];

// but.addEventListener("click", () => {
//     back.style.backgroundColor = "yellow";
// });

// but2.addEventListener("click", () => {
//     back.style.backgroundColor = "rgb(255, 0, 0)";
// });

// let val = document.getElementById("input")
// let sam = document.getElementById("btn")

// let pa = document.getElementById("result")

// sam.addEventListener("click", () => {

//     pa.textContent = val.value
//     //.innerHtml

// })
// let container = document.getElementById("container");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//     let p = document.createElement("p");

//     p.innerHTML = "Hello, this is a new paragraph";

//     container.appendChild(p);
// });

//without child
// let container = document.getElementById("container");
// let p = document.getElementsByClassName("text")[0];

// p.remove()

//with child


///very2 impontant
// let Con = document.getElementById("container");

// let but = document.getElementById("btn");
// let but2 = document.getElementById("remove");

// but.addEventListener("click", () => {
//     let sam = document.createElement("p");

//     sam.className = "text";
//     sam.innerHTML = "SAna";

//     Con.appendChild(sam);
// });

// but2.addEventListener("click", () => {
//     let p = document.getElementsByClassName("text")[1];

//     p.remove();
// });


//Write a program to count how many times a button has been clicked.

// let btn = document.getElementById("btn");
// let result = document.getElementById("result");

// let count = 0;

// btn.addEventListener("click", () => {
//     count++;

//     result.innerHTML = count;
// });

//all dom

// let title = document.getElementById("title");

// let input = document.getElementById("taskInput");

// let addBtn = document.getElementById("addBtn");

// let removeBtn = document.getElementById("removeBtn");

// let colorBtn = document.getElementById("colorBtn");

// let toggleBtn = document.getElementById("toggleBtn");

// let message = document.getElementById("message");

// let container = document.getElementById("container");


// // ADD
// addBtn.addEventListener("click", () => {

//     let task = document.createElement("p");

//     task.className = "text";

//     task.innerHTML = input.value;

//     container.appendChild(task);

//     input.value = "";

//     message.innerHTML = "Task added";
// });


// // REMOVE
// removeBtn.addEventListener("click", () => {

//     let task = document.getElementsByClassName("text")[0];

//     task.remove();

//     message.innerHTML = "Task removed";
// });


// // CHANGE BACKGROUND COLOR
// colorBtn.addEventListener("click", () => {

//     container.style.backgroundColor = "yellow";

// });


// // TOGGLE CLASS
// toggleBtn.addEventListener("click", () => {

//     title.classList.toggle("red");

// });

// let sam = prompt("Enter a number");

// let Ram = prompt("Enter Surname");

// let full = sam.concat(Ram);

// console.log(full);
// console.log(full.length);

// let sam = prompt("Enter");
// console.log(sam);

















// javascript before dom finished 
// let number = 100;

// for (let i = 1; i <= number; i++) {

//     console.log(i);
// }

// even
// let num = 100;

// for (let i = 1; i <= num; i++) {

//     if (i % 2 == 0) {
//         console.log(i)
//     }

// }
// let sam = prompt("Enter a number");

// while (sam != 9) {
//     sam = prompt("wrong")
//     console.log("correct")
// }
// let sam = prompt("Enter a number");

// let Ram = prompt("Enter Surname");

// let full = sam.concat(Ram);

// console.log(full);
// console.log(full.length);
//print all element


// String
// const Sana = [21, 21, 2]

// for (let i of Sana) {
//     console.log(i)
// }


//total average
// let student = [ 85, 97, 44, 37, 76, 60];
// let average = 0;
// let sam = 0
// for (let i = 0; i < student.length; i++) {
//     average = average + student[i];
//     sam = average / student.length
// }
// console.log(average)
// console.log(sam);

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after
// applying offer.


//offer how much for offer needed
// let price = [250, 645, 300, 900, 50];

// for (let i = 0; i < price.length; i++) {

//   let  sam = price[i];

//   let offer=sam*10/100
//   console.log(offer)

// }

//how much after deduct

// let price = [250, 645, 300, 900, 50];

// for (let i = 0; i < price.length; i++) {

//   let  sam = price[i];

//   let offer=sam*10/100

//   let final=sam-offer
//   console.log(final)

// }

//javascript last moment
const companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];

companies.splice(0, 1);
companies.splice(1, 1, "ola")

companies.push("Amazon")
console.log(companies)
























