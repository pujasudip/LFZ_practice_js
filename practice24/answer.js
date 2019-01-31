var array1 = [ [1,2,3], [3,4,5], [6,7,8] ];
var array2 = [ [1,2,3], [1,2,3], [1,2,3] ];


function addMultiDArray(arr1, arr2) {
    let output = [];
    let length = arr1.length;
    let innerLength = arr1[0].length;

    for(let i = 0; i < length; i++){
        let tempArr = [];
        for(let j = 0; j < innerLength; j++){
            let sum = arr1[i][j] + arr2[i][j];
            tempArr.push(sum)
        }
        output.push(tempArr);
    }

    return output;
}

console.log(addMultiDArray(array1, array2));