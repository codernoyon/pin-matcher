document.getElementById("generate-btn").addEventListener("click", function () {
    document.getElementById("display-pin").value = getPin();
});

// pin generate
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log("Recall the function");
        return getPin();
    }
};
// key pad
document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const keyInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        if (number == "C") {
            keyInput.value = "";
        }
    } else {
        const prviousKey = keyInput.value;
        const newKey = prviousKey + number;
        keyInput.value = newKey;
    }
    
});

document.getElementById("submit-btn").addEventListener("click", function () {
    verifyPin();
});

function verifyPin() {
    const generatedNumber = document.getElementById("display-pin").value;
    const typedNumber = document.getElementById("typed-numbers").value;
    const failMessage = document.getElementById("fail-message");
    const successMessage = document.getElementById("success-message");
    if (generatedNumber == typedNumber) {
        successMessage.style.display = "block";
        failMessage.style.display = "none";
    } else {
        successMessage.style.display = "none";
        failMessage.style.display = "block";
    }
}