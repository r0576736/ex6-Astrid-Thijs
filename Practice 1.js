
var account = {                                 
	balance: 0
};

//geld storten
function deposit (account, amount) {
	account.balance += amount;
}

//geld afhalen
function withdraw (account, amount) {
	account.balance -= amount;
}

//balance weergeven
function getBalance (account) {
	return account.balance;
}

deposit(account, 20);

console.log(getBalance(account));

withdraw(account, 100);

console.log(getBalance(account));