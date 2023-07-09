import bank from "./bank.js";
import work from "./work.js";

const API_URL = "https://hickory-quilled-actress.glitch.me/computers"
let computers =[];
let computersAsync =[];

// creating variables
const bankButton = document.getElementById("bank-btn");
const workButton = document.getElementById("work-btn");
const buyButton = document.getElementById("buy-btn");
const loanButton = document.getElementById("loan-btn"); // will also show a popup box  that allows you to enter an amount
const payLoanButton = document.getElementById("repay-btn");

const bankBalanceElement = document.getElementById("bank-balance");
const displaySalaryElement = document.getElementById("display-salary");
const displayFeaturesElement = document.getElementById("display-features");
const displayPriceElement = document.getElementById("display-price");
const displayComputerInfoElement = document.getElementById("display-computer-info");
const displayComputerListElement = document.getElementById("display-computer-list");

//adding  event listener to the buttons
bankButton.addEventListener('click',()=>handleBankButtonClick(100))
workButton.addEventListener('click',()=>handleWorkButtonClick(200))
buyButton.addEventListener('click',handleBuyButtonClick)
loanButton.addEventListener('click',()=>handleLoanButtonClick(300))
payLoanButton.addEventListener('click',()=>handlePayLoanButtonClick(400))

// variables 

//Event handlers with function syntax
function handleBankButtonClick(amount){
    bank.deposit(amount)
    displayBankBalance()
    
}
function handleWorkButtonClick(amount){
    work.addSalary(amount)
    displaySalary()


}
function handleBuyButtonClick(){

}
function handleLoanButtonClick(){
    

}
function handlePayLoanButtonClick(){

}

// fetch API
function getComputers(API_URL){
    fetch(API_URL)
    .then(Response =>Response.json)
    .then()
    computers=json
}

function displayBankBalance(){
bankBalanceElement.innerText = `Balance kr${bank.getBalance()}`

}
function displaySalary(){
displaySalaryElement.innerText = `Pay  kr ${work.showCurrentSalary()}`

}
function displayComputerInfo(){
   // displayComputerInfoElement.
    
}
function displayFeatures(){
   // displayFeaturesElement
    
}
function displayPrice(){
   // displayPriceElement
    
}
function displayComputerList(){
    //displayComputerListElement
    
}
