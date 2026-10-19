// Parent class: FoodItem
class FoodItem {
  #price; // private OR hidden (Encapsulation)

  constructor(name, price) {
    this.name = name; // we can create copies 
    this.setPrice(price); // use set to validate
  }

  setPrice(price) {
    if (price <= 0) {
      console.log("Price must be greater than R0. Rand");
    }
    this.#price = price; //for copies
  }

  // function to return the price
  getPrice() {
    return this.#price;
  }

  // Default delivery fee 'can be overridden' like adding new prices
  getDeliveryFee() {
    return 10;
  }
}

// Pizza class
class Pizza extends FoodItem {
  constructor(name, price, size) {
    super(name, price); // Inheritance
    this.size = size;
  }

  getDeliveryFee() {
    return 20; // Polymorphism: different fee
  }
}

// Burger class
class Burger extends FoodItem {
  constructor(name, price, isDouble) {
    super(name, price);
    this.isDouble = isDouble;
  }

  getDeliveryFee() {
    return 15;
  }
}

// Drink class
class Drink extends FoodItem {
  constructor(name, price, isCold) {
    super(name, price);
    this.isCold = isCold;
  }

  getDeliveryFee() {
    return 5;
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  viewOrder() {
    this.items.forEach(item => {
      console.log(`${item.name} - R${item.getPrice()} + Delivery R${item.getDeliveryFee()}`);
    });
  }

  getTotal() {
    let foodTotal = this.items.reduce((sum, item) => sum + item.getPrice(), 0);
    let deliveryTotal = this.items.reduce((sum, item) => sum + item.getDeliveryFee(), 0);
    return {foodTotal, deliveryTotal, finalTotal: foodTotal + deliveryTotal };
  }
}

// Create items
const pizza = new Pizza("Margherita Pizza", 80, "Large");
const burger = new Burger("Cheese Burger", 50, true);
const drink = new Drink("Coke", 20, true);

// Create order
const order = new Order();
order.addItem(pizza);
order.addItem(burger);
order.addItem(drink);

// Display order
order.viewOrder();
console.log(order.getTotal());

// Dessert class
class Dessert extends FoodItem {
  constructor(name, price, flavor) {
    super(name, price);
    this.flavor = flavor;
  }

  getDeliveryFee() {
    return 12; // Polymorphism: unique fee for desserts
  }
}

// Create dessert
const dessert = new Dessert("Chocolate Cake", 40, "Chocolate");

// Add to order
order.addItem(dessert);

// Display updated order
order.viewOrder();
console.log(order.getTotal());


