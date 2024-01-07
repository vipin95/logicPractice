function FibonacciSeries(number) {
    let series=[];
    for (let index = 0; index < number; index++) {
        if(series.length > 2){
            let seriesLength = series.length;
            series.push( series[seriesLength-1] + series[seriesLength-2]);
        }else{
            if(series.length <= 2){
                series.push(index); 
            }
        }
    }
    return series;
}

function NthFibonacciNumber(number) {
    let series = FibonacciSeries(number);
    return series[number-1];
}
let result = NthFibonacciNumber(10);
console.log(result);