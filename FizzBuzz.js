/** Write a function that takes in an integer 'n' and returns a string of numbers 
    from 1 to 'n' separated by a comma, where:
    • if the number is divisible by 3, the number should be replaced with "Fizz"
    • if the number is divisible by 5, the number should be replaced with "Buzz"
    • if the number is divisible by both 3 and 5, the number should be replaced with "FizzBuzz" */

    function FizzBuzz(n){
        let ans=[];
        
        for ( let i =1; i <= n; i++){
             //test for fizzbuzz
            if (i%3 == 0 && i%5 == 0){
                ans.push("FizzBuzz")
            //test for fizz
            }else if(i%3 == 0){
                ans.push("Fizz")
            }else if (i%5 == 0){
            //test for buzz
            ans.push("Buzz")} 
            else {            
            // populate array
            ans.push(i);
            }
        }
        
        console.log(ans)
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