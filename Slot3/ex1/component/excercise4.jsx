export function Exercise4() {
  const ages = [33, 12, 20, 16];

  const [first, , third = 0, ...restAges] = ages;

  return (
    <>
      <h2>Exercise 4</h2>
      <p>First: {first}</p>
      <p>Third: {third}</p>
      <p>RestAges: {restAges.join(", ")}</p>
    </>
  );
}
