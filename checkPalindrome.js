function verifyPalindrome(word) {
    let isPlindrome = true;
    const wordLength = word.length-1;
    for (let index = 0; index <= wordLength; index++) {
        const element1 = word[index];
        const element2 = word[revertFor];
        if( element1 != element2){
            isPlindrome = false;
        }
    }
    return isPlindrome;
}
let result = verifyPalindrome("afbcdcbfa");
console.log(result);