
console.log('Hello World !');


let a = 12;
let b = 20;

a = b;

console.log(a);


let selectedColors = ['red', 'blue', 'green', 'white', 'blue'];
selectedColors[2] = 1;

console.log(selectedColors.length);


function greet (name , lastName) {
    console.log('Hello ' + name + 'Your complete lastname is ' + lastName + ' right ?');
    
}

greet('Rakshita', 'Aggarwal');


const person = {
    name: 'Mosh',
    walk() {},
    talk() {}
};

person.talk();

const targetMember = 'name';
person['name'] = 'John';