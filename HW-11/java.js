const bankAccount = {
    ownerName: "janecri6",
    accountNumber: 228675242333,
    balance: 333,

    deposit(amount) {
        if (isNaN(amount) || amount <= 0) {
            alert("Некоректна сума!");
            return;
        }
        this.balance += amount;
        alert(`Рахунок поповнено на ${amount}. Залишок: ${this.balance}`);
    },

    withdraw(amount) {
        if (isNaN(amount) || amount <= 0) {
            alert("Некоректна сума!");
            return;
        }
        if (amount > this.balance) {
            alert(`Недостатньо коштів. Залишок: ${this.balance}`);
            return;
        }
        this.balance -= amount;
        alert(`Знято ${amount}. Залишок: ${this.balance}`);
    }
};

if (confirm("Поповнити рахунок?")) {
    const amount = Number(prompt("Введіть суму для поповнення:"));
    bankAccount.deposit(amount);
} else if (confirm("Зняти готівку?")) {
    const amount = Number(prompt("Введіть суму для зняття:"));
    bankAccount.withdraw(amount);
} else {
    alert(`Операцію скасовано. Залишок: ${bankAccount.balance}`);
};

//zadacha 2

const weather = {
    temperature: prompt("введіть температуру"),
    humidity: 60,
    windSpeed: 228,

    count(temperatureCount) {
        temperatureCount = 0;
        if(this.temperature == temperatureCount){
            console.log("тепература дорівнює 0 градусів целсія");
            
            
        }else if(this.temperature >= temperatureCount){
            console.log("температура більше 0 градусів Цельсія");
            
        }else{
            console.log("температура нижче 0 градусів Цельсія");
            
        }
    }
};

console.log(weather.count());


//zadacha 3


const user = {
    name: "mark",
    email: "mark.riper@gmail.com",
    password: "mangoskibidi228",

    login(){
        if(this.name == "mark" && this.email == "mark.riper@gmail.com" && this.password == "mangoskibidi228"){
            console.log("ласкаво просимо "+ this.name);
            
        }else{
            console.log("логін некоректнний!");
            
        }
    }
};


console.log(user.login());

// zadacha 4

const movie = {
    title: "salatik burmaldatik",
    director: "kyle",
    year: 1489,
    rating: 8,

    ratingCheck(){
        if(this.rating === 8){
            console.log("рейтинг фільму рівно 8 балів");
            
        }else if(this.rating >= 8){
            console.log("рейтинг фільму більше 8 балів");
            
        }else{
            console.log("рейтинг фільму меньше 8 балів");
            
        }
    }

};

console.log(movie.ratingCheck());
console.log(movie);

