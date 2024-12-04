// найти такое число, которое больше 100 и у которых сумма первой и последней цифр максимальна
import {getNumber} from './agregation.js';

let i = getNumber();
while (i !== 0) {
  let firstNum = Math.floor(i / (10 ** (`${i}`.length - 1))); 
  if (i > 100 && i % 10 === 9 && firstNum === 9) {
    break;
  }
  i = getNumber();
};