function countZero(n) {
    var count = 0;
    while(n>0){
        count += Math.floor(n/10);
        console.log(count);
        n = n/10
    }
    return count;
}
console.log(countZero(1000));