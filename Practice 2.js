var accounts = [ ];

function createAccount (account) {                       //account aanmaken
	accounts.push(account);
	return account;
}

function getAccount (username) {                         //account opvragen
	var matchedAccount;

	accounts.forEach( function (account) {           //wanneer username matched met account naam
		if (account.username === username) { 
			matchedAccount = account;
		}
	} );

	return matchedAccount;                           //het account weergeven 
}

function deposit (account, amount) {                     //geld storten
	account.balance += amount;
}

function withdraw (account, amount) {                    //geld afhalen
	account.balance -= amount;
}

function getBalance (account) {                          //balance opvragen
	return account.balance;
}

var AstridAccount = createAccount({                      //nieuw account aanmaken
	username: 'Astrid',
	balance: 0
});

deposit(AstridAccount, 100);
console.log(getBalance(AstridAccount));

withdraw(AstridAccount, 11);
console.log(getBalance(AstridAccount));

var existingAccount = getAccount('Astrid');
console.log(getBalance(AstridAccount));

var JelleAccount = createAccount({
	username: 'Jelle',
	balance: 12
});

console.log(accounts);

var existingJelleAccount = getAccount('Jelle');
console.log(existingJelleAccount);

