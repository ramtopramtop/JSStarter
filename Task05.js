const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'Mouse', price: 100 },
  ],
  Textile: [{ name: 'Bag', price: 50 },
            { name: 'Mouse', price: 150 },
  ],
  Instruments: [{ name: 'Hammer', price: 200 }],
};

const find = (items, searchString) => {
  let allGoods=[]; 
  for(const item in items){
    allGoods=allGoods.concat(items[item]);  
  }
  return found = allGoods.filter((element)=>element.name==searchString);
}

const result = find(purchase, 'Mousse');
console.log(result);

