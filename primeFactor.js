function primeFactor(number) {
    let array = [];
    for (let index = 2; index <= number ;  ) {
        if(number % index == 0 ){
            array.push(index);
            number = number / index;
        }
        else{
            index++;
        }
    }
    return array;
}
let primeFactorsResult = primeFactor(20);
console.log(primeFactorsResult);