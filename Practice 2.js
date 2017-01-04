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

var astridAccount = createAccount({                      //nieuw account aanmaken
	username: 'Astrid',
	balance: 0
});

deposit(astridAccount, 100);
console.log(getBalance(astridAccount));

withdraw(astridAccount, 11);
console.log(getBalance(astridAccount));

var existingAccount = getAccount('Astrid');
console.log(getBalance(astridAccount));

var jelleAccount = createAccount({
	username: 'Jelle007',
	balance: 12
});

console.log(accounts);

var existingJelleAccount = getAccount('Jelle007');
console.log(existingJelleAccount);

