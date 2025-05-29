export default function Fruit({ name, price }) {
  return (
    <div>
      <li>
        {/* {name}${price} */}
        {price > 5 ? (
          <h3>
            {name}${price}
          </h3>
        ) : (
          ""
        )}
      </li>
    </div>
  );
}
