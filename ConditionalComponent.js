export default function ConditionalComponent(){
    // const products = ["Laptop", "Phones", "Modem", ""];
    const products = [
        {id:1, name: "Maruthi", price: 500},
        {id:1, name: "Maruthi", price: 500},
        {id:1, name: "Maruthi", price: 500},
        {id:1, name: "Maruthi", price: 500}
    ];
    const fruits = ["Mango", "Lemon", "Orange"];

    const fruitsList = fruits.map((value, key)=>(
    <h1>{value} : { key}</h1>))
    // const productList  = products.map((product)=> (
    // <h1>{product.name} : ${product.price} </h1>
    // ));
    return <div>{fruitsList}</div>
}