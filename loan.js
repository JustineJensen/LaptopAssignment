
let payAmount = 0
let loanAmount =0
function getLoan(){
    const  loanAmount = Number(window.prompt("Enter amount", "")); 
    if(loan != null){
        loan += outStandingLoan
    }
    return loanAmount
    /*
    Constraints on Get a loan button: 
1. You cannot get a loan more than double of your bank balance (i.e., If you have 500 you cannot get a 
loan greater than 1000.)
2. You cannot get more than one bank loan before repaying the last loan.
3. You may not have two loans at once. The initial loan should be paid back in full. 
    */

}
function  showOutStandingLoan(){
 return outStandingLoan
}
function repayLoan(amount){
loanAmount -= outStandingLoan
showOutStandingLoan()

    /* Repay Loan button 
    Once you have a loan, a new button labeled “Repay Loan” should appear. Upon clicking this button, the full 
    value of your current Pay amount should go towards the outstanding loan and NOT your bank account.
    Any remaining funds after paying the loan may be transferred to your bank account.*/

}
const loan ={
    showOutStandingLoan,
    getLoan,
    repayLoan,

}
export default loan
