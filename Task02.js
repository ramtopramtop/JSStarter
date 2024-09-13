const items = [
  { price: 40 },
  { price: 120 },
  { price: 505 },
  { price: 350 }
];

const calculateTotal = (items) => {
  let amount = 0;
  for (const item of items) {
    if ((typeof (item.price) != 'number') || (item.price < 0)) throw 'Массив содержит не число или отрицательное число';
    amount += item.price;
  };
  return amount;
}

console.log(`Total price: ${calculateTotal(items)}`);