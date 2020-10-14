/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 * 
 * pyramid(4) = '   #   '
 *              '  ###  '
 *              ' ##### '
 *              '#######'
 */

function pyramid(n: number): void {
    var width = n * 2 - 1;
    for(var level = 0; level < n; level++) {
        var floor: string = "#".repeat(level * 2) + "#";
        var space: string = ' '.repeat((width - floor.length) / 2);
        console.log(space + floor + space);
    }
}

export { pyramid };
