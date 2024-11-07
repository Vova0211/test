const reverse = (s) => s.split('').reverse().join('');

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
        result = reverse(text);
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

export {encrypt};
console.log(encrypt('move'));
console.log(encrypt('goal!'));