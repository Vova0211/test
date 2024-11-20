const apples = (stud, appl) => {
  let result = []
  result.push(Math.floor(appl / stud));
  result.push(appl % stud);
  return result;
}

const time = (minPassed) => {
  let hours = Math.floor(minPassed / 60);
  let minutes = minPassed % 60;
  while(hours > 23) {
    hours -= 24;
  }
  return `${hours} ${minutes}`;
}

const classParts = (amount1, amount2, amount3) => {
  let result = 0;
  result += Math.ceil(amount1 / 2);
  result += Math.ceil(amount2 / 2);
  result += Math.ceil(amount3 / 2);
  return result;
}

const shoelace = (a, b, l, n) => {
  return (n - 1) * (2 * (a + b)) + 2 * l + a;
}

const distance = (x1, y1, x2, y2) => {
  return ((((x2 - x1) ** 2) + ((y2- y1) ** 2)) ** 0.5).toFixed(5)
}

const halfText = (s) =>  {
  let result = s.slice(Math.ceil(s.length / 2));
  result += s.slice(0, Math.ceil(s.length / 2))
  return result;
}

const textEven = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i+=2) {
    result += text[i];
  }
  return result;
}

const textEven2 = (text) => {
  if (text.length < 3) {
    return text[0];
  } else {
    return text[0] + textEven2(text.slice(2));
  }
}

const textOdd = (text) => {
  let result = '';
  for (let i = 1; i < text.length; i += 2) {
    result += text[i];
  }
  return result;
}

const textOdd2 = (text) => {
  if (text.length < 3) {
    return text[1];
  } else {
    return text[1] + textEven2(text.slice(3));
  }
}

const reverseText = (text) => text.split('').reverse().join('');

const reverseText2 = (text) => {
  if (text.length === 1) {
    return text[0];
  } else {
    return text[text.length - 1] + reverseText2(text.slice(0, -1))
  }
}

const reverseEvenText = (text) => {
  text = text.split('').reverse().join('')
  let result = '';
  for (let i = 0; i < text.length; i+=2) {
    result += text[i];
  }
  return result;
}

const reverseEvenText2 = (text) => {
  if (text.length < 3) {
    return text[text.length - 1];
  } else {
    return text[text.length - 1] + reverseEvenText2(text.slice(0, -2));
  }
}

const number_4 = (text) => {
  console.log(text[2]);
  console.log(text[text.length - 2]);
  console.log(text.slice(0, 5))
  console.log(text.slice(0, -2));
  console.log(textEven2(text)); // console.log(textEven(text));
  console.log(textOdd2(text)); //  console.log(textOdd(text));
  console.log(reverseText2(text)); //  console.log(reverseText(text));
  console.log(reverseEvenText2(text)); //  console.log(reverseEvenText(text))
  console.log(text.length);
}

number_4('Abrakadabra');
number_4('qwertyuiop');

const reverseOffer = (text) => text.split(' ').reverse().join(' ');

const findF = (text) => {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'f') {
      result.push(i);
    }
  }
  if (result.length < 1) {
    return '';
  } else if (result.length === 1) {
    return `${result[0]}`;
  }
  return `${result[0]} ${result[result.length - 1]}`;
}

const findSecondF = (text) => {
  let result = [];
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'f') {
      result.push(i);
    }
  }
  if (result.length < 1) {
    return -2;
  } else if (result.length === 1) {
    return -1;
  }
  return result[1];
}

const delH = (text) => {
  let result = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'h') {
      result.push(i);
    }
  }
  let del = '';
  for (let i = result[0]; i <= result[result.length - 1]; i++) {
    del += text[i];
  }
  return text.split(del).join('');
}

