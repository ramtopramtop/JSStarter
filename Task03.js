const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
  Instruments: [{ name: 'Hummer', price: 200 }],
};

const showContent = (items) => {
  console.log('{');
  for(const item in items){
     console.log(`${item}:`);
     console.log(items[item]);
     console.log(items[item][0])
  }
  console.log('}');  
  
}
showContent(purchase);
