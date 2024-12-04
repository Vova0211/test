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

const calculateSum = (arr = []) => {
    if (!arr || !arr.length) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            result += arr[i];
        }
    }
    return result;
}

const calculateAverage = (arr) => {
    if (!arr || !arr.length) {
        return null;
    }
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i === arr.length) {
            return (sum / arr.length);
        }
        sum += arr[i];
    }
}

const getSameParity = (arr) => {
    const parity = Math.abs(arr[0]) % 2;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if ((Math.abs(arr[i]) % 2) === parity) {
            result.push(arr[i]);
        }
    }
    return result;
}

const getTotalAmount = (arr, curr) => {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] !== curr[0]) {
            continue;
        } else {
        let j = parseInt(arr[i].slice(4));
        value += j;
        }
    }
    return value;
}
const getSuperSeriesWinner = (arr) => {
    let canada = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > arr[i][1]) {
            canada += 1;
        } else if (arr[i][0] < arr[i][1]) {
            canada -= 1;
        } else {
            continue;
        }
    }
    if (canada > 0) {
        return 'canada';
    } else if (canada < 0) {
        return 'ussr';
    } else {
        return null;
    }
}

const buildDefinitionList = (arr) => {
    if (!arr || !arr.length) {
        return "";
    }
    let result = '<dl>';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j === 0) {
                result += `<dt>${arr[i][j]}</dt>`;
            } else { 
                result += `<dd>${arr[i][j]}</dd>`;
            }
        }
    }
    result += '</dl>'
    return result;
}

const capitalizeWords = (text) => {
    const separator = ' ';
    const words = text.split(separator);
    const arrWords = [];
    for (const word of words) {
        arrWords.push(word);
    }
    return arrWords;
    return arrWords.join(separator); // Соединяем обработанные слова обратно в предложение
};

const makeCensored = (text, arrFind) => {
    const separator = ' ';
    const words = text.split(separator);
    const arrWords = [];
    for (const word of words) {
        arrWords.push(word);
    }
    for (let i = 0; i < arrWords.length; i++) {
        for (let j = 0; j < arrFind.length; j++) {
            if (arrWords[i] === arrFind[j]) {
                arrWords[i] = '$#%!';
            }
        }
    }
    return arrWords.join(separator);
}

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];
const isBracketStructureBalanced = (text) => {
    const stack = [];
  
    for (const symbol of text) {
      if (openingSymbols.includes(symbol)) {
        stack.push(symbol);
      } else {
        const closingIndex = closingSymbols.indexOf(symbol);
        if (closingIndex !== -1) {
          const lastSymbol = stack[stack.length - 1];
          const openingIndex = openingSymbols.indexOf(lastSymbol);
          if (openingIndex === closingIndex) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
    }
    return stack.length === 0;
}

const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const newSet = new Set(arr1);
    const arr = Array.from(newSet);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr[i] === arr2[j]) {
                result.push(arr[i]);
                break
            }
        }
        
    }
    return result;
}

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
}

const getTheNearestLocation = (locations, point) => {
    if (locations.length < 1) {
        return null;
    }
    const [x2, y2] = point;
    let range = [];
    for (let i = 0; i < locations.length; i++) {
        const [one, [x1, y1]] = locations[i];
        range.push(getDistance([x1, y1], [x2, y2]));
    }
    let minAmount = range[0]
    let min = 0;
    for (let i = 0; i < range.length; i++) {
        if (range[i] < minAmount) {
            minAmount = range[i];
            min = i;
        }
    }
    return locations[min];
}

const getMax = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    let [max, ...rest] = arr;
    for (const value of rest) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}

const flatten = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            result = [...result, ...arr[i]];
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

const getLastWordLength = (text) => {
    if (text.length < 1) {
        return 0;
    }
    text = text.trim();
    const separator = ' ';
    const words = text.split(separator);
    const arrWords = [];
    for (const word of words) {
        arrWords.push(word);
    }
    return arrWords[arrWords.length - 1].length;
}

const hammingWeight = (number) => {
    let binary = (number).toString(2);
    let result = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            result += 1;
        }
    }
    return result;
}

const isContinuousSequence = (arr) => {
    if (arr.length < 2) {
        return false;
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== (arr[i-1] + 1)) {
            return false;
        }
    }
    return true;
}

const compareVersion = (ver1, ver2) => {
    const [a1, b1] = ver1.split('.');
    const [a2, b2] = ver2.split('.');
  
    const major = Math.sign(a1 - a2);
    const minor = Math.sign(b1 - b2);
  
    return major === 0 ? minor : major;
}
  
