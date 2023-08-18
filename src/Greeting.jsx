export function Greeting({ tittle, name = "User" }) {
  console.log(tittle, name);
  return (
    <h1>
      {tittle}, Dice {name}
    </h1>
  );
}

export function UserCard({ name, amount, married, address, greet }) {
  console. log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>💵{amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>{address.city}</li>
        <li>{address.street}</li>
      </ul>
    </div>
  );
}
