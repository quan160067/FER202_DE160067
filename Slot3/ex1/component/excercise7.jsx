export function Exercise7() {
  const companies = [
    { name: "Apple", category: "Tech", start: 1976, end: 2020 },
    { name: "Google", category: "Tech", start: 1998, end: 2023 },
  ];

 
  const company0New = { ...companies[0], start: companies[0].start + 1 };

 
  const concatAll = (...arrays) => [].concat(...arrays);

  return (
    <>
      <h2>Exercise 7</h2>
      <p>Gốc: {companies[0].name} - Start: {companies[0].start}</p>
      <p>Mới: {company0New.name} - Start: {company0New.start}</p>
      <p>Kết quả concatAll([1,2],[3],[4,5]): {concatAll([1,2],[3],[4,5]).join(", ")}</p>
    </>
  );
}
