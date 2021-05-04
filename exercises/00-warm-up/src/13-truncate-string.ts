export {};

function truncateString(str:string, length:number): string {
    return str.substr(0, 4);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
