function getWord(str, fromIndex, tillIndex) {
    let word = "";
    for (let index = fromIndex+1; index <= tillIndex; index++) {
        const element = str[index];
        word +=element;
    }
    return word;
}
function reverseWords(str){
    let fromIndex, tillIndex;
    let array = str;
    let resultString = "";

    for (let index = array.length-1; index >= 0 ; index--) {
        const element = array[index];
        if (element == " ") {
            if ( resultString.length == 0 ) {
                tillIndex = array.length-1;
            }else tillIndex = fromIndex;
            fromIndex = index;
            
            resultString += getWord(str, fromIndex, tillIndex)
        }
    }
    return resultString;
}
console.log(reverseWords(" i am Vipin Mavi "));