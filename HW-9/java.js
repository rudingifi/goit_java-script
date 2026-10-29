//zdacha 1

console.log("zadacha 1");

function logItems(array) {
     
    
    for (let i = 0; i < array.length; i++){
        let number = i + 1;
            let word = array[i];
        console.log(number + " - " + word);
    }
}

    
const arrayyy=['apple', 'pear', 'banana'];

console.log(logItems(arrayyy));

//zdacha 2

console.log("zadacha 2");

function calculateEngravingPrice(message, pricePerWord) {
  let wordsCount = 0;
  let insideWord = false;

  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      insideWord = false;
    } else if (insideWord === false) {
      wordsCount++;
      insideWord = true;
    }
  }

  return wordsCount * pricePerWord;
};

const message = "prikrasy diamanty emeraldy";
const pricePerWord = 2;

console.log(calculateEngravingPrice(message, pricePerWord));


//zadacha 3

console.log("zadacha 3");

function findLongestWord(string){
  let longestWord = "";  
  let currentWord = "";  

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
           
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";  
            } else {
            currentWord += string[i];  
        }
     }

  
    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }

    return longestWord;
};



const string = "loremispumaksdasldkjhaasdflkj  asuodfhouadsujfolisadfju nmdclkkaskfd";

console.log(findLongestWord(string));

//zadacha 4

console.log("zadacha 4");

function formatString(string){
      let symbolcount = 0;
      for(let i = 0; i < string.length; i++){


        if(string.length <= 40){
          console.log(string);
          
        }else{
          console.log(string.slice(0, 40) + "...");
          
        }
      }
}

const srting = "alsjkhdfh likasdji asojasoijda siokjdhj asuj dfjuaeujrrf ahjsgd gasuydhpi  ausu diuhfojhasgdfaklsjsfhawsejkfjhesdfjkhkjsdhfkskdjjhf";

console.log(formatString(srting));


const somestr = "sd f erw t fsdm fsdf sdf sdf sdf ";
console.log(somestr.length);


//zadacha 5

console.log("zadacha 5");

function checkForSpam(message) {
  let currentWord = "";
  const text = message.toLowerCase() + " ";
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      if (currentWord === "spam" || currentWord === "sale") {
        return true;
      }
      currentWord = "";
    } else {
      currentWord += text[i];
    }
  }

  return false;
}


const mesage = "saosige sosige soapige spAm saLe";

console.log(checkForSpam(mesage));

//zadacha 6

console.log("zadacha 6");


let input;
const numbers = [];
let total = 0;

while (true){
  const promt =  prompt("введіть число");
  
  if (promt === null) {
    break; // вихід із циклу
  }

  const num = Number(promt);

  if (promt.trim() === "" || Number.isNaN(num)) {
    alert("Було введено не число, попробуйте ще раз");
    continue;
  }
  numbers.push(num)
}
console.log(numbers);
  

for(let i = 0; i < numbers.length; i++){
  total += numbers[i];
}

console.log('Загальна сума чисел дорівнює ' + total);

