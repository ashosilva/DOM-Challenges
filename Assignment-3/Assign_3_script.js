
//Number 1
const container = document.getElementById("container");
console.log(container);

//Number 2
const container1 = document.querySelector("#container");
console.log(container1);

//Number 3
const second = document.querySelectorAll(".second");
const arrSecond = Array.from(second);
console.log(arrSecond);

//Number 4
const num4 = document.querySelector("ol");//.getElementsByClassName("third");
const third = num4.querySelector(".third");
console.log(third);

//Number 5 Give the section with an id of container the text "Hello!".
//document.querySelector("#container").innerText = "Hello";

//Number 6  Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');
console.log(footer);

// //Number 7  Remove the class main on the div with a class of footer.
footer.classList.remove('main');
console.log(footer);

//num8 Create a new li element.
const num8 = document.createElement("li");
console.log(num8);

//Number 9 Give the li the text "four".
num8.innerText = "four";

//Number 10 Append the li to the ul element.
const unOrder = document.querySelector('ul');
unOrder.appendChild(num8);
console.log(unOrder);

//Number 12  Loop over all of the lis inside the ol tag and give them a background color of "green".
const num12 = document.querySelectorAll("ol li");
for (let i = 0; i < num12.length; i++) {
    num12[i].style.backgroundColor = "green";
}

//Number 13 Remove the div with a class of footer.
document.querySelector(".footer").remove();
