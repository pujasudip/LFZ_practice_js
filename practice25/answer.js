var first_array = [3,-5,15,4];
var second_array = [3,18,-5,-4];

function addArrays(arr1, arr2) {
    let output = [];
    for(let i = 0; i < arr1.length; i++){
        let tempNum = arr1[i] + arr2[i];
        output.push(tempNum);
    }

    return output;
}

console.log(addArrays(first_array, second_array));