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
        if (typeof(amount) === 'number' && amount > 0){
	account.balance += amount;
    }
        else { throw "The given amount is smaller than 0 or is not a number";
}
};

function withdraw (account, amount) {
        if (typeof (amount) === 'number' && amount > 0){
        account.balance -= amount;
        }
	else { throw "The given amount is smaller than 0 or is not a number";
}
};

function getBalance (account) {
	return account.balance;
}

var astridAccount = createAccount({
	username: 'Astrid',
	balance: 0
});

deposit(astridAccount, 400);
console.log(getBalance(astridAccount));

withdraw(astridAccount, 11);
console.log(getBalance(astridAccount));

var existingAccount = getAccount('Astrid');
console.log(getBalance(astridAccount));

var jelleAccount = createAccount({
	username: 'Jelle',
	balance: 12
});

console.log(accounts);

var existingJelleAccount = getAccount('Jelle');
console.log(existingJelleAccount);
