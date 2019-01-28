function pigLatin(str){
    debugger;
    let splitWords = str.split(' ');
    let output = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let suffix = 'ay';

    for(let i = 0; i < splitWords.length; i++){
        let splitWord = splitWords[i].split('');
        for(let i = 0; i < splitWord.length; i++){
            if(!vowels.includes(splitWords[i])){
                let tempLetter = splitWord.splice(i, 1);
                splitWord.push(tempLetter.toString(), suffix);
                break;
            }
        }
        output.push(splitWord.join(''));
    }
    return output.join(' ');
}

console.log(pigLatin("Hello my name is Stu"));