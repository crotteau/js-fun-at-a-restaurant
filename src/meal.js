// nameMenuItem
function nameMenuItem(foodName) {
  var menuItemName = (`Delicious ${foodName}`)
  return menuItemName
}

// createMenuItem
function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
}

// addIngredients
var ingredients = []

function addIngredients(foodItem, ingredients) { 
  var exists = ingredients.includes(foodItem)
    if (exists === false) {
    ingredients.push(foodItem)
    }
    return ingredients
}

// formatPrice
function formatPrice(price) {
  var priceUSD = '$' + price
  return priceUSD
}

// decreasePrice
function decreasePrice(price) {
  var newPrice = (price)* 0.9
  return newPrice
}

// createRecipe
function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


