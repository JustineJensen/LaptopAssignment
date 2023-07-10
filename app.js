import bank from "./bank.js";
import work from "./work.js";
import loan from "./loan.js";
import { API_URL ,image_URL} from "./utils.js";


let computer =[];
let computersAsync =[];


// creating variables
const bankButton = document.getElementById("bank-btn");
const workButton = document.getElementById("work-btn");
const buyButton = document.getElementById("buy-btn");
const getLoanButton = document.getElementById("loan-btn"); // will also show a popup box  that allows you to enter an amount
const repayLoanButton = document.getElementById("repay-btn");


const bankBalanceElement = document.getElementById("bank-balance");
const displaySalaryElement = document.getElementById("display-salary");
const displayFeaturesElement = document.getElementById("display-features");
const displayPriceElement = document.getElementById("computer-price");
const displayComputerInfoElement = document.getElementById("display-computer-info");
const displayComputerListElement = document.getElementById("display-computer-list");
const displayOutStandingLoan = document.getElementById("")
const displayComputerTitle = document.getElementById("computer-title")
const displayImageElement = document.getElementById("display-img")

//adding  event listener to the buttons
bankButton.addEventListener('click',()=>handleBankButtonClick(100))
workButton.addEventListener('click',()=>handleWorkButtonClick(100))
buyButton.addEventListener('click',handleBuyButtonClick)
repayLoanButton.addEventListener('click',()=>handleReyPayLoanButtonClick(400))
displayComputerListElement.addEventListener('change',handleComputerSelected)
getLoanButton .addEventListener('click',function(){
    //display repay loan button when get a loan is clicked
repayLoanButton.style.display ='block'
    
})


// variables 
let computers= []

//Event handlers with function syntax
 function handleComputerSelected(event){
   const currentSelectedComputer = computers.find(computer=>computer.id ==event.target.value)
   displayComputerInfoElement.innerText =currentSelectedComputer.description
   displayPriceElement.innerText =`kr ${currentSelectedComputer.price}`
   displayFeaturesElement.innerText =currentSelectedComputer.specs
   displayComputerTitle.innerText = currentSelectedComputer.title

  


   //display selected image
   displayImageElement.setAttribute("src",image_URL+ currentSelectedComputer.image)
 } 
 
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
function handleRepayLoanButtonClick(amount){
    showOutStandingLoan()


}
function handleReyPayLoanButtonClick(amount){
    const loanAmount =0
    const payAmount = 0
    if (payAmount >= loanAmount){
        bank.repayLoan(amount)
       
    }  

}
function show(){

}
function displayBankBalance(){
    bankBalanceElement.innerText = "Balance: " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'SEK' }).format(bank.getBalance());
    
    }
    function displaySalary(){
    displaySalaryElement.innerText = "Pay: " + new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'SEK' }).format(work.showCurrentSalary());
    
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

// fetch API using promise
function getComputers(){
    fetch(API_URL)
    .then(response => response.json())
    .then(json =>{
        //console.log(json)
        computers =json
       populateComputersSelectBox()
    })
    .catch(error =>console.error(error.message))
}

function populateComputersSelectBox(){
    displayComputerListElement
    if(!computers)
    alert("No computers to display")

    for (const computer of computers ){
        let newComputerOption = document.createElement('option')
       // const imageElement =document.createElement('img')
        newComputerOption.innerText = computer.title
        // wire up a value
        newComputerOption.value = computer.id
        displayComputerListElement.appendChild(newComputerOption)
      
        //imageElement.src = state.imgUrl;
       // imageElement.style.display = "none" // hide the image
       // displayImageElement.appendChild(imageElement);
    }
}


//Runtime
getComputers()



