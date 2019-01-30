let testArray = [
    {name: 'John', age:42, gender:'M'},
    {name: 'Jack', age:34, gender:'M'},
    {name: 'Michael',age:40, gender: 'M'},
    {name: 'Kendra',age:48, gender:'F'}
];

function sortByField(arr, field) {
    if(!arr[0][field]) return;
    if(isNaN(arr[0][field])){
        return arr.sort((a, b)=>{
            return a[field] > b[field] ? 1 : -1;
        })
    } else {
        return testArray.sort(function(a, b){
            return a[field] - b[field];
        })
    }
}

console.log(sortByField(testArray, 'age'));