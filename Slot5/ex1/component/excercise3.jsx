export function Exercise3() {

  const person = {
    name: "Ann",
    address: {
      street: "Hoa Hai",
      city: "Da Nang"
    }
  };


  const {
    address: { street, city = "Unknown City" }
  } = person;

  return (
    <>
      <h2>Exercise 3</h2>
      <p>Street: {street}</p>
      <p>City: {city}</p>
    </>
  );
}
