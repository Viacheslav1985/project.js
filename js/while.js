"use strict";

/* let num = 50; */

/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* /* do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) { // самый часто используемый цикл 
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
    
} */

// цикл в цикле метки

for (let i = 0; i < 3; i++) {
    console.log(i);
    /* for (let j = 0; j < 3; j++) {
        console.log(j);
    } */
}


/* *
**
***
****
*****
****** */

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }


    result += '\n';
}
console.log(result);

/* Перепишите цикл  for на вариант с while.Результат должен остаться точно таким же.Не создайте бесконечный цикл! Иначе браузер может зависнуть.

    Цикл, который нужно переписать:

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}*/

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    else {
        console.log(i);
    }
    i++;
}


/* Заполните массив цифрами от 5 до 10 включительно.Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0] */

const arrayOfNumber = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumber[i - 5] = i;
}

console.log(arrayOfNumber);
return arrayOfNumber;





/* При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой */
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

/* При помощи цикла for выведите чётные числа от 2 до 10 включительно */

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }

}




/* При помощи цикла for вывести числа от 20 до 10 в консоль.В обратном порядке(20, 19, 18...).Когда цикл дойдет до числа 13 - остановить весь цикл */
for (let i = 20; i >= 10; i--) {
    if (i === 13) break;

    console.log(i);
}








/*  first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}

for (let i = 4; i <= 10; i++) {
    console.log(i);
}

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i);
}*/
