/**
 * Fizz Buzz
 *
 * Write a program that console logs the numbers
 * from 1 to n. But for multiples of three print
 * “fizz” instead of the number and for the multiples
 * of five prints “buzz”. For numbers which are multiples
 * of both three and five print “fizzbuzz”.
 *
 * Example:
 * fizzBuzz(5);
 * console.log(1)
 * console.log(2)
 * console.log('fizz')
 * console.log(4)
 * console.log('buzz')
 */

function fizzBuzz(n: number) {
    let output;
    for(let i = 1; i <= n; i++) {
        output = "";

        if(i % 3 === 0) output = "fizz";
        if(i % 5 === 0) output += "buzz";

        if(output.length > 0) console.log(output);
        else console.log(i);
    }
}

export { fizzBuzz };
