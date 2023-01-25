let accountBalance = 10000;

function waterBills() {
    accountBalance -= 200;
    alert(`You just spent AED200.00 on your water bill! Your account balance is now AED${accountBalance}.00 .`);
}
    
function lawbreakingFines() {
    accountBalance -= 684;
    alert(`You just spent AED684.00 on your fines! Your account balance is now AED${accountBalance}.00.`);
}

function parkingTicket() {
    accountBalance -= 3;
    alert(`You just spent AED3.00 on your parking ticket! Your account balance is now AED${accountBalance}.00.`);
}