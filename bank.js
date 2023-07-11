
import work from "./work.js"
import loan from "./loan.js"
let bankBalance = 0

function getBalance (){
      return bankBalance  
}
function deposit(amount){
   bankBalance +=amount
}
function setMoney(amount){
   bankBalance = amount
}
const bank = {
   getBalance,
   deposit,
   setMoney
}
export default bank


