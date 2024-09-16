const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'Mouse', price: 100 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
  Instruments: [{ name: 'Hammer', price: 200 }],
};

const find = (items, searchString) => {
  for(const item in items){
    let found = items[item].find((element)=>element.name==searchString);
    if (typeof(found) !='undefined') return found;
  }
}

const result = find(purchase, 'Bag');
console.log(result);

