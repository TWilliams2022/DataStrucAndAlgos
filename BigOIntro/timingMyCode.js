//slower
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
                            //happens more as n grows
        total += i;
        // depending on the size of n.. that will determine how many assignments there are
    }
    return total;
}

// shows the performance timing
var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)


//faster
function addUpTo(n) {
    return n * (n + 1) / 2;
    //only 3 operations
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

//comparing code which would run faster