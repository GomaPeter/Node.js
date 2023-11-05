//This line inport the "generate-password" module
const generatePassword = require('generate-password');

function generateRandomPassword() {
    return generatePassword.generate({
        length: 12, //indcate the lemgth of the password
        number: true, //specifies the passworld can indicate number 
        symbols: true, //spocifies the password can indicate symbols
    });
}

// This line calls the 'generateRandomPassword' function
const password = generateRandomPassword();
console.log(password);


