function RAD(array) {
    let tempArray = []
    array.forEach((element, i) => {
        let condition = tempArray.indexOf(element);
        if(condition < 0 ){
            tempArray.push(element);
        }else if(i == 100){
            console.log("infinied loop Error");
        }
    });
    return tempArray;
}
let result = RAD([2,2,2,2,2,2]);
console.log(result);