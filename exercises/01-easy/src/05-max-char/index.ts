/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str: string): string {
    const charMap = new Map<string, number>();
    let max = 0;
    let maxChar = '';

    // create character map
    for (let char of str) {
        let value = charMap.get(char)
        if (value !== undefined) {
            // increment the character's value if the character existed in the map
            charMap.set(char, value + 1);
        } else {
            // Otherwise, the value of the character will be increamented by 1
            charMap.set(char, 1);
        }
    }

    // find the most commonly used character
    charMap.forEach((val, char) => {
        if (val > max) {
            max = val;
            maxChar = char;
        }
    });

    return maxChar;
}

export { maxChar };
