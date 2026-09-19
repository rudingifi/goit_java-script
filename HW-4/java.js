const textarea1 = prompt(`введіть щось`);

const textarea2 = prompt(`введіть щось`);


if(textarea1 && textarea2){
    console.log(`Обидва поля заповнені`);
    
}

else{
    console.log(`не всі поля заповнені`);
    
}

const numberarea1 = Number(prompt("введіть число"));

const numberarea2 = Number(prompt("введіть число"));

const sum = numberarea1 + numberarea2;

if(sum <= 10){
    console.log(`Сума менша abo дорівнює 10`);
    
}

else {
    console.log("Сума більша за 10");
    
}

const textarea3 = prompt("textjs");

if (textarea3.includes("JavaScript")){
    console.log("Текст містить слово JavaScript");
    
}
else{
    console.log("Текст не містить слово JavaScript");
    
}

const numberarea3 = Number(prompt(`writ numbr`));

if (numberarea3 >= 10 && numberarea3 <= 20) {
    console.log("Число входить в діапазон від 10 до 20");
} 
else {
    console.log("Число не входить в діапазоні від 10 до 20");
}

const name = prompt(`write name`)

const email = prompt(`write email`)

const password = prompt(`write password`)

if(name.length >= 3 && email.includes("@") && email.includes(".") && password.length >= 6){
    console.log("Перенаправлення на іншу сторінку");
    
}
else{
    console.log("Помилка: неправильне заповнення");
    
}