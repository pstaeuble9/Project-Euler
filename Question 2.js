function fibonacciEvenSum(total){
    let sum = 0;
    let num1 = 1;
    let num2 = 2;
    let temp = 0;

    while(num1 + num2 <= total){
        temp = num1 + num2;
        num1 = num2;
        num2 = temp;

        if(num2%2==0){
            sum += num2;
        }
    }
    console.log(sum);
}

fibonacciEvenSum(4000000);