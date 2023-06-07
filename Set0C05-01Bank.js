class Bank {
    constructor() {
      this.clients = new Map();
    }
  
    createAccount(accountNumber) {
      if (this.clients.has(accountNumber)) {
        console.log("Error: Account already exists.");
        return;
      }
  
      this.clients.set(accountNumber, { balance: 0 });
      console.log(`Account ${accountNumber} created.`);
    }
  
    getClient(accountNumber) {
      if (!this.clients.has(accountNumber)) {
        console.log("Error: Account does not exist.");
        return null;
      }
  
      return this.clients.get(accountNumber);
    }
  
    viewAllClients() {
      console.log("List of clients:");
      this.clients.forEach((client, accountNumber) => {
        console.log(`Account Number: ${accountNumber}, Balance: ${client.balance}`);
      });
    }
  }
  
  class Client {
    constructor(accountNumber, bank) {
      this.accountNumber = accountNumber;
      this.bank = bank;
    }
  
    getBalance() {
      const clientData = this.bank.getClient(this.accountNumber);
      return clientData.balance;
    }
  
    deposit(amount) {
      const clientData = this.bank.getClient(this.accountNumber);
      clientData.balance += amount;
      console.log(`Deposited $${amount} into account ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
      const clientData = this.bank.getClient(this.accountNumber);
  
      if (amount > clientData.balance) {
        console.log("Error: Insufficient funds.");
        return;
      }
  
      clientData.balance -= amount;
      console.log(`Withdrew $${amount} from account ${this.accountNumber}.`);
    }
  
    transfer(receiverAccountNumber, amount) {
      const senderData = this.bank.getClient(this.accountNumber);
      const receiverData = this.bank.getClient(receiverAccountNumber);
  
      if (!receiverData) {
        console.log("Error: Receiver account does not exist.");
        return;
      }
  
      if (amount > senderData.balance) {
        console.log("Error: Insufficient funds.");
        return;
      }
  
      senderData.balance -= amount;
      receiverData.balance += amount;
      console.log(`Transferred $${amount} from account ${this.accountNumber} to account ${receiverAccountNumber}.`);
    }
  }
  
  const bank = new Bank();
  
  bank.createAccount("123");
  bank.createAccount("345");
  bank.createAccount("567");
  
  const client1 = new Client("123", bank);
  const client2 = new Client("345", bank);
  
  client1.deposit(1000);
  client1.transfer("345", 500);
  console.log("Client 1 Balance:", client1.getBalance());
  console.log("Client 2 Balance:", client2.getBalance());
  
  bank.viewAllClients();
  