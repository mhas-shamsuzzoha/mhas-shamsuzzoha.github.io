let accountBalance = 10000

function labourWorker() {
    accountBalance -= 100;
    alert(`Thanks! We decided that your AED100.00 was better use for our tourist department instead. You now have AED${accountBalance}.00. Anyways, the workers don't need it.`);
}

function nonEmergency() {
    alert("Thanks for bringing this to our attention. We will take care of it.");
}

function donateEmpire() {
    accountBalance -= 1000;
    alert("Thank you for the AED1000.00. We are using it to lure more tourists.")
}