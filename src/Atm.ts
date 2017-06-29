
import {Transaction, BankingType, AtmInterface} from './AtmInterface';


export class Atm implements AtmInterface {
    accountType: BankingType;
    money: number;
    overdraft?: Atm;
    transactionHistory: Array<Transaction>;

    constructor(accountType: BankingType = "checking", money = 0, overdraft?:Atm) {
        this.accountType = accountType;
        this.money = money;
        this.transactionHistory = [];
        this.overdraft = overdraft;
    }

      deposit(funds: number) {
        this.money += funds;
        let currentTransaction: Transaction = { transactionType: 'deposit', amount: funds, balance: this.money };
        this.addTransaction( currentTransaction );
    }

      addTransaction( transactionObj: Transaction ) {
      this.transactionHistory.push(transactionObj);
    }

        withdraw(funds: number) {
        this.money -= funds;
        let currentTransaction: Transaction = { transactionType: 'withdraw', amount: funds, balance: this.money };
        this.addTransaction(currentTransaction);

        if (this.money <= 0 && typeof this.overdraft == "object") {
          this.overdraft.withdraw(Math.abs(this.money));
        }
    }

      checkBalance() {
        console.log(this.money);
    }
}