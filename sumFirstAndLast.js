function sumFirstAndLast (inputArray){
    let firstElement =Number(inputArray.shift());
    let lastElement = Number(inputArray.pop());
    let sumOfFirstAndLast = firstElement+lastElement;

    console.log(sumOfFirstAndLast);
}
sumFirstAndLast(['20', '30', '40']);