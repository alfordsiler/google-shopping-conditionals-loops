var data = require('../products.json');

// Write your solutions below

//Question1
var numberOfShoppingProduct = 0

for(var i = 0; i < data.items.length; i++) {
  var shopProd = data.items[i];

  if(shopProd.kind === "shopping#product") {
    numberOfShoppingProduct++;
  }
}
console.log(numberOfShoppingProduct)

//Question2

for(var i = 0; i < data.items.length; i++) {
  if(data.items[i].inventories.availabilty === "backorder") {
    console.log(data.items[i].title);
  }
}
//not working! Cant figure out how to access the right properties
// console.log(data.items);

//Questions3
for(var i = 0; i < data.items.length; i++) {
  if(data.items[i].images.link > 1) {
    console.log(data.items[i].title);
  }
}
//also not working!

//Question4
for(var i = 0; i < data.items.length; i++) {
  if(data.items[i].brand === "Canon") {
    console.log(data.items[i].?????)
  }
}
//not working :(

//Question5
for(var i = 0; i < data.items.length; i++) {
  if(data.items[i].brand === "Canon" && data.items[i].author === "eBay") {
    console.log(data.items[i].?????);
  }
}

//not working :(

//Question6
for(var i = 0; i < data.items.length; i++) {
  console.log(data.items[i].)
}
