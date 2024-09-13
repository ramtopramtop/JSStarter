const items = [
  { price: 40 },
  { price: 120 },
  { price: '505' },
  { price: 350 }
];

const calculateTotal = (items) => {
  let result = items.map((item)=>{
    if ((typeof (item.price) != 'number') || (item.price < 0)) throw 'Массив содержит не число или отрицательное число';
    return item.price;
  });
  return result.reduce((accumulator, currentValue) => accumulator + currentValue,0);
}

console.log(`Total price: ${calculateTotal(items)}`);
//new task