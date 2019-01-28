function fibSequence(num){
    let firstNum  = 0;
    let secondNum = 1;
    let output = [];
    if(num === 1){
        return output.push(firstNum);
    } else if(num === 2){
        output.push(firstNum, secondNum);
        return output;
    } else {
        output.push(firstNum, secondNum);
        for(let i = 0; i < (num - 2); i++){

            let lastNum = output[output.length - 1];
            let lastSecondNum = output[output.length -2];

            output.push(lastNum + lastSecondNum);
        }
    }

    return output;


}

console.log(fibSequence(12));