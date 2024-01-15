function revertWord(string, startingindex, tillIndex) {
    let word = "";
    let revertWord = "";
    for (let index = startingindex; index <= tillIndex; index++) {
        const element = string[index];
        word += element;
    }
    for (let indexNext = word.length-1; indexNext >= 0; indexNext--) {
        const element = word[indexNext];
        revertWord+= element;
    }
    return revertWord+" ";
}
function RWIP(string) {
    let array = string;
    let resultString = "";
    let startingindex, tillIndex ;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element == " "){
            if(resultString.length == 0 ){
                startingindex = 0;
            }else{
                startingindex = tillIndex+2;
            }
            tillIndex = index-1;
            resultString += revertWord(array , startingindex, tillIndex);
        }
    }
    return resultString;
}
let result = RWIP("I am Nitin mavi ");
console.log(result);