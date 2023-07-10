class Bank {
    constructor() {
      this._clients = new Map();
    }
  
    createAccount(accountNumber) {
      if (this._clients.has(accountNumber)) {
        console.error("Error: Account already exists.");
        return;
      }
  
      this._clients.set(accountNumber, { balance: 0 });
      console.log(`Account ${accountNumber} created.`);
    }
  
    getClient(accountNumber) {
      if (!this._clients.has(accountNumber)) {
        console.error("Error: Account does not exist.");
        return null;
      }
  
      return this._clients.get(accountNumber);
    }
  
    viewAllClients() {
      console.log("List of clients:");
      this._clients.forEach((client, accountNumber) => {
        console.log(`Account Number: ${accountNumber}, Balance: ${client.balance}`);
      });
    }
  }
  
  class Client {
    constructor(accountNumber, bank,wallet=0) {
      this._accountNumber = accountNumber;
      this._bank = bank;
      this._wallet= wallet;
    }
  
    getBalance() {
      const clientData = this._bank.getClient(this._accountNumber);
      return clientData.balance + this._wallet;

    }
  
    depositToBank(amount) {
      const clientData = this._bank.getClient(this._accountNumber);
      clientData.balance += amount;
      console.log(`Deposited $${amount} into account ${this._accountNumber}.`);
    }
    depositToWallet(amount) {
      
      this._wallet += amount;
      console.log(`Deposited $${amount} into your wallet.`);
    }
  
    withdrawBank(amount) {
      const clientData = this._bank.getClient(this._accountNumber);
  
      if (amount > clientData.balance) {
        console.error("Error: Insufficient funds.");
        return;
      }
  
      clientData.balance -= amount;
      console.log(`Withdrew $${amount} from account ${this._accountNumber}.`);
    }
    
    withdrawWallet(amount) {
  
      if (amount > this._wallet) {
        console.error("Error: Insufficient funds.");
        return;
      }
  
      this._wallet -= amount;
      console.log(`Withdrew $${amount} from your wallet.`);
    }
    transferWalletToBank(amount){
      const clientData = this._bank.getClient(this._accountNumber);
      if (amount > this._wallet) {
        console.error("Error: Insufficient funds.");
        return;
      }

      this._wallet -= amount;
      clientData.balance +=amount;

      console.log(`Transferred $${amount} from your wallet to account ${this._accountNumber}.`);

    }

    transfer(receiverAccountNumber, amount) {
      const senderData = this._bank.getClient(this._accountNumber);
      const receiverData = this._bank.getClient(receiverAccountNumber);
  
      if (!receiverData) {
        console.error("Error: Receiver account does not exist.");
        return;
      }
  
      if (amount > senderData.balance) {
        console.error("Error: Insufficient funds.");
        return;
      }
  
      senderData.balance -= amount;
      receiverData.balance += amount;
      console.log(`Transferred $${amount} from account ${this._accountNumber} to account ${receiverAccountNumber}.`);
    }
  }
  
  const bank = new Bank();
  
  bank.createAccount("123");
  bank.createAccount("345");
  bank.createAccount("567");
  bank.createAccount("567");
  
  const client1 = new Client("123", bank,500);
  const client2 = new Client("345", bank);
  const client3 = new Client("567",bank,400)
  
  client1.depositToBank(1000);
  client1.transfer("345", 500);
  client3.transferWalletToBank(300);
  console.log("Client 1 Balance:", client1.getBalance());
  console.log("Client 2 Balance:", client2.getBalance());
  console.log("Client 3 Balance:", client3.getBalance());
  
  bank.viewAllClients();
  