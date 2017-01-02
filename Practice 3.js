var accounts = [ ];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;

	accounts.forEach( function (account) {
		if (account.username === username) {
			matchedAccount = account;
		}
	} );

	return matchedAccount;
}

function deposit (account, amount) {
	account.balance += amount;
}

function withdraw (account, amount) {
	account.balance -= amount;
}

function getBalance (account) {
	return account.balance;
}

var astridAccount = createAccount({
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
