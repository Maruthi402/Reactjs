const person1 = {
    fullname: function(){
        return this.firstName +" "+ this.lastName;
    }
}

const person2 = {
    firstName: "Maruthi",
    lastName: "Sharanappa",
}

const person3 = person1.fullname.call(person2);
document.write(person3);

