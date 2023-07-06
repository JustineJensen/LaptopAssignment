const API_URL = "https://hickory-quilled-actress.glitch.me/computers"
let computersInfo =[];
let computersAsync =[];

// creating variables
const bankButton = document.getElementById("bank-btn");
const workButton = document.getElementById("work-btn");
const buyButton = document.getElementById("buy-btn");
const getLoan = document.getElementById("btn-loan");

//adding listener to the buttons
bankButton.addEventListener('click',handleButtonClick)
workButton.addEventListener('click',handleButtonClick)
buyButton.addEventListener('click',handleButtonClick)
getLoan.addEventListener('click',handleButtonClick)

function handleButtonClick(){
    console.log("it worked");
   // buyButton.alert ="Computer has been added"
   const addComputer = buyButton.value
   console.log(addComputer);
}


// fetch API
function getLaptopData(url){
    fetch(url)
    .then(Response =>Response.json)
    .then()
}