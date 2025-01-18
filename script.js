// -----------Random Password Generator---------------


let password = '';
const rangeInput = document.querySelector('#rangeInput');
const rangeValue = document.querySelector('#rangeValue');
const upperCase = document.querySelector('#upperCase');
const lowerCase = document.querySelector('#lowerCase');
const number = document.querySelector('#number');
const passwordInput = document.querySelector('#passwordInput');
const copyPassword = document.querySelector('#copyPassword');
const generatePassword = document.querySelector('#generatePassword');

// ---Type of password---
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz"
const numberStr = "0123456789"

// ---Code for number of random password (Range Value)---
rangeInput.addEventListener("change",() =>{
    rangeValue.innerHTML = rangeInput.value
})



// ---Code for reandom password generate---
generatePassword.addEventListener('click', () => {
    password = '';
    let totalPassword = '';
    if(upperCase.checked || lowerCase.checked || number.checked) {
        if (upperCase.checked) {
            totalPassword += upperCaseStr
        }
        if (lowerCase.checked) {
            totalPassword += lowerCaseStr
        }
        if (number.checked) {
            totalPassword += numberStr
        }
    } else {
        alert("Please select at least one type")
        return
    }

    if (password.length > 0) {
        passwordInput.value = '';
    }

    for (let i = 0; i < rangeInput.value; i++) {
        let i = Math.floor(Math.random() * totalPassword.length) 
            password += totalPassword[i]
            passwordInput.value = password
            console.log(password)
    }

})


// ----Code for copy password----
copyPassword.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value)
    passwordInput.value = '';
    alert("Password Copied")
})