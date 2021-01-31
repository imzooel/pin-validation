// imZooel (a tech enthusiast boy <3)
function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + " ").split(".")[0];
    if (pin.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

// display auto generated pin
function generatePin() {
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}
// calculator button press event handle
const buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener("click", function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        // handle backspace
        // handle clear
        if (digit === "C") {
            document.getElementById("typed-pin").value = " ";
        }
    }
    else {
        const typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit;
    }
})
// display or hide the pop-up if matched or not
function displayMatchResult(correctStatus, inCorrectStatus) {
    const correct = document.getElementById("correct-pin");
    correct.style.display = correctStatus;

    const inCorrect = document.getElementById("incorrect-pin");
    inCorrect.style.display = inCorrectStatus;
}
// verify Pin 
function verifyPin() {
    const pin = document.getElementById("pin").value;
    const typedPin = document.getElementById("typed-pin").value;
    if (pin === typedPin) {
        displayMatchResult("block", "none")
    }
    else {
        displayMatchResult("none", "block")
    }
}
