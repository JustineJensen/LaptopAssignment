import work from "./work.js";
import bank from "./bank.js";
let outStandingLoan = 0;

function getLoan() {
  return outStandingLoan;
}

function getOutStandingLoan() {
  return outStandingLoan;
}
function setLoan(amount){
   outStandingLoan = amount
}
function rePayLoan(amount) {
  if (amount > outStandingLoan) {
    outStandingLoan = 0;
  } else {
    outStandingLoan -= amount;
  }
}
const loan = {
  getOutStandingLoan,
  getLoan,
  rePayLoan,
  setLoan
};
export default loan;
