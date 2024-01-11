function reverseString(string) {
    let resultString = "";
    for (let index = string.length-1; index >= 0; index--) {
        resultString += string[index];
    }
    return resultString;
}
let resultString = reverseString("My name is Vipin mavi.");
console.log(resultString);