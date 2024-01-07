function mergeArray(array1, array2) {
    let mergedArray = array2;
    array1.map(( element, i ) => {
        mergeArray.push(element);
    })
    return mergedArray;
}
function MTSA(params) {
    let TempSmallestElement;
    let sortedArray = [];
    let mergedArray = mergeArray([2,5,6,9], [1,2,3,29]);
    for (let index = 0; mergedArray.length != 0; index++) {
        TempSmallestElement = mergeArray[0];
        if(TempSmallestElement <= mergedArray[index]){

        }else{

        }
    }

}
let finalArray = MTSA([2,5,6,9], [1,2,3,29]);
console.log("Result : " + finalArray);