//https://projecteuler.net/problem=1



function findTheSum(){
    let input = prompt("Input a number:");
    //isNan used to confirm a number has been entered
    while(isNaN(input)){
        console.log('This is not a number, try again');
        input = prompt("Input a number:");
    }
    
    let sum = 0;
    for (let i = 3; i < input; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;

}



console.log(findTheSum());