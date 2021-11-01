// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
    // Write your code here
    var positive=0, negative=0, zeroes=0, total = arr.length;
    
    for(var i=0; i < arr.length; i++){
        if (arr[i] > 0){
            positive++
        }
        else if(arr[i] < 0){
            negative++
        }
        else{
            zeroes++
        }
    }
    
    console.log((positive/total).toFixed(6))
    console.log((negative/total).toFixed(6))
    console.log((zeroes/total).toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])