/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function letter_box(sentence: string) : string[] {
    let box: string[] = [];
    sentence.replace(/W/g, '');
    sentence.toLowerCase().split('').forEach(l => {
        if(box.indexOf(l) >= 0) return;
        box.push(l);
    });
    return box;
}

function anagrams(stringA: string, stringB: string) {
    let boxA = letter_box(stringA);
    let boxB = letter_box(stringB);
    let isAnagram = true;

    [[boxA, boxB], [boxB, boxA]].forEach(pair => {
        pair[0].forEach(letter => {
            if(pair[1].indexOf(letter) < 0) isAnagram = false;
        });
    });
    return isAnagram;
}

export { anagrams };
