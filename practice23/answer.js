function findFactor(num) {
    if(num === 0) return;
    //prepopulating 1 as factor to all the numbers
    let output = [1];
    // starting to look factor from 2
    let divisor = 2;

    while(divisor <= num/2) {
        if(num % divisor === 0){
            output.push(divisor);
        }
        divisor++;
    }

    //itself is a factor of own
    output.push(num);

    return output;

}

console.log(findFactor(15));