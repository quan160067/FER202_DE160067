export function Exercise2() {
  // Tính tổng các số hợp lệ
  const sum = (...nums) => 
    nums.filter(n => typeof n === "number" && !isNaN(n))
        .reduce((a, b) => a + b, 0);

  // Tính trung bình, làm tròn 2 chữ số, nếu mảng rỗng trả 0
  const avg = (...nums) => {
    const valid = nums.filter(n => typeof n === "number" && !isNaN(n));
    return valid.length ? (sum(...valid) / valid.length).toFixed(2) : 0;
  };

  return (
    <>
      <h2>Exercise 2</h2>
      <p>sum(1, 2, 3): {sum(1, 2, 3)}</p>
      <p>sum(1, 'x', 4): {sum(1, 'x', 4)}</p>
      <p>avg(1, 2, 3, 4): {avg(1, 2, 3, 4)}</p>
      <p>avg(): {avg()}</p>
    </>
  );
}