const chunk = (arr, amount) => {
    if (arr.length === 0) {
        return [];
    } else if (arr.length <= amount) {
        return [arr]
    }
    let result = [];
    let arr2 = arr;
    for (let i = 0; i < arr.length; i++) {
        let chank = []
        for (let j = 0; j < amount; j++) {
            chank.push(arr2[j]);
        }
        if (chank[1] === undefined) {
            break;
        }
        result.push(chank);
        arr2 = arr2.slice(amount);
        if (arr2.length === 0) {
            continue;
        } else if (arr2.length < amount) {
            result.push(arr2);
        }
    }
    return result;
}

const chunk2 = (arr, size) => {
    const nArr = [];
    for (let i = 0; i < arr.length; i += size) {
      nArr.push(arr.slice(i, i + size));
    }
    return nArr;
};

const rotateLeft = (matrix2) => {
    let matrix2L = [];
    for (let i = (matrix2[0].length - 1); i >= 0; i--) {
        let string = [];
        for (let j = 0; j < matrix2.length; j++) {
            string.push(matrix2[j][i]);
        }
        matrix2L = [...matrix2L, string];
    }
    return matrix2L;
}

const rotateRight = (matrix) => {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let string = [];
        for (let j = matrix.length - 1; j >= 0; j--) {
            string.push(matrix[j][i]);
        }
        result = [...result, string];
    }
    return result;
}

const getMirrorMatrix = (matrix) => {
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        let string = matrix[i].slice(0, matrix[i].length / 2);
        string.push(matrix[i].slice(0, matrix[i].length / 2).reverse());
        string = string.flat();
        result = [...result, string];
    }
    return result;
}

const sumIntervals = (arr) => {
    const values = [];
    for (const [start, end] of arr) {
      for (let i = start; i < end; i += 1) {
        if (!values.includes(i)) {
          values.push(i);
        }
      }
    }
    return values.length;
  };

const multiply = (matrix1, matrix2) => {
    let matr1Rows = matrix1.length, matr1Cols = matrix1[0].length,
        matr2Rows = matrix2.length, matr2Cols = matrix2[0].length,
        m = new Array(matr1Rows);  // initialize array of rows
    for (var r = 0; r < matr1Rows; ++r) {
      m[r] = new Array(matr2Cols); // initialize the current row
      for (var c = 0; c < matr2Cols; ++c) {
        m[r][c] = 0;             // initialize the current cell
        for (var i = 0; i < matr1Cols; ++i) {
          m[r][c] += matrix1[r][i] * matrix2[i][c];
        }
      }
    }
    return m;
}

const summaryRanges = (arr) => {
    if (arr.length < 2) {
      return [];
    }
    let tempArr = [];
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
      const previous = arr[i - 1];
      const current = arr[i];
      const next = arr[i + 1];
      if (next === current + 1) {
        tempArr.push(current);
      } else if ((previous === current - 1) && (next !== current + 1)) {
        tempArr.push(current);
        const range = `${tempArr[0]}->${tempArr[tempArr.length - 1]}`;
        result.push(range);
        tempArr = [];
      }
    }
    return result;
}

const buildSnailPath = (arr) => {
    let result = [];
    while(true) {
        if (arr.length === 0) {
            break;
        }
        for (let i = 0; i < arr[0].length; i++) {
            result.push(arr[0][i]);
        }
        arr = arr.slice(1);
        if (arr.length === 0) {
            continue;
        }
        arr = rotateLeft(arr);
    }
    return result;
}

const arrayTransformation = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '/' && array[i - 1] === 0) {
       return null;
      } else if (typeof(array[i]) === 'string') {
       const exprString = `${array[i - 2]} 
       ${array[i]} ${array[i - 1]}`;
       const exprResult = eval(exprString);
       const start = array.slice(0, i - 2);
       const end = array.slice(i + 1);
       const newArray = [...start, exprResult, ...end];
         
       return newArray;
     }
   }
}
 
const calcInPolishNotation = (arr) => {
   let newArray = arr;
   
   while (newArray.length !== 1) {
     newArray = arrayTransformation(newArray);
     
     if (newArray === null) {
       return newArray;
     }
   }
   
   let result = newArray[0];
   return result;
}

const getLongestLength = (text) => {
    if (text.length < 1) {
        return 0;
    }
    let result = 0;
    for (let i = 0; i < text.length; i++) {
        let result1 = [];
        for (let j = i; j < text.length; j++) {
            if (result1.indexOf(text[j + 1]) === -1 && text[j + 1] !== text[j]) {
                result1.push(text[j]);
            } else {
                result1.push(text[j]);
                break;
            }
        }
        if (result1.length > result) {
            result = result1.length;
        }
    }
    return result;
}

