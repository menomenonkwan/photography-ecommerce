export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

export function calculateTotal(arr) {
  const amount = arr.reduce((acc, cur) => {
    return acc = parseFloat(cur.price) + acc;
  }, 0)
  return amount.toLocaleString("en-US", {style: "currency", currency: "USD"})
}