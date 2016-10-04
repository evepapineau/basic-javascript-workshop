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

