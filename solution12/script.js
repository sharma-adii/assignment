const products = [
    { name: "TV", price: 2000 },
    { name: "Tablet", price: 800 },
    { name: "Laptop", price: 1500 },
    { name: "Headphones", price: 150 },
    { name: "Smartwatch", price: 300 },
  ];
  
  const afforableproduct = products.filter(product => product.price >= 1000);
  
  console.log(afforableproduct);
  