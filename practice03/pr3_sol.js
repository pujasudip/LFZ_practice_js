function groupByType(inputArray){
    let typeGroupObj = {};
    let output = [];

    for(let i = 0; i < inputArray.length; i++){
        let tempWord = inputArray[i];
        let tempWordType = typeof tempWord;

        if(tempWordType in typeGroupObj){
            typeGroupObj[tempWordType].push(tempWord);
        } else {
            typeGroupObj[tempWordType] = [tempWord];
        }
    }

    for(let key in typeGroupObj){
        output.push(typeGroupObj[key]);
    }

    return output;
}

console.log(groupByType(['hello', 34, true, false, 'goodbye', 56, 12, '25', true]));