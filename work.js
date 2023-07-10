import bank from "./bank.js";
let salary = 0;

function showCurrentSalary() {
  return salary;
  //he pay or your current salary amount in your currency. Should show how much money you have earned by
  //“working”.  This money is NOT part of your bank balance.
}

function getSalary() {
  return salary;
}
function addSalary(amount) {
  salary += amount;
  //The work button must increase your Pay balance at a rate of 100 on each click.
}
function withdraw(amount) {
  salary -= amount;
}

function transferMoneyToBank() {
  // calculate 10% of salary
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