const nextStrOfTriang = (arr) => {
    let strOfTriang = [1];
    for (let i = 1; i < arr.length; i++) {
        strOfTriang.push(arr[i - 1] + arr[i]);
    }
    strOfTriang.push(1);
    return strOfTriang;
}
const generate = (num) => {
    let pascalTriang = [[1], [1, 1]];
    for (let i = 1; i < num; i++) {
        pascalTriang.push(nextStrOfTriang(pascalTriang[i]));
    }
    return pascalTriang[num];
}

const calcShipsCount = (batleField, shipDeck = 0) => {
    if (batleField.length === 0) return 0;
    const ships = [];
    let shipDeckCount = 1;
    const rows = batleField.length;
    const [column] = batleField;
    const columns = column.length;
    //  считаем горизонтальные палубы shipDeckCount и записываем в ships
    //  корабли от 2-х палуб по строкам:
    for (let j = 0; j < rows; j += 1) {
      for (let i = 0; i < columns - 1; i += 1) {
        if (batleField[j][i] === 1 && batleField[j][i + 1] === 1) {
          while (batleField[j][i] === 1 && batleField[j][i + 1] === 1) {
            shipDeckCount += 1;
            i += 1;
          }
          ships.push(shipDeckCount);
          shipDeckCount = 1;
        }
      }
    }
    //  считаем вертикальные палубы shipDeckCount и записываем
    //  в ships корабли от 2-х палуб по столбцам:
    for (let j = 0; j < columns; j += 1) {
      for (let i = 0; i < rows - 1; i += 1) {
        if (batleField[i][j] === 1 && batleField[i + 1][j] === 1) {
          while (batleField[i][j] === 1 && batleField[i + 1][j] === 1) {
            shipDeckCount += 1;
            j += 1;
          }
          ships.push(shipDeckCount);
          shipDeckCount = 1;
        }
      }
    }
    //  ищем и записываем в ships однопалубные корабли по всему полю:
    const newArray = [0, ...batleField, 0];
    // новый массив, чтобы не выходить за границы массива batleField
    for (let j = 1; j < rows + 1; j += 1) {
      for (let i = 0; i < columns; i += 1) {
        if (newArray[j][i] === 1 && !newArray[j][i + 1] && !newArray[j][i - 1]
        && !newArray[j + 1][i] && !newArray[j - 1][i]) {
          ships.push(1);
        }
      }
    }
    //  по умолчанию необязательный параметр shipDeck = 0, выводится количество всех кораблей
    if (shipDeck === 0) {
      return ships.length;
    }
    // при указании количества палуб shipDeck, выводится количество кораблей с такими палубами
    return ships.filter((x) => x === shipDeck).length;
};
  
const isValidField = (batleField) => {
    if (batleField.length === 0) return true;
    const newArray = [0, ...batleField, 0];
    const rows = batleField.length;
    const [column] = batleField;
    const columns = column.length;
    for (let i = 1; i < rows + 1; i += 1) {
      for (let j = 0; j < columns; j += 1) {
        if (newArray[i][j] === 1 && !newArray[i - 1][j - 1] && !newArray[i + 1][j + 1]
          && !newArray[i - 1][j + 1] && !newArray[i + 1][j - 1]) {
          continue;
        } else if (newArray[i][j] === 1) {
          return false;
        }
      }
    }
    return true;
};
  
const dictionaryToArrayOfObjects = (dictionary) => {
    return Object.keys(dictionary).reduce((acc, key) => {
        acc.push({ key: key, value: dictionary[key] });
        return acc;
    }, []);
};

const phonebook1 = [{"name":"Alex Bowman","number":"48-2002"},{"name":"Aric Almirola","number":"10-1001"},{"name":"Bubba Wallace","number":"23-1111"},{"name":"Chase Elliott","number":"9-9900"},{"name":"Denny Hamlin","number":"11-0022"},{"name":"John Logano","number":"22-2299"},{"name":"Kevin Harvick","number":"4-1154"},{"name":"Kyle Busch","number":"18-3002"},{"name":"Kyle Larson","number":"5-2234"},{"name":"Matt Dibenedetto","number":"21-1102"}];

const solution = (phonebook, name) => { // binary find
    if (phonebook.length === 0) {
        return 'Phonebook is empty!';
    }
    if (phonebook[0][0] === undefined) {
        for (let i = 0; i < phonebook.length; i) {
            if (phonebook[0][0] !== undefined) {
                break;
            }
            let str = [phonebook[i]["name"]];
            str.push(phonebook[i]["number"]);
            phonebook.push(str);
            phonebook = phonebook.slice(1);
        }
    }
    let first = 0;
    let last = phonebook.length - 1;
    while (first <= last) {
        const middle = Math.floor((first + last) / 2);
        if (phonebook[middle][0] === name) {
            return phonebook[middle][1];
        }
        if (phonebook[middle][0] > name) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return "Name not found!";
}

const NOD = (x, y) => {         // solution
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}
console.log(performance.now(solution([], "l")));