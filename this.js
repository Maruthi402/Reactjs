const person = {
    firstNmae: "Maruthi",
    lastName: "Sharanappa",
    age: 35,
    eyeColor: "red",
    height: 6.5,
    id: 5566,
    fullName: function(){
        return this.firstNmae + '' + this.lastName;
    }
}
console.log(person.fullName());



