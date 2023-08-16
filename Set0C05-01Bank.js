const Bank = function () {
    let clients = new Map();
    this.createAccount = function (accountNumber) {

        if (clients.has(accountNumber)) {
            throw new Error("Error: Account already exists.");

        }

        clients.set(accountNumber, { balance: 0 });
        console.log(`Account ${accountNumber} created.`);
    }
    this.getClient = function (accountNumber) {
        if (!clients.has(accountNumber)) {
            throw new Error("Error: Account does not exist.");

        }

        return clients.get(accountNumber);
    }

    this.viewAllClients = function () {
        console.log("List of clients:");
        clients.forEach((client, accountNumber) => {
            console.log(`Account Number: ${accountNumber}, Balance: ${client.balance}`);
        });
    }
}

const Client = function (accountNumber, bank, wallet = 0) {
    let accountNumberClient = accountNumber;
    let bankClient = bank;
    let walletClient = wallet;

    this.getBalance = function () {
        const clientData = bankClient.getClient(accountNumberClient);
        return clientData.balance + walletClient;

    }

    this.depositToBank = function (amount) {
        const clientData = bankClient.getClient(accountNumberClient);
        clientData.balance += amount;
        console.log(`Deposited $${amount} into account ${accountNumberClient}.`);
    }
    this.depositToWallet = function (amount) {

        walletClient += amount;
        console.log(`Deposited $${amount} into your wallet.`);
    }

    this.withdrawBank = function (amount) {
        const clientData = bankClient.getClient(accountNumberClient);

        if (amount > clientData.balance) {
            throw new Error("Error: Insufficient funds.");

        }

        clientData.balance -= amount;
        console.log(`Withdrew $${amount} from account ${accountNumberClient}.`);
    }

    this.withdrawWallet = function (amount) {

        if (amount > walletClient) {
            throw new Error("Error: Insufficient funds.");

        }

        walletClient -= amount;
        console.log(`Withdrew $${amount} from your wallet.`);
    }
    this.transferWalletToBank = function (amount) {
        const clientData = bankClient.getClient(accountNumberClient);
        if (amount > walletClient) {
            throw new Error("Error: Insufficient funds.");

        }

        walletClient -= amount;
        clientData.balance += amount;

        console.log(`Transferred $${amount} from your wallet to account ${accountNumberClient}.`);

    }

    this.transfer = function (receiverAccountNumber, amount) {
        const senderData = bankClient.getClient(accountNumberClient);
        const receiverData = bankClient.getClient(receiverAccountNumber);

        if (!receiverData) {
            throw new Error("Error: Receiver account does not exist.");

        }

        if (amount > senderData.balance) {
            throw new Error("Error: Insufficient funds.");

        }

        senderData.balance -= amount;
        receiverData.balance += amount;
        console.log(`Transferred $${amount} from account ${accountNumberClient} to account ${receiverAccountNumber}.`);
    }
}
const bank = new Bank();

bank.createAccount("123");
bank.createAccount("345");
bank.createAccount("567");
bank.viewAllClients();

const client1 = new Client("123", bank, 500);
const client2 = new Client("345", bank);
const client3 = new Client("567", bank, 400)

client1.depositToBank(1000);

client1.transfer("345", 500);
client3.transferWalletToBank(300);
console.log("Client 1 Balance:", client1.getBalance());
console.log("Client 2 Balance:", client2.getBalance());
console.log("Client 3 Balance:", client3.getBalance());

bank.viewAllClients();