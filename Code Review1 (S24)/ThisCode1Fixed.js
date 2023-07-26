// Function to log foods and drinks
function logFoodsAndDrinks() {
  const beverages = ['lemonade', 'soda', 'tea', 'water'];
  const meals = ['beans', 'chicken', 'rice'];

  // Log beverages
  beverages.forEach((beverage) => {
    console.log(beverage);
  });

  // Log meals
  meals.forEach((meal) => {
    console.log(meal);
  });
}

// Function to calculate age
function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();

  const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
  console.log(ageInYears);
}

logFoodsAndDrinks(); // Call the function to log foods and drinks
calculateAge('1985-02-16'); // Call the function to calculate age
