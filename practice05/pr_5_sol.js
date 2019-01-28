function fizzBuzz(){
    let output = {};
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0){
            output[i] = 'Fizz'
        }

        if(i % 5 === 0){
            if( i in output){
                output[i] = 'FizzBuzz'
            } else {
                output[i] = 'Buzz'
            }
        }
    }
    return output;
}

console.log(fizzBuzz());