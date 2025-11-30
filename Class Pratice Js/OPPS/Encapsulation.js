class Bank {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new Bank();
acc.deposit(1000);
console.log(acc.getBalance());
