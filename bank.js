
import work from "./work.js"

let bankBalance = 0

function getBalance (){
      return bankBalance
   
}

function deposit(amount){
    bankBalance +=amount
}

    //The bank button must transfer the money from your Pay/Salary balance to your Bank balance. Remember to reset your pay/salary once you transfer. 
    
 const bank = {
    getBalance,
    deposit,

 }
 export default bank

 /*
The bank button must transfer the money from your Pay/Salary balance to your Bank balance. Remember 
to reset your pay/salary once you transfer. 
Constraints on Bank button: 
1. If you have an outstanding loan, 10% of your salary MUST first be deducted and transferred to the 
outstanding Loan amount.
2. The balance after the 10% deduction may be transferred to your bank account
*/
