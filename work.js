import bank from "./bank.js";
import loan from "./loan.js"
let salary = 0;

function showCurrentSalary() {
  return salary;
}

function getSalary() {
  return salary;
}
function addSalary(amount) {
  salary += amount;
}
function withdraw(amount) {
  salary -= amount;
}

function transferMoneyToBank() {

  const loanAmount = salary * 0.1;
  const remaining = salary - loanAmount;

  if (salary !== 0) {
    bank.deposit(salary);
    resetSalary();
  } else {
    console.log("Money transferred successfully.");
  }
}

function resetSalary() {
  salary = 0;
}
const work = {
  showCurrentSalary,
  addSalary,
  getSalary,
  withdraw,
  resetSalary,
  transferMoneyToBank,
};
export default work;
