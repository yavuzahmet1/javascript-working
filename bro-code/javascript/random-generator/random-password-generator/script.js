const passwordLength = 12;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = false;

function generatePassword(
  lenght,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = 1234567890;
  const symbolChars = "!#$%&()*+-/<>?@_=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowerCaseChars : "";
  allowedChars += includeUppercase ? upperCaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  //   console.log(allowedChars);

  if (lenght <= 0) {
    return `(Password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected)`;
  }
  for (let i = 0; i < lenght; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  return password;
}

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

console.log(`Generated password : ${password}`);
