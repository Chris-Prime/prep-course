/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]): number {
    return array.sort((a, b) => a > b ? 1 : -1).reverse()[1];
}

export { secondLargest };
