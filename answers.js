function string(firstCharacter) {
    return firstCharacter.substring(0,1)
};

console.log(string("Eve"));

function string(lastCharacter) {
    stringLength = lastCharacter.length;
    var string = lastCharacter.charAt(stringLength - 1);
    return string;
}

console.log(string("Hello"));

function character(string, number) {
    return string[number];
}

console.log(character("Eve", 2));

function number(num1, num2) {
    return num1 + num2;
}

console.log(number(2,3));

function number(num1, num2) {
    return num1 * num2;
}

console.log(number(2, 4));

function math(num1, num2, string) {
    switch(string) {
        case 'add':
            return num1 + num2;
        case 'substract':
            return num1 - num2;
        case 'mult':
            return num1 * num2;
        case 'div':
            return num1 / num2;
        default:
            return 0;
    }
};

console.log(math(3, 2, "add"));
