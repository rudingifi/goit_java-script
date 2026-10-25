// Zadacha 1
console.log(" ------- zadacha 1 ------- ");


const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];

// Функція countItems тут

function countItems(array, condition){
    let count = 0;

    for(let element of array){
        if(condition(element)){
            count += 1;
        }
    }
    return count;
}

// Умови для перевірки:
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

// Тестування
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));


// zadacha  2
console.log(" ------- zadacha 2 ------- ");



// Функція calculate тут
const calculate = (a, b, operation) => operation(a,b);


// Стрілкові функції для операцій тут
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) =>{
    if(b){
      return a/b;
    } else {
       return "помилка ділення на нуль";
    }
};


// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку



// zadacha 3
console.log(" ------- zadacha 3 ---------");


const repeatMessage = (times, messageCreator) => {
    for(let i = 0; i < times; i++) {
        messageCreator(i);
    }
}

const hello = i => console.log(`Привіт! Повідомлення №${i + 1}`);
const countdown = i => console.log(`Відлік: ${10 - i}`);
const stars = i => console.log('*'.repeat(i + 1));

// Тестування
repeatMessage(3, hello);
repeatMessage(3, countdown);
repeatMessage(4, stars);