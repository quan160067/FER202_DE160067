export function Exercise6() {
  const companies = [
    { name: "Apple", category: "Tech", start: 1976, end: 2020 },
    { name: "Google", category: "Tech", start: 1998, end: 2023 },
    { name: "IBM", category: "Tech", start: 1911, end: 2018 },
    { name: "Amazon", category: "E-commerce", start: 1994, end: 2022 },
    { name: "Netflix", category: "Media", start: 1997, end: 2021 }
  ];

  
  const sorted = [...companies].sort((a, b) => a.end - b.end);

  const top3 = sorted.slice(0, 3);

  return (
    <>
      <h2>Exercise 6</h2>
      {top3.map((c, i) => (
        <p key={i}>
          {c.name} - {c.end}
        </p>
      ))}
    </>
  );
}
