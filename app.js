import bank from "./bank.js";
import work from "./work.js";
import loan from "./loan.js";
import buy from "./buy.js";
import { API_URL ,image_URL} from "./utils.js";


let computer =[];

// creating variables
const bankButton = document.getElementById("bank-btn");
const workButton = document.getElementById("work-btn");
const buyButton = document.getElementById("buy-btn");
const loanButton = document.getElementById("loan-btn"); 
const repayLoanButton = document.getElementById("repay-btn");
const bankBalanceElement = document.getElementById("bank-balance");
const displaySalaryElement = document.getElementById("display-salary");
const displayFeaturesElement = document.getElementById("display-features");
const displayPriceElement = document.getElementById("computer-price");
const displayComputerInfoElement = document.getElementById("display-computer-info");
const displayComputerListElement = document.getElementById("display-computer-list");
const displayOutStandingLoan = document.getElementById("display-OutStanding-Loan")
const displayComputerTitle = document.getElementById("computer-title")
const displayImageElement = document.getElementById("display-img")

//adding  event listener to the buttons
bankButton.addEventListener('click',()=>handleBankButtonClick(100))
workButton.addEventListener('click',()=>handleWorkButtonClick(100))
buyButton.addEventListener('click',handleBuyButtonClick)
repayLoanButton.addEventListener('click',()=>handleRePayLoanButtonClick())
displayComputerListElement.addEventListener('change',handleComputerSelected)

// handle loan button
loanButton.addEventListener('click', function() {
    let amount =0
    const bankBalance = bank.getBalance();
    let outStandingLoan = loan.getOutStandingLoan();
    let loanAmount = prompt("Enter amount")
    if (typeof loanAmount !== Number) {
        loanAmount = Number(loanAmount)
    }
    
    if(bank.getBalance()=== 0){
        alert("You don't have money on the account")
    }
    else if(outStandingLoan > 0){
        alert("You already have an outstanding loan. Please repay the previous loan before applying for a new one.");
    }else {
        if (loanAmount > bankBalance * 2) {
            alert("You cannot get a loan more than double your bank balance."); 
        } else if(loanAmount <= 0) {
            alert("Loan amount should be a positive value.");
        }else{
            alert ("Loan application approved")
            outStandingLoan += loanAmount
            loan.setLoan(outStandingLoan)
            bank.deposit(loanAmount)
            displayBankBalance()
            displayLoan()
            repayLoanButton.style.display = 'block';
        }
    } 
});

// variables 
let computers= []
let currentSelectedComputer

//Event handlers with function syntax
function handleComputerSelected(event){
    currentSelectedComputer = computers.find(computer=>computer.id ==event.target.value)
    displayComputerInfoElement.innerText =currentSelectedComputer.description
    displayPriceElement.innerText =`kr ${currentSelectedComputer.price}`
    displayFeaturesElement.innerText =currentSelectedComputer.specs
    displayComputerTitle.innerText = currentSelectedComputer.title

    //display selected image
    displayImageElement.setAttribute("src",image_URL+ currentSelectedComputer.image)
}  

function handleBankButtonClick(){
    work.transferMoneyToBank()
    displaySalary()
    displayBankBalance()
    
}
function handleWorkButtonClick(amount){
    work.addSalary(amount)
    displaySalary()

}
//buy computer button
function handleBuyButtonClick(){
    if (bank.getBalance()< currentSelectedComputer.price){
        alert("You cannot afford the laptop.");
    }else if(bank.getBalance()>= currentSelectedComputer.price){
        bank.setMoney(currentSelectedComputer.price)
        alert(`You are now the owner of  ${currentSelectedComputer.title}`)
        displayBankBalance()
    }
}

function handleRePayLoanButtonClick(){
    console.log("button clicked");
    let payAmount = work.getSalary()

    if (payAmount >= loan.getOutStandingLoan()) { 
        bank.deposit(payAmount-loan.getOutStandingLoan())
        loan.setLoan(0)
    } else {
        loan.setLoan(loan.getOutStandingLoan()-payAmount)
        bank.deposit(loan.getOutStandingLoan()-payAmount)
    }
    displayBankBalance()
    displaySalary()
    displayLoan()
    repayLoanButton.style.display = 'none';
} 
function displayBankBalance(){
    bankBalanceElement.innerText = "Balance: " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'SEK' }).format(bank.getBalance());
    
    }
function displaySalary(){
    displaySalaryElement.innerText = "Pay: " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'SEK' }).format(work.showCurrentSalary());
    
    }
function displayLoan(){
    displayOutStandingLoan.innerText = "Loan: " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'SEK' }).format(loan.getOutStandingLoan());
}
// fetch API using promise
function getComputers(){
    fetch(API_URL)
    .then(response => response.json())
    .then(json =>{
        computers =json
    populateComputersSelectBox()
    })
    .catch(error =>console.error(error.message))
}

function populateComputersSelectBox(){
    if(!computers)
    alert("No computers to display")

    for (const computer of computers ){
        let newComputerOption = document.createElement('option')
        newComputerOption.innerText = computer.title
        // wire up a value
        newComputerOption.value = computer.id
        displayComputerListElement.appendChild(newComputerOption)
    }
}

//Runtime
getComputers()



