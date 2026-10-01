let number = [1, 2, 3] ;

number[1] = +10;

console.log(number);


let srting = [`mango`, `pokoyo`, `pizza`];

srting[4] = `___`;

console.log(srting);


let number2 = [50, 7, 10];

let res = 0;

for(const itm of number2){
    res += itm;
}

console.log(res)

let number3 = [10, 20, 30, 40, 50]

for(const itm of number3){
    console.log(itm);
    
}

const names = [`skebob`, `spooky`, `river`, `mango`, `sausage`, `paper`, `cooking`];

for(const name of names){
    if(name.length > 5){
        console.log(name);
        
    }
}

const arr = [743, 16, 904, 289, 457, 62, 998, 131, 575, 828];

let max = arr[0];

for(const num of arr){
    if(num > max){
        max = num;
    }
}

console.log(max);

const numbers = [742, 15, 903, 288, 456, 61, 999, 130, 574, 827];

for(let num of numbers){
    if(num % 2 === 0){
        console.log(num);
        
    }
}