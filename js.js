// Generate a randon Number & round it and display to screen
function getPinNum() {
    const randomNum = Math.round(Math.random() * 10000);
    const randomNumString = randomNum + '';
    if (randomNumString.length == 4) {
        const inputField = document.getElementById('input-field');
        const generatedPin = inputField.value = randomNum;
        return generatedPin;
    }
    else {
        console.log('Click Again to Generate Pin');
        return getPinNum();
    }
}

// Get pin matcher input value and display to screen

const allButtonElements = document.querySelectorAll('.button');
for (button of allButtonElements) {
    button.addEventListener('click', function (event) {
        const getDigit = event.target.innerText;
        const inputPinMatchElement = document.getElementById('input-pin-match');
        if (getDigit == 'C') {
            inputPinMatchElement.value = '';
        }
        else if (getDigit == '<') {
            let showPin = inputPinMatchElement.value; // catch the displayed number
            const remove = showPin.slice(0, -1); // remove last digit of the number displayed
            const result = inputPinMatchElement.value = remove; // set the number to display
        }
        else {
            const result = inputPinMatchElement.value += getDigit;
        }
    })
}

// handle pin generator
document.getElementById('button-pin-generate').addEventListener('click', function () {
    getPinNum()
})

// check the pin matching
document.getElementById('button-submit').addEventListener('click', function () {
    const pin = document.getElementById('input-field').value;
    const typedNumber = document.getElementById('input-pin-match').value;
    const successMassage = document.getElementById('success-massage');
    const errorMassage = document.getElementById('error-massage');
    if (pin == typedNumber) {
        successMassage.style.display = 'block';
        errorMassage.style.display = 'none';
    }
    else {
        errorMassage.style.display = 'none';
        errorMassage.style.display = 'block';
    }
})



