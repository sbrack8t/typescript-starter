
import {Atm} from './Atm';



let myBank = new Atm("checking", 1000 );
let myOverDraft = new Atm("savings", 7500);
myBank.overdraft = myOverDraft;

myBank.deposit(10);
myBank.withdraw(58);
myBank.withdraw(700);
myBank.withdraw(400);


console.log(myBank);
console.log(myBank.transactionHistory);

console.log(myOverDraft);
console.log(myOverDraft.transactionHistory);
