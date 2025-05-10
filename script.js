document.getElementById("GenerateBtn").addEventListener("click",function(){
const length= parseInt(document.getElementById("PasswordLength").value);
const upperCount= parseInt(document.getElementById("UpperCaseLetters").value);
const lowerCount= parseInt(document.getElementById("LowerCaseLetters").value);
const symbolCount= parseInt(document.getElementById("Symbols").value);
const numberCount= parseInt(document.getElementById("Numbers").value);

const numbersCount= length-(upperCount+ lowerCount+ symbolCount+ numberCount);
if(numbersCount<0){
alert("Total of uppercase, lowercase, symbols and numbers exceeds password length!");
return;
}

const upperChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars= "abcdefghijklmnopqrstuvwxyz";
const symbolChars= "!@#$%^&*()_+{}[]";
const numberChars= "0123456789";

function getRandomChars(charSet, count){
let result= "";
for(let i=0;i<count;i++)
{
result += charSet.charAt(Math.floor(Math.random() * charSet.length));
}
return result;
}

let password= "";
password += getRandomChars(upperChars, upperCount);
password += getRandomChars(lowerChars, lowerCount);
password += getRandomChars(symbolChars, symbolCount);
password += getRandomChars(numberChars, numberCount);

password = password.split('').sort(() => 0.5 - Math.random()).join('');

alert("Generated Password: " + password);
});
