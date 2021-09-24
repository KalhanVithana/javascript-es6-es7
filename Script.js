//let,var and const Variables

//var is function scope || let are const is block scope

//if we create var variable in function scope we cant use outside scope
var num =20;
let num2 =10;

function multipulty(){

    //local scope
    var num1 = 30;
    console.log(num)
    console.log(num1)

      num1 = 40; // replace 
    console.log(num)


}




multipulty();
console.log(num2)


//let

//when the we declare let key word we cant declare twise 

let num5 = 15
if(num > 5){
    let greet = 'hi'
    console.log(greet)

     greet = 'hello' // replace
    console.log(greet)
}

//we cant use out side block

console.log(num5)

console.log("//////////////////////////////////////////////")


//const variable  

const  greet = 15
if(num > 5){
    const num = 'hi'
    console.log(num)

     const  greet = 'hello' // replace
    console.log(greet)
}

//we cant use out side block


//---------------------------------------------------------
//---------------------------------------------------------
//------------------------Template Literals ---------------------------------


//concatenation---


let name = 'mike'
let  lname='jone'

let des = "first name "+name+" last name" +lname+ " mike"

console.log(des);



//template literals

let name = 'mike'
let  lname='jone'

let des = `fist name ${name} and second name ${lname}`

console.log(des);

function myname(name){

    return `my name is ${name.toUpperCase()}`

}
console.log(myname(name))


//---------------------------------------------------------
//---------------------------------------------------------
//------------------------Rest Parameter ---------------------------------

//the rest parameter syntax allows a function  to accept an indefinte number of arugument of array
 

//arguments object --

function numbers(sal){

    console.log(sal)

    console.log(arguments)
}

console.log(numbers(1,2,3,4))


//rest Paramter

function numbers(...sal){

    console.log(sal)

   
}

numbers(1,2,3,4);

//spraed Operator

// allow  to spraed  elements 


let m ={
  
    "1":1,
    "2":1,
    
}

 a = [1,2,3]
let b = [1,2,3]


let  c = [...a,...b]

console.log(c)

let name = ["a","b","c"]

console.log(...name) // split array content 

//---------------------------------------------------------

let subject = "ABC"

console.log(...subject) // separate Stirng


//---------------------------------------------------------

//using object


subject= {

    A:850,
    B:400
}

let total={

    C:500,
    D:600,
    ...subject
}

console.log(subject) 
console.log(total) 


// spred function 

const num = [1,2,3,4]

function sum(a,b,c){

    return a+b+c;
}

console.log(sum(...num))


//---------------------------------------------------------
//---------------------------------------------------------
//------------------------Default Parameter ---------------------------------


 
function getyear(currentYear,Year =100){

    return currentYear+Year
}

console.log(getyear(2021,60))


const bday = function(name,byear = new Date()){


    console.log(`name is  ${name} and Date ${byear.getFullYear()}`)
}

bday("hshs",new Date("1995-11-5"))

//---------------------------------------------------------
//---------------------------------------------------------
//------------------------For of Loop ---------------------------------

const city = ["A","B","C"];

for(let i= 0; i < city.length ; i++){

    console.log(city[i])
}

//for of loop 

for(let x of city){

    console.log(x)

}

for(let x of city.entries()){

    console.log(x)

}
 

//---------------------------------------------------------
//---------------------------------------------------------
//------------------------Function ---------------------------------


function myage(age = 15){

    let x= 10;
    console.log(age+x)
}

myage(20)

//annonms

const age = function(age){

    let x= 10;
    console.log(age+x)
}

age(40);


//arrow

const getage = (age = 15,date = new Date())=>{


    console.log(`my age ${age} and brithday ${date.getFullYear()}`)

}

getage(15,new Date("1995"))


const fact = function (n){

    let f  = 1;

    for(let i = n ; i > 1; i--){

        f*=i
    }

    return f;
}

console.log(fact(5))


//---------------------------------------------------------
//---------------------------------------------------------
//------------------------Destructuring object  ---------------------------------

//extract properties and bind them to variable


const user = {

    name:"oshan",
    lname:"sahan",
    subject:{

        A:"A",
        B:"B"
    }

}

const fname = user.name;

console.log(n=fname)


const {name} = user;

console.log(name)

const {subject:A} =user

console.log(A)


//---------------------------------------------------------
//---------------------------------------------------------
//------------------------Destructuring Arrays  ---------------------------------


//extract multiple properties from and array by taking the structure




//map method

// map is store  key value pair
//holds the object premetive type and key values objets


let map = new Map();

map.set("name","oshan")
map.set("lname","sahan")
console.log(map)


console.log(`name is${map.get("name")}`)

console.log(map.has("name"));


//set function doesnot allow dublicates


const set = new Set();

set.add(1)
set.add(2)
set.add(1)

console.log(set)


for(let x of set){
    
console.log(x)

}





//---------------------------------------------------------
//---------------------------------------------------------
//------------------------ Class and methods ---------------------------------


//constructor



function Getcal (_sal){

    this.sal = _sal;
    this.getmarks =()=>{

        console.log("sal is "+this.sal)
       console.log(this)
    }
}


let sal = new Getcal("45");
console.log(sal)

sal.getmarks()


function getdata1(){

    console.log(this)
}

getdata1();


//class


class Course{

    constructor(subjet){

        this.subjet = subjet
    }


    getmarks() {
       
        console.log(this.subjet)
        console.log(this)

   }
    
}

let obj = new Course("abc")
console.log(obj)

obj.getmarks()

//---------------------------------------------------------
//---------------------------------------------------------
//------------------------ Class and methods ---------------------------------

//static key word can call without creating any instacne


class ABC {

    constructor(abc){

        this.abc= abc
    }

    static A = 'abc';

    static getTax(tax){

        console.log(tax)
        console.log(this)
    }
}

console.log(ABC.A)

ABC.getTax(50)


//---------------------------------------------------------
//---------------------------------------------------------
//------------------------ for each ---------------------------------

//excute a provide function wth each array elements
const A= [

    {name:"55", age:10},
    {name:"abc", age:20},
    {name:"abc", age:30},
]

const std= [

    ...A,
    {name:"abc", age:10},
    {name:"abc", age:20},
    {name:"abc", age:30},
]

console.log(std)

let sum = 0;

std.forEach((res)=>{
    console.log(count(res.age))
})

function count(x) {

    return  sum = sum+x
    

}



//---------------------------------------------------------
//---------------------------------------------------------
//------------------------ for each ---------------------------------

//excute a provide function wth each array elements
const A= [1,8,3,4]
A.push(5)

A.sort();

console.log(A)




let map = new Map();

map.set("1","chaml");
map.set("2","sah");


console.log(map.get('2'))

