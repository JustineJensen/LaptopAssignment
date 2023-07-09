let salary =0

function showCurrentSalary(){
    return salary
    //he pay or your current salary amount in your currency. Should show how much money you have earned by 
    //“working”.  This money is NOT part of your bank balance. 

}
function addSalary(amount){
    salary += amount
    //The work button must increase your Pay balance at a rate of 100 on each click. 
}
const work ={
    showCurrentSalary,
    addSalary
}
export default work
