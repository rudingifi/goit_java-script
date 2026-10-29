const phoneNumbers = [
    "0661234567",
    "0632345678",
    "0973456789",
    "0664567890",
    "0635678901",
    "0976789012",
    "0667890123",
    "0638901234",
    "0979012345",
    "0661122334",
    "0632233445",
    "0973344556",
    "0664455667",
    "0635566778",
    "0976677889",
    "0667788990",
    "0638899001",
    "0979900112",
    "0661010101",
    "0632020202",
    "0973030303",
    "0664040404",
    "0635050505",
    "0976060606",
    "0667070707",
    "0638080808",
    "0979090909",
    "0661112223",
    "0632223334",
    "0973334445",
    "0664445556",
    "0635556667",
    "0976667778",
    "0667778889",
    "0638889990",
    "0979990001",
    "0661231231",
    "0632342342",
    "0973453453",
    "0664564564",
    "0635675675",
    "0976786786",
    "0667897897",
    "0638908908",
    "0979019019",
    "0661357913",
    "0632468024",
    "0973579135",
    "0664680246",
    "0635791357"
];

// console.log(phoneNumbers);

const kievstar = [];
const vodafon = [];
const live = [];

for(let i of phoneNumbers){
    if(i .startsWith(`066`)){
        vodafon.push(i);
    }else if(i .startsWith(`063`)){
        live.push(i);
    }else if(i .startsWith(`097`)){
        kievstar.push(i);
    }
    
    
    
}
console.log(kievstar);
console.log(vodafon);
console.log(live);



function changeCase (text){
    let res = "";
    for(const letter of text){
        // console.log(letter);
        
        if(letter === letter.toLowerCase()){
            console.log(letter);
            res += letter.toUpperCase()
        }else{
            res += letter.toLowerCase()
        }
    }
    return res
// console.log(text);

} ;

// Напиши функцию changeCase(string) яка замінює регістр кожного символа в рядку на протилежний. Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».
console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX




// Знайдіть суму елементів масиву з використанням колбек-функції
const arr = [1, 2, 3, 4, 5];

function sumArray(arr, callback) {
   let sum = 0;

    for(const itm of arr){
        sum += itm;

    }
    callback(sum)

}

function cb(res){
    console.log(res);
    
}

sumArray(arr, cb);

const restaurant = {
    name:"la pausa",
    cuisine:"italian",
    address:"wien 1488",
    rating:67,
    
    changeinfo(newAddress, newRating) {
        this.address = newAddress
        this.rating = newRating
    }


};

    restaurant.changeinfo("misto kiev center", 69)

console.log(restaurant);
