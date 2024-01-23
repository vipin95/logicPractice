function FNRC(str) {
    let strArray = str.toUpperCase();
    let char;
    for (let searchIndex = 0; searchIndex < strArray.length; searchIndex++) {
        let match = false;
        const elementSearched= strArray[searchIndex];        
        for (let index = 0; index < strArray.length; index++) {
            const elementSearchedBy = strArray[index];
            if( elementSearched == " "){
                break;
            }else if(elementSearched == elementSearchedBy && searchIndex != index){
                match = true;
                break;
            }else if(index == strArray.length-1 && match==false){
                char = elementSearched;
                return char;
            }
        }
    }
}
let result = FNRC("I am Vipin mavi");
console.log(result);