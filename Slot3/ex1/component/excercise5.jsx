export function Exercise5() {
 
  const people = [
    { name: "Ann", age: 19 },
    { name: "Khanh", age: 22 },
    { name: "minh", age: 15 },
    { name: "Dan", age: 13 },
    { name: "Tam", age: 25 }
  ];

  
  const teens = people
    .filter(p => p.age >= 13 && p.age <= 19)
    .map(p => `${p.name} (${p.age})`);

  return (
    <>
      <h2>Exercise 5</h2>
      {teens.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </>
  );
}
