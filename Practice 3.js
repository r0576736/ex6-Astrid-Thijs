var accounts = [ ];                                 //alle accounts 

function createAccount (account) {                  //account aanmaken
	accounts.push(account);
	return account;
}

function getAccount (username) {                    //account opvragen met bepaalde 'username'
    var i;
    var matchedAccount;
    for(i=0; i<accounts.length; i++){               //enkel de accounts opvragen met zelfde username
       if (accounts[i].username === username) {
           matchedAccount = accounts[i];
       }
}      return matchedAccount;
};
    
function deposit (account, amount) {                //geld storten
    this.value = account.balance;
        if (typeof(amount) === 'number' && amount > 0){
	account.balance += amount;
    }
        else { throw "The given amount is smaller than 0 or is not a number";
}       return '\n' + account.username + " zet geld op de rekening: €" + this.value + " + " + "€" + amount + " = " + "€" + account.balance + "." + '\n';
};

function withdraw (account, amount) {               //geld afhalen
    this.value = account.balance;
        if (typeof (amount) === 'number' && amount > 0){
        account.balance -= amount;
        }
	else { throw "The given amount is smaller than 0 or is not a number";
}       return '\n' + account.username + " haalt geld af van de rekening: €" + this.value + " - " + "€" + amount + " = " + "€" +account.balance + "." + '\n';
};

function getBalance(username) {                     //balance opvragen
    var account = getAccount(username);
    return function () {
	return username + " heeft €" + account.balance + " op de rekening staan." + '\n';
    };
};

var Astrid = ({username: "Astrid", balance: 20});
var Jelle = ({username: "Jelle", balance: 3});

console.log(createAccount(Astrid));
console.log(createAccount(Jelle));

console.log(getAccount("Astrid"));
console.log(getAccount("Jelle"));

console.log(deposit(Astrid, 20));
console.log(deposit(Jelle, 100));

console.log(withdraw(Astrid, 18));
console.log(withdraw(Jelle, 10));

console.log(getBalance("Astrid")('balance'));
console.log(getBalance("Jelle")('balance'));


