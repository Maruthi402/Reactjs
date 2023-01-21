// They are 3 types of variables:-
//1) Function and Globle scope
//2) Block scope

// let and const
// The variable declared inside a {} block cann't be accsed from the outside the block

// "var" The variable declared inside a {} block can be accsed from outside the block

//Global scope
let carName = "Maruthi Suzuki";
myFunction();

function myFunction(){
    document.write(carName);
} 

//Block scope

function myFunction(){
    let age = 30;
    document.write(age);
}
myFunction();

//Function scope
function myFunction(){
    const age = 30;
    document.write(age);
}
myFunction();