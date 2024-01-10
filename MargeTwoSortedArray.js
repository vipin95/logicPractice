function mergeArray(array1, array2) {
    let mergedArray = array2;
    array1.map(( element, i ) => {
        mergedArray.push(element);
    })
    return mergedArray;
}
function MTSA(array1, array2) {
    let TempSmallestElement;
    let sortedArray = [];
    let mergedArray = mergeArray(array1, array2);

    for (let parIndex = 0; mergedArray.length != 0; ) {
        TempSmallestElement = mergedArray[parIndex];
        for (let index = 0; index < mergedArray.length; index++) {

            if(TempSmallestElement > mergedArray[index]){
                TempSmallestElement = mergedArray[index];
            }
            if(index == mergedArray.length-1){
                sortedArray.push(TempSmallestElement);
                let elementIndex = mergedArray.indexOf(TempSmallestElement);
                mergedArray.splice(elementIndex, 1);
            }
            if(index==100) return;
        }
    }
    return sortedArray;
}
let finalArray = MTSA([2,5,6,9], [1,2,31,2,9]);
console.log("Result : " + finalArray);