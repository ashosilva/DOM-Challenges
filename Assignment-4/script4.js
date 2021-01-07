
//Task 1
const button1 = document.getElementById("button1");
button1.addEventListener("click", function(event){
    document.getElementById("arguing").innerText = "Im Right";
});


const button2 = document.getElementById("button2");
button2.addEventListener("click", function(event){
    document.getElementById("arguing").innerText = "No, Im Right";
});