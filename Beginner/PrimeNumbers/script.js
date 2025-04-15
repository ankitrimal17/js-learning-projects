
const checkPrime = (num) => {
    if(num <= 1){
        return false;
    }
    else if(num > 1){
        for(let i = 2; i < num; i++){
            if(num % i === 0)
                return false;
        }
        return true;
    }
}

const displayOutput = () => {
    const number = parseInt(document.getElementById("num-inputbox").value);
    if(isNaN(number)){
        document.getElementById("output-result").innerHTML = "Please enter a number.";
        return;
    }
    
    const checkNum = checkPrime(number);

    if (checkNum){
        document.getElementById("output-result").innerHTML = `${number} is a prime number.`;
    }
    else{
        document.getElementById("output-result").innerHTML = `${number} is not a prime number.`;
    }
}
document.getElementById("num-inputbox").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        displayOutput();
    }
});

