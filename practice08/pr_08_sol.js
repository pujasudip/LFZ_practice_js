function character_convert(str){
    let splitWords = str.split(' ');
    let output = [];

    for(let i = 0; i < splitWords.length; i++){
        for(let j = 0; j < splitWords[i].length; j++){
            output.push(splitWords[i].charCodeAt(j));
        }

    }
    return output.join('');
}

console.log(character_convert('the cat in the hat'));