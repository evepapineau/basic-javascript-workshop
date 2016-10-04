//Write a function that takes a string and returns the first character of the string. 

function string(firstCharacter) {
    return firstCharacter.substring(0,1)
};

console.log(string("Eve"));

//Write a function that takes a string and returns the last character of a string.
function string(lastCharacter) {
    var stringLength = lastCharacter.length;
    var string = lastCharacter.charAt(stringLength - 1);
    return string;
}

console.log(string("Hello"));

//Write a function that takes a string and a number, 
//and returns the character at the position represented by the number.

function character(string, number) {
    return string[number];
}

console.log(character("Eve", 2));

//Write a function that takes two numbers and adds them together.

function number(num1, num2) {
    return num1 + num2;
}

console.log(number(2,3));

//Write a function that takes two numbers and multiplies them together.

function number(num1, num2) {
    return num1 * num2;
}

console.log(number(2, 4));

//Write a function that takes two numbers and a string. If the string is ‘add’, 
//then return the sum of the numbers. If the string is ‘subtract’, 
//return the difference. If the string is ‘mult’, return the product. 
//If the string is ‘div’, return the ratio. Otherwise return 0.

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

//console.log(math(3, 2, "add"));

//Write a function that takes a string, and returns the reverse of that string.

function reverse(string) {
    var word ="";
    for (var i = word.length - 1; i >= 0; i--) {
        word += string[i];
    }
    return word;
}

//console.log(reverse("Hello"));

//Write a function that takes a number and returns the factorial of a number.

function factorial(number) {
    if (number > 0) {
        var number1 = 1;
        for (var i=number; i >= 1; i--) {
            number1 *= i;
        }
    return number1;
    }
    else {
          return 1;  
    }
} 

//console.log(factorial(5));

//Write a function that takes a phrase as a string, 
//and returns the longest word in that phrase.
function phrase(string) {
    var split = string.split("");
    var longuestWord = 0;
    for (var i=0; i < split.length; i++) {
        if (split[i].length > longuestWord) {
            longuestWord = split[i].length;
        }
    return longuestWord;
    }
}

//console.log(phrase("iggy like apples"));

//Write a function that takes a phrase, and returns the same phrase with every word capitalized.
function phrase(firstLetter) {
    firstLetter = firstLetter.toLowerCase();
    firstLetter = firstLetter.split(" ");
    for (var i = 0; i < firstLetter.length; i++) {
        firstLetter[i] = firstLetter[i][0].toUpperCase()+firstLetter[i].substring(1);
        
    }
    return firstLetter; 
}


//console.log(phrase("iggy like apples"));

//Write a function that takes an array and returns the largest number of the array.
function biggestNumb(array) {
    var biggest = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > biggest) {
           biggest = array[i];
           array.push[i];
        }
    }
    return biggest;
}
console.log(biggestNumb([4,10,6]))