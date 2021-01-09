
//Task 1
const button1 = document.getElementById("button1");
button1.addEventListener("click",  event =>{
    document.getElementById("arguing").innerText = "Im Right";
});

const button2 = document.getElementById("button2");
button2.addEventListener("click",  event =>{
    document.getElementById("arguing").innerText = "No, Im Right";
});

//Task 2
const hovering = document.getElementById("element-hover");
hovering.addEventListener("mouseover", event => {
    alert("Hey, I told you not to hover over me!");
    
});

//Task 3
const submitButton = document.getElementById("button-submit");
let username;
let email;
let password;

submitButton.addEventListener("click",  event =>{
    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    //Task 4
    if(password === "1234"){
        document.getElementById("login").innerText = "Logged In"
        alert("logged In")
    }
    else{
        document.getElementById("login").innerText = "Wrong pasword"
        alert("Wrong password");
    }

});


//Bonus Task
let volumeButton = document.getElementById("volume-button");

volumeButton.addEventListener("click", event => {
  let volume
  let radius
  radius = document.getElementById("radius").value;
  
  if(radius >= 0){
    volume = Math.pow(radius,3)*Math.PI*(4/3);
    alert("Volume: " + volume.toFixed(2));
  }else{
      alert("INPUT INVALID, please input a NON-NEGATIVE value")
  }
  
});
