function longerThanInput(input, compareStrArray){
    let output = [];

    for(let i = 0; i < compareStrArray.length; i++){
        if(compareStrArray[i].length > input.length){
            output.push(compareStrArray[i]);
        }
    }
    return output;
}

console.log(longerThanInput('bug', ['apple', 'chair', 'bee', 'phone']));