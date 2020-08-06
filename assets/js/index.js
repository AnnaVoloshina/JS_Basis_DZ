"use strict";

// Task 1. Variables

let a;

let b;

a = 284;

b = 46;

console.log(a * b);

// Task 2. Variables

let c;

let d;

c = 1024;

d = 2.56;

console.log(c / d);

// Task 3. Variables

let e;

let f;

e = -75;

f = -325874;

console.log(e + f);

// Task 4. Variables

let numOne = 11;

let boolOne = true;

let textOne = "java script";

let textTwo = "100";

console.log(numOne);

console.log(boolOne);

console.log(textOne);

console.log(textTwo);

// Task 5. Variables

let num = 1;

num += 11;

num -= 11;

num *= 11;

num /= 11;

num = num++;

num = num--;

console.log(num);

// Task 1. Prompt

let anyNumber1 = prompt("Enter any number");

anyNumber1 = Number(anyNumber1);

let square = anyNumber1 ** 2;

console.log(square);

// Task 2. Prompt

let anyNumber2 = +prompt("Enter any number");

let anyNumber3 = +prompt("Enter any number");

let avg = (anyNumber2 + anyNumber3) / 2;

console.log(avg);

// Task 3. Prompt

let minutes = +prompt("Enter minutes");

let seconds = minutes * 60;

console.log(`${minutes} minutes = ${seconds} seconds`);

// Task 4. Prompt

let greeting = "Hello";

let userName = prompt("What is your name?");

alert(`${greeting}, ${userName}!`);

// Task 1. Conditions

let ifTen = +prompt("What is 17 - 7?");

if (ifTen === 10) {
  alert("Верно");
} else {
  alert("Неверно");
}

// Task 2. Conditions

let test = true;

if (test === true) {
  alert("Верно");
} else {
  alert("Неверно");
}

if (test !== true) {
  alert("Верно");
} else {
  alert("Неверно");
}

test = false;

if (test === true) {
  alert("Верно");
} else {
  alert("Неверно");
}

if (test !== true) {
  alert("Верно");
} else {
  alert("Неверно");
}

// Task 3. Conditions

let sum = +prompt("Введите сумму покупки");

if (sum > 500 && sum < 800) {
  let sumFinal = sum - 0.03 * sum;
  alert(`Сумма покупки с учетом скидки 3% = ${sumFinal} грн`);
} else if (sum >= 800) {
  alert(`Сумма покупки с учетом скидки 5% = ${sum - 0.05 * sum} грн`);
} else {
  alert("Получите скидку 3-5% при сумме покупки больше 500 грн");
}

// Task 1. Cycles

let i = 25;

while (i >= 0) {
  console.log(i);
  i--;
}

i = 25;

do {
  console.log(i);
  i--;
} while (i >= 0);

for (i = 25; i >= 0; i--) {
  console.log(i);
}

// Task 2. Cycles

let x = 10;

while (x <= 50) {
  if (x % 5 === 0) {
    console.log(x);
    x++;
  } else {
    x++;
  }
}

x = 10;

do {
  if (x % 5 === 0) {
    console.log(x);
    x++;
  } else {
    x++;
  }
} while (x <= 50);

for (x = 10; x <= 50; ) {
  if (x % 5 === 0) {
    console.log(x);
    x++;
  } else {
    x++;
  }
}

// Task 3. Cycles

let y = 1;
let sumRange = 0;

while (y <= 100) {
  sumRange = sumRange + y;
  y++;
}

console.log(sumRange);

y = 1;
sumRange = 0;

do {
  sumRange = sumRange + y;
  y++;
} while (y <= 100);

console.log(sumRange);

sumRange = 0;

for (y = 1; y <= 100; ) {
  sumRange = sumRange + y;
  y++;
}

console.log(sumRange);

// Task 4. Cycles

let input = +prompt("Сколько будет 2 + 2 х 2 ?");
while (input !== 6) {
  input = +prompt("Ответ неверный. Сколько будет 2 + 2 х 2 ?");
}
alert("Поздравляем! Вы дали правильный ответ.");

input = +prompt("Сколько будет 2 + 2 х 2 ?");
do {
  input = +prompt("Ответ неверный. Сколько будет 2 + 2 х 2 ?");
} while (input !== 6);
alert("Поздравляем! Вы дали правильный ответ.");

input = +prompt("Сколько будет 2 + 2 х 2 ?");
for (; input !== 6; ) {
  input = +prompt("Ответ неверный. Сколько будет 2 + 2 х 2 ?");
}
alert("Поздравляем! Вы дали правильный ответ.");

// Task. Functions

let userAge = +prompt("Введите Ваш возраст"); // Унарный плюс можно не писать, так как операции сравнения преобразуют операнды к числовым значениям.

function isAdult(userAge) {
  if (userAge >= 18) {
    alert(true);
  } else {
    alert(false);
  }
}

isAdult(userAge);
