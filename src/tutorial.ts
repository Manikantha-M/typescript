// Type annotations

let awesomeName: string = 'shakeAndBake';
awesomeName = 'abcd';
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);
let amount:number = 20;
amount = amount - 10;
let isAwesome:boolean = true;
isAwesome = !isAwesome;

// 
let greeting:string = 'hello typescript';
greeting = greeting.toUpperCase();

let age:number = 25;
age +=5;

let isAdult:boolean = age >25;
isAdult = !isAdult;
console.log(isAdult);

// union type pipe operator
let tax:number | string = 10
tax = '$100';

let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';

// type any

let notsure: any = 4;
notsure = 'hjkk';
notsure = false;

// Arrays

let price:number[] = [100, 75, 34];
price.push(98);

let fruit:string[] = ['apple']
fruit.push('orange');


let randomValues:any[] = [];
randomValues.push(121)
randomValues.push('fghf');
console.log(randomValues);

// objects
let car:{brand:string, year:number} = {
    brand :'toyota', year:2020
};
car.brand = 'ford';
console.log(car);

let book = {title:'book', cost:20};
let pen = {title:'pen', cost:10};
let notebook = {title:'notebook'};
console.log(book, pen, notebook)

let items:{readonly title:string, cost?:number}[] = [book, pen, notebook];

console.log(items)

// Functions
function sayHi (name:string){
    console.log(`hello there ${name.toUpperCase()}`);
}
sayHi('john');

function calcDiscount(price:number){
    return price*0.9;
};
const finalPrice = calcDiscount(800);
console.log(finalPrice);

function addAny(x:any){
    let anotherNumber: number = 3;
    return x+anotherNumber
};
let res1 = addAny(3);
console.log(res1);
let res2 = addAny('3');
console.log(res2);

function calc(price:number, discount?:number):number{
    return price-(discount||0);
};
let value = calc(100,20);
console.log(value);

function score(initScore:number, penaltyPoints:number = 0):number{
    return initScore - penaltyPoints;
};
let valueTwo = score(300);
console.log(valueTwo);


function sum(msg:string, ...nums:number[]): string{
    return msg + nums.reduce((acc, currVal) => acc + currVal, 0);
};
let result = sum('The total is:', 1,2,3,4,5);
console.log((result));

function log(msg:string):void{
    console.log(msg);
};
log('hi there');

// Type Gaurd
function processInput(input:string | number){
    if(typeof input === 'number'){
        console.log(input*2);
    }else{
        console.log(input.toUpperCase());
        
    }
    
}
 processInput(10);