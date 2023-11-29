function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = true;
}

BankAccount.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  } else {
    console.log("Invalid deposit amount.");
  }
};

BankAccount.prototype.withdraw = function (amount) {
  if (this.active && amount > 0 && amount <= this.balance) {
    this.balance -= amount;
    console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
  } else {
    console.log("Invalid withdrawal or insufficient funds.");
  }
};

BankAccount.prototype.checkBalance = function () {
  console.log(`Account balance: $${this.balance}`);
};

BankAccount.prototype.isActive = function () {
  return this.active;
};

function getTotalBalance(accounts) {
  let totalBalance = 0;
  for (const account of accounts) {
    if (account.isActive()) {
      totalBalance += account.balance;
    }
  }
  return totalBalance;
}

const account1 = new BankAccount(123, "John Doe", "Savings", 1000);
const account2 = new BankAccount(456, "Jane Smith", "Checking", 500);

account1.deposit(200);
account1.withdraw(100);
account1.checkBalance();

account2.deposit(300);
account2.withdraw(200);
account2.checkBalance();

console.log(`Account 1 active: ${account1.isActive()}`);
console.log(`Account 2 active: ${account2.isActive()}`);

const accounts = [account1, account2];
const totalBalance = getTotalBalance(accounts);
console.log(`Total balance of all active accounts: $${totalBalance}`);
