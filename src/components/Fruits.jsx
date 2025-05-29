import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = ["Apple", "Banana ", "Litchi"];
  const arrObj = [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 20 },
    { name: "Litchi", price: 30 },
    { name: "Mango", price: 40 },
  ];
  return (
    <div>
      <h1>Fruits in a list from Fruits.jsx component</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <ul>
        {arrObj.map((obj) => (
          <li key={obj.name}>
            {obj.name} $ {obj.price}
          </li>
        ))}
      </ul>

      <h2>Rendering components inside of a component</h2>
      <ul>
        {arrObj.map((obj1) => (
          <Fruit key={obj1.name} name={obj1.name} price={obj1.price} />
        ))}
      </ul>
    </div>
  );
}
