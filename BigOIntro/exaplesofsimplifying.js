
// this loop will pick the number to stop to depending on if (n) is smaller than 5 or larger
function logAtLeast5(n){
    //o(n) more like a diagonal line on the chart
    //as (n) grows the number of operations grow
    for (let i = 0; i <=Math.max(5,n) ; i++) {
        console.log(i)
    }
}

// this loop will stop at numbers less than 5 because of the min unless the (n) is less than 5
function logAtMost5(n){
    //o(1) means constant flat line
    //as (n) grows the number of operations grow
    for (let i = 0; i <=Math.min(5,n) ; i++) {
        console.log(i)
    }
}

//o(n2) more of a vertical line with the worst run time