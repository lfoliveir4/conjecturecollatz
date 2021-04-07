let result = 0;
let counts = [];
let numbers = [];
const arrayRange = [...Array(1000000).keys()];

const findConjectureCollatz = (n) => {
  if (n > 1) {
    result = n % 2 === 0 ? n / 2 : n * 3 + 1;

    numbers.push(result);

    return findConjectureCollatz(result);
  }

  return n;
};

arrayRange.every((item) => {
  let result = findConjectureCollatz(item);

  if (result >= 1) {
    counts.push({ number: item, items: numbers.length });
    numbers = [];
  }

  return true;
});

if (!counts.length) {
  throw new Error("Array count not found");
}

const max = counts.reduce((prev, current) => {
  return prev.items > current.items ? prev : current;
});

console.log(max);
