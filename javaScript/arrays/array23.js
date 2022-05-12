const arr23 = ['gopal', 1, true]
arr23.forEach((item, index) => {
    console.log(`element at ${index} position is ${item}`);
});

let arr24 = ['Alaba', 'Modric', 'Kroos', 'Benzema']
arr24.forEach((item, index) => {
    item = item + '_RM';
    console.log(item);
})
console.log(arr24);         // Inspect why this didnt work...

let arr25 = [
    {name: "gopal", club: "Real Madrid", country: "Spain"},    
    {name: "sunil", club: "bayern", country: "Germany"},
    {name: "vijay", club: "PSG", country: "France"},
    {name: "ajay", club: "Barca", country: "Spain"},
    {name: "mahesh", club: "Arsenal", country: "England"},
    {name: "omkar", club: "chelsea", country: "England"},
];

for(let i=0; i<arr25.length; i++) {
    console.log(`${arr25[i].name} likes ${arr25[i].club} from ${arr25[i].country}`);
}


let arr26 = [1,1,2,3,5,8,13];
let arr27 = [...arr26];
console.log(arr27);
