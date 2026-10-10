const friends = [`mango`, `kiwi`, `poly`, `ajax`];
let string = ``;
for(const itm of friends){
    console.log(itm);
    
}

const friends1 = [`mangogo`, `kiwiwi`, `polyly`, `ajaxaja`];

console.log(friends1.join(` `));

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
cards.splice(2,1)
cards.splice(5,1,`Карточка-6`)
cards.splice(3,1,`оновлена Карточка-4`)
console.log(cards);
