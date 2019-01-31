var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn'];

function search_array(haystack, needle) {
    let output = [];

    needle.forEach(function(item) {
        if(haystack.includes(item)){
            output.push(item);
        }
    })
    return output;
}

console.log(search_array(haystack, needle));