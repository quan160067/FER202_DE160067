export function Exercise1() {
  const double = x => x * 2;
  const isPositive = x => x > 0;

  return (
    <>
      <h1>Hello <strong>Exercise 1</strong></h1>
      <h2>Chi tiết bài tập 1</h2>
      <p>Hàm double(5): {double(5)}</p>
      <p>isPositive(5): {isPositive(5) ? "Số Dương" : "Số Âm"}</p>
    </>
  );
}   
