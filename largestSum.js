function largestSum(array) {
    let firstGreates = array[0];
    let secondGreates;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if( firstGreates <= element ){
            secondgreates = firstGreates;
            firstGreates = element;
        }
    }
    console.log(`${firstGreates} + ${secondgreates} = ${firstGreates + secondgreates}`)
}
largestSum([4,7,7,5,2,9,5]);