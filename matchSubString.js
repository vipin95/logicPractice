function matchSubString(string, subString) {
    let stringLenght = string.length;
    let subStringLenght = subString.length;
    let index = 0;
    let temp = 0;

    for (let i = 0; i < subStringLenght; i++) {
        let elementSub = subString[i]
        for (index; index < stringLenght; index++) {
            const element = string[index];
            if( element == elementSub){
                temp++;
                index++;
                break;
            }else if(temp !=0){
                console.log("String not matched");
                return;
            }
        }
    }
    if(temp == subStringLenght){
        // return "String matched";
        console.log("String matched")
    }else{
        console.log("String not matched")
    }
    // return "String not matched";
}
// console.log(matchSubString("abbcdabbbbbck", "bbca"));