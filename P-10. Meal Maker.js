const menu = {
    _courses: {
      _appetizers: [],
      _mains: [],
      _desserts: [],
    },
    get appetizers() {
      return this._appetizers
    },
    set appetizers(appetizerIn){
      if (appetizerIn != this._appetizers){
        this._appetizers.push(appetizerIn)
      } else {
        console.log('This item is already on the menu.')
      }
    },
    get mains(){
      return this._mains
    },
    set mains(mainIn){
    if (mainIn != this._mains){
        this._mains.push(mainIn)
      } else {
        console.log('This item is already on the menu.')
      }
    },
    get desserts(){
      return this._desserts
    },
    set desserts(dessertsIn){
      if (dessertsIn != this._desserts){
        this._desserts.push(dessertsIn)
      } else {
        console.log('This item is already on the menu.')
      }
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        dessert: this.desserts
      }
  
    },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
    name: dishName,
    price: dishPrice,
    };
    this._courses[courseName].push(dish);
   
  },
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]
  },
  
  generateRandomMeal: function (){
    const appetizer = this.getRandomDishFromCourse('_appetizers');
    const main = this.getRandomDishFromCourse('_mains');
    const dessert = this.getRandomDishFromCourse('_desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} for dessert. The price is ${totalPrice} for everything.`;
  
  }
  };
  
  //adding appetizers:
  menu.addDishToCourse('_appetizers', 'French Onion Soup', 3.75);
  menu.addDishToCourse('_appetizers', 'Chicken Caesar Salad', 3.75);
  menu.addDishToCourse('_appetizers', 'Mozarella Sticks', 5.75);
  
  //adding main dishes:
  menu.addDishToCourse('_mains', 'Fish and Chips', 14.75);
  menu.addDishToCourse('_mains', 'Churrasco', 17.75);
  menu.addDishToCourse('_mains', 'Surf n Turf', 25.75);
  
  //adding desserts: 
  menu.addDishToCourse('_desserts', 'Apple Pie', 3.25);
  menu.addDishToCourse('_desserts', 'Chocolate Cake', 4.25);
  menu.addDishToCourse('_desserts', 'Caramel Volcano', 5.25);
  
  var meal = menu.generateRandomMeal();
  console.log(meal);