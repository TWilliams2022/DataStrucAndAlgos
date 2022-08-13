//space complexity
//no matter how many for loops in space complexity there will be 0(n)

function sum(arr) {
let total = 0;
    for (let i = 0; i <= arr.length ; i++) {
        total += arr[i];
    }
    return total;
}

function double(arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length ; i++) {
        newArr.push(2 * arr[i])
    }
return newArr;
}
//giving the function double (arr) numbers to test
double([1,2,3]);


function tripleMe (arr1){
    let newArr = [];
    for (let i = 0; i <arr1.length ; i++) {
        //.push places new numbers into the array
        newArr.push(3 * arr1[i])
    }
    return newArr
}
tripleMe([1,1,1]);