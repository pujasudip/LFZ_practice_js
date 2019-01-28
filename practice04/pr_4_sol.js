function sort(inputArr){
    
    for(let i = 0; i < (inputArr.length - 1); i++){
        if(inputArr[i].charAt(0) > inputArr[i+1].charAt(0)){
            let tempWord = inputArr[i];
            inputArr[i] = inputArr[i+1];
            inputArr[i+1] = tempWord;
        }
    }

    return inputArr;

}

console.log('1)' + sort(['mouse', 'cat', 'dog', 'human']));

console.log('2)' + ['mouse', 'cat', 'dog', 'human'].sort());