const reverseText = (s) => s.split('').reverse().join('');

const printQuestion = (word = '1') => {
    console.log(`${word}?`)
}

const printQuestion2 = (text) => {
    console.log(text + '?')
    /**/
}
  
const getHiddenCard = (num, amount = 4) => {
    let result = `${'*'.repeat(amount)}${num.slice(16 - 4)}`;
    return(result);
}

const capitalize = (text) => {
    let result = `${text.slice(0, 1).toUpperCase()}${text.slice(1).toLowerCase()}`;
    return(result);
}

const isInternationalPhone = (number) => {
    let result = Boolean();
    if (number[0] === '+') {
        result = true;
    } else {
        result = false;
    }
    return(result);
}

const isLeapYear = (year) => {
    const result = ((year % 4) === 0 && (year % 100) !== 0) || ((year % 400) === 0);

    /*let result = Boolean;
    if ((year % 4) === 0 && (year % 100) !== 0) {
        result = true;
    } else if (year % 400 === 0) {
        result = true;
    } else {
      result = false
    } */
    return(result);
}

const getLetter = (text, num) => {
    let result = text[num - 1];
    if ((typeof result) === "undefined") {
        result = '';
    }
    return(result);
}

const normalizeUrl = (url) => {
    let result;
    if(url.startsWith('https://')) {
        result = url;
    } else {
        result = `https://${url}`;
    }
    return(result);
}

const convertText = (text) => {
    let result;
    if (text[0] === text[0].toUpperCase()) {
        result = text;
    } else {
        result = reverseText(text);
    }
    return(result);
}

const getNumberExplanation = (number) => {
    switch (number) {
        case 666:
            return("devil number");
        case 42:
            return("answer for everything");
        case 7:
            return("prime number");
        default:
            return("just a number");
    }
}

const printNumbers = (initialNumber) => {
    while (initialNumber > 0) {
        console.log(initialNumber);
        initialNumber -= 1;
    }
    console.log("finished!");
}

const joinNumbersFromRange = (start, finish) => {
    let i = start;
    let result = '';
    while (i <= finish) {
        result += `${i}`;
        i += 1;
    }
    return(result);
}

const mySubstr = (text, amount) => {
    let i = 0;
    let result = '';
    while (i < amount) {
        result = `${result}${text[i]}`
        i += 1;
    }
    return(result);
}

const countChars = (text, char) => {
    let amount = 0;
    let i = 0;
    while(i < text.length) {
        if (text[i] === char.toUpperCase()){
            amount += 1;
        }
        if (text[i] === char.toLowerCase()){
            amount += 1;
        }
        i += 1;
    }
    return(amount);
}


const makeItFunny = (text, num) => {
    let result = ' ';
    let i = 1;
    while(i < text.length) {
        if (i % num === 0) {
            result = `${result}${text[i-1].toUpperCase()}`;
        } else {
            result = `${result}${text[i-1]}`;
        }
        i++;
    }
    result = `${result}${text[text.length-1]}`;
    result = result.slice(1);
    return(result);
}

const encrypt = (text) => {
    let result = '';
    for(let i = 0; i < text.length; i++) {
        if (text.length % 2 === 0) {
          if(i % 2 === 0) {
              result += text[i+1];
          } else {
              result += text[i-1];
          }
        } else {
            if (i === (text.length - 1)) {
                result += text[i];
            } else if(i % 2 === 0){
                result += text[i+1];
            } else {
                result += text[i-1];
            }
        } 
    }
    return(result);
}

const invertCase = (text) => {
    let result = '';
    for(let i = 0; i < text.length; i++) {
        if(text[i] === text[i].toUpperCase()) {
            result += text[i].toLowerCase();
        } else {
            result += text[i].toUpperCase();
        }
    }
    return(result);
}

const fizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(`${i}`);
        }
    }
}

export {fizzBuzz};

function findDivisors(n) {
    var divisors = [];
    var result = 0;
    for (var i = 1; i < n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    for (let i = 0; i < divisors.length; i++) {
        result += divisors[i];
    }
    return result;
}
const isPerfect = (num) => {
    let result = Boolean;
    if (num > 0 && num === findDivisors(num)) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

const isHappyTicket = (number) => {
    let result1 = 0;
    let result2 = 0;
    for (let i = 0; i < (number.length / 2); i++) {
        result1 += parseInt(number[i]);
    }
    for (let i = (number.length / 2); i < number.length; i++) {
        result2 += parseInt(number[i]);
    }
    let result = Boolean;
    if (result1 === result2) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
      const digit = Number(numAsStr[i]);
      sum += digit * digit;
    }
    return sum;
}
const isHappyNumber = (num) => {
    let i = 0;
    while(i < 10) {
        if (sumOfSquareDigits(num) === 1) {
            return true;
        }
        num = sumOfSquareDigits(num);
        i++;
    }
    return false;
}

const reverseInt = (num) => {
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num *= (-1);
    }
    num = num.toString();
    let result = reverseText(num);
    result = parseInt(result);
    if (isNegative === true) {
        result *= (-1);
    }
    return result;
}
export {reverseInt};
const fib = (num) => {
    let num1 = 0;
    let num2 = 1; 
    let fibanachi = [0, 1];
    for (let i = 0; i < (num / 2); i++) {
        num1 += num2;
        fibanachi.push(num1);
        num2 += num1;
        fibanachi.push(num2);
    }
    return fibanachi[num];
}

const getWeekends = (setting = 'long') => {
    if (setting === 'long') {
        let day = ['saturday', 'sunday']
        return day;
    } else if (setting === 'short') {
        let day = ['sat', 'sun'];
        return day;
    }
}

const swap = (arr = []) => {
    if (arr.length < 2) {
        return arr;
    }
    let ctn = arr[arr.length - 1];
    arr[arr.length - 1] = arr[0];
    arr[0] = ctn;
    return arr;
}

const get = (arr, num, znach = null) => {
    if (num > 6 || num < 0) {
        arr[num] = znach;
    }
    return arr[num];
}

const addPrefix = (arr, prefix) => {
    prefix += (' ');
    let result = arr;
    for (let i = 0; i < arr.length; i++) {
        result[i] = prefix + arr[i];
    }
    return result;
}

const reverse = (arr) => {
    return arr.reverse();
}
const names = ['john', 'smith', 'karl'];
console.log(reverse(names));