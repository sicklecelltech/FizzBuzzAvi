/** Write a function that takes in an integer 'n' and returns a string of numbers 
    from 1 to 'n' separated by a comma, where:
    • if the number is divisible by 3, the number should be replaced with "Fizz"
    • if the number is divisible by 5, the number should be replaced with "Buzz"
    • if the number is divisible by both 3 and 5, the number should be replaced with "FizzBuzz" */

    function FizzBuzz(n){
        //for formatting starting the array with 1 as it will not trigger fizz or buzz
        let ansArray=[1,];
        let ansString="";
        
        for ( let i =2; i <= n; i++){
             //test for fizzbuzz
            if (i%3 == 0 && i%5 == 0){
                ansArray.push(" FizzBuzz")

            //test for fizz
            }else if(i%3 == 0){
                ansArray.push(" Fizz")

            //test for buzz
            }else if (i%5 == 0){
            ansArray.push(" Buzz")} 
            else {
                            
            // populate array
            ansArray.push(` ${i}`);
            }
        }
        ansString=ansArray.toString();
        console.log(ansString)
    }
    //test fizz
    console.log("testing for Fizz")
    FizzBuzz(4)
    // test buzz
    console.log("testing for Buzz")
    FizzBuzz(6)
    // test both
    console.log("testing for Fizz and Buzz")
    FizzBuzz(10);
    //test fizzbuzz
    console.log("testing for FizzBuzz")
    FizzBuzz(16);
    FizzBuzz(31);