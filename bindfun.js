const person1 = {
    firstName: "Maruthi123",
    lastName: "Sharanappa123",
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Maruthi",
    lastName: "Sharanappa",
}

const fullname = person1.fullname.bind(person2);
console.log(fullname());

