
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

let title = document.getElementById("title");

let input = document.getElementById("taskInput");

let addBtn = document.getElementById("addBtn");

let removeBtn = document.getElementById("removeBtn");

let colorBtn = document.getElementById("colorBtn");

let toggleBtn = document.getElementById("toggleBtn");

let message = document.getElementById("message");

let container = document.getElementById("container");


// ADD
addBtn.addEventListener("click", () => {

    let task = document.createElement("p");

    task.className = "text";

    task.innerHTML = input.value;

    container.appendChild(task);

    input.value = "";

    message.innerHTML = "Task added";
});


// REMOVE
removeBtn.addEventListener("click", () => {

    let task = document.getElementsByClassName("text")[0];

    task.remove();

    message.innerHTML = "Task removed";
});


// CHANGE BACKGROUND COLOR
colorBtn.addEventListener("click", () => {

    container.style.backgroundColor = "yellow";

});


// TOGGLE CLASS
toggleBtn.addEventListener("click", () => {

    title.classList.toggle("red");

});