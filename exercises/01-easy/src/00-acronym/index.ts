/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    let acronym = "";
    // Treat dash as a space
    input = input.replace('-', ' ');
    // Treat underscore as a space
    input = input.replace('_', ' ');
    // Clean input
    input.replace(/[^A-Za-z0-9]/g, '');
    // Create acronym
    input.split(' ').forEach(word => {
        if(!word) return;
        
        acronym += word[0].toUpperCase();
    });
    return acronym;
}

export { parse };
