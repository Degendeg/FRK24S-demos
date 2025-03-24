import { useMemo } from "react";

const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const Fibonacci = ({ number, useMemoEnabled }) => {
  console.time("Fibonacci calculation");

  const result = useMemoEnabled
    ? useMemo(() => fibonacci(number), [number])
    : fibonacci(number);

  console.timeEnd("Fibonacci calculation");

  return (
    <div className="alert alert-info mt-3">
      Fibonacci för {number} är: <strong>{result}</strong>
    </div>
  );
};

export default Fibonacci;
