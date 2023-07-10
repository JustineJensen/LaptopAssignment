/*
The bank button must transfer the money from your Pay/Salary balance to your Bank balance. Remember 
to reset your pay/salary once you transfer. 
Constraints on Bank button: 
1. If you have an outstanding loan, 10% of your salary MUST first be deducted and transferred to the 
outstanding Loan amount.
2. The balance after the 10% deduction may be transferred to your bank account
*/

let bankBalance = 0

function getBalance (){
      return bankBalance

   
}

function deposit(amount){
    bankBalance +=amount
}
function showBalance(){
//The bank shows a “Bank” balance in your currency. This is the amount available for you to buy a laptop
}
 function withdraw (amount){
    bankBalance -=amount
 }
 function transferMoney(amount){
   if(Work.salary!=null){
      bankBalance += amount
   }

    //The bank button must transfer the money from your Pay/Salary balance to your Bank balance. Remember to reset your pay/salary once you transfer. 
    
 }
 const bank = {
    getBalance,
    showBalance,
    deposit,
    withdraw,
    transferMoney
 }
 export default bank