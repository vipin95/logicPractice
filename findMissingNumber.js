function smallestNumberFun(array) {
    let smallestNumber = array[0];
    let bigestNumber = array[0];
    let arrayLength = array.length-1;
    for (let index = 0; index <= arrayLength; index++) {
        const element = array[index];
        if(element < smallestNumber){
            smallestNumber = element;
        }
        if(element > bigestNumber){
            bigestNumber = element;
        }
    }
    return {smallestNumber,bigestNumber};
}
function FMNFUA(array) {
    let missingNumber = [];
    let smallestNumber = smallestNumberFun(array).smallestNumber;
    let bigestNumber = smallestNumberFun(array).bigestNumber;
    
    for (let index = smallestNumber; index <= bigestNumber; index++) {
        
        let condition = array.indexOf(index);
        if(condition < 0){
            missingNumber.push(index);
        }
    }
    return missingNumber;
}
console.log(FMNFUA([1,5,2,9]));