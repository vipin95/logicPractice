function RDCFS(string) {
    let resultArray = "";
    let arrayOfString = string.toUpperCase().split("");
    for(let i=0 ; i < arrayOfString.length-1 ; i++){
        let Element = arrayOfString[i];
        if(resultArray.indexOf(Element) < 0){
            resultArray = resultArray+Element;
        }
    }
    return resultArray;
}
let result = RDCFS("I am Vipin mavi");
console.log(result);