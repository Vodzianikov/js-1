// let num1 = +prompt('Введите число 1')
// let num2 = +prompt('Введите число 2')

// if (num1 > num2) {
//     console.log(`${num1} больше, чем ${num2}`)
// } else {
//     console.log(`${num2} больше, чем ${num1}`)
// }



// loops
// for (for in, for of), while, do while


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }


// let start = 10;
// let end = 20;

// while (start < end) {
//     console.log(start);
//     start++;
// }



// do {
//     console.log(start);
//     start++;
// } while (start < end)



// Запросите у пользователя радиус окружности и выведите площадь такой окружности.


// const PI = 3.14;

// let radius = +prompt('Enter circle radius');

// let result = PI * (radius ** 2);

// console.log(`Площадь окружности с радиусом ${radius} равна ${result}`);



// Пользователь вводит свой текущий возраст, вывести на экран сколько лет ему будет до 2030 года. 
// Например, вводим 14. Вывод: «в 2018 будет 15», «в 2019 будет 16», «в 2020 будет 17» и т.д.

// let currentAge = +prompt('Enter your current age');
// let currentYear = 2024;

// const maxYear = 2030;

// while (currentYear <= maxYear) {
//     console.log(`В ${currentYear} Вам ${currentAge}`);
//     currentYear++;
//     currentAge++;
// }


// Сделать цикл который выводит нечетные числа от 40 до 140

// let start = 40;
// let end = 140;

// while (start <= end) {
//     if (start % 2 !== 0) {
//         console.log(start);
//     }
//     start++;
// }





// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.


// let otric = 0;
// let poloj = 0;
// let zero = 0;

// for (let i = 1; i <= 10; i++) {
//     let userNumber = +prompt('Введите число');
//     if (userNumber < 0) {
//         otric++;
//     } else if (userNumber > 0) {
//         poloj++;
//     } else {
//         zero++;
//     }
// }

// console.log(`Положительных - ${poloj}
// Отрицательных - ${otric}
// Нулей - ${zero}
// `);



// Вывести # столько раз, сколько указал пользователь (цикл while)

// const SYM = '#';

// let resultString = '';

// let i = 1;
// let userNumber = +prompt('Enter number');

// while (i <= userNumber) {
//     resultString += SYM;
//     i++;
// }

// console.log(resultString)





// const str2 = 'Hello';

// console.log(str.length)

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// console.log(str2.concat(' ', str));

// console.log(str[5])



// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


// последний символ в строке
// console.log(str[str.length - 1])


// console.log(str.charAt(5))
// console.log(str[5])

// let email = 'test@mail.ru'

// let result = email.includes('@')

// if (email.includes('@') && email.includes('.', 4)) {
//     console.log('Выглядит как почта, хммм')
// } else {
//     console.log('Не не не')
// }



// const str = 'JavaScripta';

// console.log(str.lastIndexOf('a')) // => 10, индекс последнего вхождения
// console.log(str.indexOf('a')) // => 1, индекс первого вхождения
// console.log(str.indexOf('w')) // => -1, не нашли


// console.log(str.startsWith('Ja')); // => true
// console.log(str.endsWith('script')); // => false


// console.log(str.search('Scr')) // => 4, индекс начала вхождения искомой строки


// let result = str.slice(4); // => новая строка, начиная с индекса

// console.log(result);


// console.log(str.substring(2, 8)) // => от 2 вкл до 8 не вкл
// console.log(str.substr(2, 8)) // => от индекса 2, 8 символов


// console.log(str.padEnd(20, '*'))
// console.log(str.padStart(20, '*'))



// возвращают новую строку
// console.log(str.replace('i', '1')) // => заменяет первый найденный символ, если не нашёл, вернет исходную строку

// console.log(str.replaceAll('a', '@')) // => заменяет все найденные символы


// let newStr = '#';
// let userNumber = prompt('Enter number');

// console.log(newStr.repeat(userNumber));


// let test = 'text';

// console.log(test.trim());


// 1) Перевернуть строку:

// Пример:
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


let str = 'world';

let result = '';

for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}

console.log(result);