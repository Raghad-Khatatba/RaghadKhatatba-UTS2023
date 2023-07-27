function foodsAndDrinks() {
    var beverages = ['lemonade', 'soda', 'tea', 'water'];
    var meals = ['beans', 'chicken', 'rice'];
  
    console.log(beverages[0]);
    console.log(beverages[1]);
    console.log(beverages[2]);
    console.log(beverages[3]);
  
    console.log(meals[0]);
    console.log(meals[1]);
    console.log(meals[2]);
  }
  
  function getAge() {
    const birthDate = new Date(1985, 1, 16);
    const currentDate = new Date();
  
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    console.log(age);
  
    return age;
  }
  
  function printNumberAsWord(value) {
    const words = ['zero', 'one', 'two', 'three', 'four', 'five'];
    return words[value];
  } 