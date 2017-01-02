var accounts = [];                                 //alle accounts 

function createAccount (account) {                  //account aanmaken
	accounts.push(account);
	return account;
}

function getAccount (username) {          //account opvragen met bepaalde 'username'
    var i;
    var matchedAccount;
    for(i=0; i<accounts.length; i++){               //enkel de accounts opvragen met zelfde username en password
       if (accounts[i].username === username) {
           matchedAccount = accounts[i];
       }
}      return matchedAccount;
};

function BankAccount(account, amount){
    this.amount = amount;
    this.value = getBalance(account)('balance');
    this.account = getAccount(account);
    this.deposit = function(){
        if (typeof(amount) === 'number' && amount > 0){
	this.account.balance += this.amount;
    }
        else { throw "The given amount is smaller than 0 or is not a number";
}       return this.account.username + " zet geld op de rekening:" + " +€" + this.amount + " = €" +this.account.balance +'\n' + ".";
};
    }
    

function getBalance(username) {                               //balance opvragen
    account = getAccount(username);
    return function () {
	return username + " heeft €" + account.balance + " op de rekening staan." + '\n';
    };
};

var Astrid = ({username: "Astrid", balance: 20});
var Jelle = ({username: "Jelle", balance: 3});

console.log(createAccount(Astrid));
console.log(createAccount(Jelle));

console.log(getBalance("Astrid")('balance'));
console.log(getBalance("Jelle")('balance'));

console.log(new BankAccount("Astrid", 15).deposit());
console.log(new BankAccount("Jelle", 40).deposit());



