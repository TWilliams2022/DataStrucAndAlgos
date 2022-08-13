//nested loop

function printAllPairs(n) {
    for (let i = 0; i <=0 ; i++) {
        for (let j = 0; j <=0 ; j++) {
            console.log(i,j);
        }
    }
}

//O(n2) = means nsquared

// simplified
// //2nd fastest
// O(2n) ---> O(n)
//
// //o of 500 means there are 500 operations everytime
// // means it has a constant run time
// //1st fastest
// o(500) --> 0(1)
//
// //would equal nSquared
// //slowest due to being a nested loop
// O(13n2) --> O(n2)
// // **********************************************
//
// O(n + 10) --> O(n)
//
// O(1000n + 25) --> O(n)
//
// O(n2 + 5n + 8) --> O(n2)