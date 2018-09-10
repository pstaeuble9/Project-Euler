let sum = 0;

function findTheSum(max) {
    for (let i = 3; i < max; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}


console.log(findTheSum(1000));
