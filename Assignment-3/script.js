
//Number 1
const container = document.getElementById("container");
console.log(container);

//Number 2
const container1 = document.querySelector("#container");
console.log(container1);

//Number 3
const second = document.getElementsByClassName("second");
console.log(second);

//Number 4
const num4 = document.getElementsByTagName("ol")[0].getElementsByClassName("third");
console.log(num4);

//Number 5 Give the section with an id of container the text "Hello!".
// const num5 = document.getElementById("container").innerText = "Hello";
// console.log(num5);

//Number 6  Add the class main to the div with a class of footer.
const footer = document.querySelector('.footer');
footer.classList.add('main');
console.log(footer);

//Number 7  Remove the class main on the div with a class of footer.
footer.classList.remove('main')
console.log(footer);

//num8 Create a new li element.
const num8 = document.createElement("li");
console.log(num8);

//Number 9 Give the li the text "four".
num8.innerText = "four";

//Number 10 Append the li to the ul element.
// const ul = document.querySelector('ul');
// ul.appendChild(num8);
//const num10 = document.getElementsByTagName("ul").appendChild(number9);
document.getElementsByTagName('ul')[0].appendChild(num8);

//Number 12  Loop over all of the lis inside the ol tag and give them a background color of "green".
const num12 = document.querySelectorAll("ol li");
for (let i = 0; i < num12.length; i++) {
num12[i].style.backgroundColor = "green";
}

//Number 13 Remove the div with a class of footer.
document.getElementsByClassName("footer")[0].remove();
