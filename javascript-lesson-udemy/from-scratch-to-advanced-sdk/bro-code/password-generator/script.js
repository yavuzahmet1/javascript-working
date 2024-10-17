//pasword generator

const passwordLength = 50;
const includeUpperCase = false;
const includeLowerCase = false;
const includeNumbers = true;
const includeSymbols = true;

function generatorPassword(lenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmn";//15 karakter
    const upperCaseChars = "ABCDEFGHIJKLMN";//15 karakter
    const numbersChars = "1234567890"//10 karakter
    const symbolsChars = "?*=/()&%+^'!";//12 karakter toplam 52 karakter

    let allowedChars = "";
    let passwordGenerated = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolsChars : "";

    if (lenght <= 0) {
        return 'Girdiğiniz değer sıfırdan küçük ve eşit olamaz';
    }
    if (allowedChars.length === 0) {
        return 'Parola pluşturabilmemiz için lütfen bir seçenek giriniz'
    } else {
        for (let i = 0; i < lenght; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length)
            passwordGenerated += allowedChars[randomIndex];
        }
    }

    return passwordGenerated;
}


const password = generatorPassword(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols);

console.log("Generated Password : ", password)

