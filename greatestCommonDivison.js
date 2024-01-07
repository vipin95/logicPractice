function allPrimeFactors(number) {
    let array = [];
    for (let index = 2; index <= number; ) {
        if( number % index == 0){
            array.push(index);
            number = number/index;
        }else{
            index++;
        }
    }
    return array;
}
function GCD(num1, num2){
    console.log("Error");
    let num1Factors = allPrimeFactors(num1);
    let num2Factors = allPrimeFactors(num2);
    let GCD_result = 1;

    for (let index = 0; index < num2Factors.length ; index++) {
        let condition = num1Factors.indexOf(num2Factors[index])
        if( condition >= 0 ){
            GCD_result = GCD_result * num1Factors[condition];
            num1Factors.splice(condition, 1);
        }else{
            if(index == 10){
                return "Some error occured";
            }
        }
    }
console.log(GCD_result);
}