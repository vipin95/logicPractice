function FSOGNFA(number) {
    const array = [2,6,2,1,6,8,4];
    let newArray;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        newArray = array.concat([]);
        newArray.splice(index, 1);
        let difference = Math.abs(element - number);
        let condition = newArray.indexOf(difference);
        if(condition >= 0){
            console.log(element+" + "+ difference +" = "+ number);
            break;
        }else if(index == array.length-1){
            console.log("Not Present")
        }
    }
}
FSOGNFA(8);