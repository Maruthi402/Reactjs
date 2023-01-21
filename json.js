//JSON is a format for storing and transporting data.

const json = `{"firstName":"Maruthi", "lastName":"Has"}`;
const obj = JSON.parse(json);

console.log(obj.lastName);
console.log(obj.firstName);
