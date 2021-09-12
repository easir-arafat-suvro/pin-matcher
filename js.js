// Generate a randon Number & round it
const randomNum = Math.round(Math.random() * 10000);
const randomNumString = randomNum + '';
if (randomNumString.length == 4) {
    const inputField = document.getElementById('input-field');
    inputField.value = randomNum;
}
else {
    console.log('Click Again to Generate Pin');
}

const allButtonElements = document.querySelectorAll('.button');
for (item of allButtonElements) {
    item.addEventListener('click', function (event) {
        const itemValue = item.tar
    })
}
// console.log(allButtonElements)