const chose1 = prompt(`Кава Чай або сік`);

let choise = `` ;

switch (chose1){
    case `кава`:
        choise = `кава`;
        break;
    case `Чай`:
        choise = `Чай`;
        break;
    case `сік`:
        choise = `сік`;
        break;
}

console.log(choise);

const weekly = prompt(`введіть день тиждня`);

if(weekly == `субота` || weekly == `неділя`){
    console.log(`вихідний`);
    
}
else{
    console.log(`робочий день`);
    
}

const month = prompt(`write month num`);

if(month == `1`){
    console.log(`january`);
    
}else if (month == `2`){
    console.log(`fabruary`);
    
}else if (month == `3`){
    console.log(`march`);
    
}else if (month == `4`){
    console.log(`april`);
    
}else if (month == `5`){
    console.log(`may`);
    
}else if (month == `6`){
    console.log(`june`);
    
}else if(month == `7`){
    console.log(`july`);
    
}else if (month == `8`){
    console.log(`august`);
    
}else if (month == `9`){
    console.log(`september`);
    
}else if (month == `10`){
    console.log(`october`);
    
}else if (month == `11`){
    console.log(`november`);
    
}else if (month == `12`){
    console.log(`december`);
    
}

const colorname = prompt(`write color name`)

if (colorname == "червоний"){
    console.log("стоп");
    
}else if ("зелений"){
    console.log("йти");
    
}else if ("жовтий"){
    console.log("чекати");
    
}

let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));
let operator = prompt("Введіть оператор (+, -, *, /):");

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      console.warn("Попередження: ділення на нуль неможливе!");
      alert("Попередження: ділення на нуль неможливе!");
      result = undefined;
    } else {
      result = num1 / num2;
    }
    break;
  default:
    console.warn("Невідомий оператор!");
    alert("Невідомий оператор!");
}

if (result !== undefined) {
  console.log(`Результат: ${num1} ${operator} ${num2} = ${result}`);
  alert(`Результат: ${num1} ${operator} ${num2} = ${result}`);
}