function swapNumber(num1, num2) {
    let diff = Math.abs(num1 - num2);
    if(num1<num2){
        num1=num1+diff;
        num2=num2-diff;
    }else{
        num1=num1-diff;
        num2=num2+diff;
    }
    console.log("num1 ="+num1+"---- num2 = "+ num2);
    
}
swapNumber(15.5,30.5);