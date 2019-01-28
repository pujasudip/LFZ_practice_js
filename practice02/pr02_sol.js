function reverseArray(strArray){
    let reversedArrayOutput = [];
    for(let i = (strArray.length - 1); i >= 0; i--){
        reversedArrayOutput.push(strArray[i]);
    }
    return reversedArrayOutput;
}

console.log(reverseArray(['123', 'apple', 'ball', 'cat', 'dog']));