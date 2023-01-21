// let and block scope

if (true) {
    var age = 30;
}
console.log(age);
//==================

if (true) {
    let age = 30;
    console.log(age) // 30
}
console.log(age); // RefereceError
//====================
let age = 40; //40
if (true) {
    let age = 30;
    console.log(age) // 30
}
console.log(age); // 40
//=============
let age = 40;
if (true) {
     age = 30;
    console.log(age) // 30
}
console.log(age); //30
//================

const age = 30;
age = 40;
console.log(age);//type Error 
//===========
  const array = [1,2,3];
  console.log(array); //  1 2 3 

  array.push(4);
  console.log(array); //1 2 3 4
  //==========================

  //varible hosting
  age = 30;
  console.log(age);//30
  var age;

  let age; // Reference error
  //==================
  //variable hosting

  function fn(){
    age = 30;
  }
  let age;
  fn();
  console.log(age);//30
  //===============
  function fn(){
    console.log("Hello"); //Hello
  }
  fn();
  //Arrow Function
  var fn = () => {
    console.log("Hello"); // Hello
  }
  fn();
  //===========
  var fn = (a, b) =>  a + b;
  console.log(fn(3,5));//8

  var fn = (a, b) =>{
    return a + b;
  }
  fn();
  console.log(3,6);//9


    var fn = a => a + 5; 
  setInterval(()=>{
    console.log("hello");
  }, 1000)

  //setInterval(()=> console.log('Hello'), 1000);

  //Spread operator
  let obj1 = {
    name: "Maruthi",
    age: 23,
    gender: male

  }

  let obj2 = {
    name: "Sharanappa",
    age: 25,
    gender: male,
    height: 6.5
  }

  console.log({...obj1, ...obj2});
  //For-of-Loop

  let numbers = [1,2,3,4];

  for (let number of numbers){
  console.log(number);}
  //for-in-loop

  let obj = {
    name:"maruthi",
    age: 32
  }
  for(let prop in obj){
    console.log(prop);
    console.log(obj[prop]);
  }

  //Template Literals

  let name = "Maruthi";
  let age = 30;

  var text = `Hello my name is and I'm ${name} and my age is ${age}`;
  console.log(text);

  //Destructring Arrays

  let numbers = [1,2];

  let [a, b] = numbers;

  console.log(a);
  console.log(b);

  //one more method

  let a = 1;
  let b = 2;
  [b,a]=[a, b];
  console.log(a); //2
  console.log(b);//1

  //Destructuring object in javascript

  let obj = {
    name: "Maruthi",
    age: 30
    hello: function(){
      console.log("hello");
    }

  };

  let {name, age, hello} = obj;
  console.log(name, age);

  hello();
  





