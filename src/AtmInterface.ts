

export type BankingType  = 'checking' | 'savings';
export type TransactionType = 'withdraw' | 'deposit';

export interface Transaction {
    transactionType: TransactionType;
    amount: number;
    balance: number;
} 

export interface AtmInterface {
    accountType: BankingType;
    money: number;
    overdraft?: AtmInterface;
    transactionHistory: Array<Transaction>;
}