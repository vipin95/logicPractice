function PrimeNumber_checking() {
    let number = process.env.num;
    let primeNumberChecked_Result = "a Prime";
    for (let index = 2; number > index ; index++) {
        if( number % index == 0 ){
            primeNumberChecked_Result = "Not a Prime"
            break;
        }else{
            if(index == number-1){
                primeNumberChecked_Result = "a Prime"
            }
        }
    }
    return primeNumberChecked_Result;
}

let primeOrNot_result = PrimeNumber_checking();
console.log( " It is " + primeOrNot_result + " Number.");