/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number): number {
    let rem = true;
    let negative = int < 0;
    return (+int.toString().split('').reverse().filter(e => {
        if(e !== '0') {
            rem = false;
        }
        if(rem || e === '-') return '';
        return e;
    }).join('')) * (negative ? -1 : 1);
}

export { reverse };
