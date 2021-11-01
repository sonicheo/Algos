// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    // Write your code here
    var min, max, sum = 0;
    
    //To inintialise the min and max
    for(var i=0; i<arr.length-1; i++){
        sum+= arr[i]
    }    
    min = sum;
    max = sum;
    sum = 0;

    
    for(var i=0; i<arr.length; i++){
        for(var k=0; k<arr.length; k++){
            if(k != i){
                sum+= arr[k]
            }
        }

        if(sum > max){
            max = sum
        }
        if(sum < min){
            min = sum
        }
        
        sum = 0;
    }
    
    console.log(min + " " + max )

}

miniMaxSum([1, 2, 3, 4, 5])