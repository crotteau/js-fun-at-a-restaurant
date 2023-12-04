// createRestaurant
function createRestaurant(name) {
  var newRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [], 
      dinner: []
    }
  }; 
  return newRestaurant
}

// addMenuItem
function addMenuItem(newRestaurant, newItem) {
if ((newItem.type === "breakfast") && (!newRestaurant.menus.breakfast.includes(newItem))) {
    newRestaurant.menus.breakfast.push(newItem); 
    return newRestaurant.menus
} else if ((newItem.type === "lunch") && (!newRestaurant.menus.lunch.includes(newItem))) {
    newRestaurant.menus.lunch.push(newItem); 
    return newRestaurant.menus
} else if (newItem.type === "dinner" && (!newRestaurant.menus.dinner.includes(newItem))) {
    newRestaurant.menus.dinner.push(newItem); 
    return newRestaurant.menus
} else return newRestaurant.menus
}

// removeMenuItem
function removeMenuItem (newRestaurant, itemName, itemType) {
  var menuType = newRestaurant.menus[itemType]
  for (var i = 0; i < menuType.length; i++) {
   if (menuType[i].name === itemName) {
    menuType.splice(i, 1)
   return `No one is eating our ${itemName} - it has been removed from the ${itemType} menu!`;
  } else {
   return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
  }
}
}
// need to finish this t

// checkForFood
function checkForFood(restaurant, foodItem) {
  var menu = restaurant.menus.breakfast
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === foodItem) {
      return `Yes, we're serving ${foodItem} today!`
    } 
  } return `Sorry we aren't serving that!`
}
// my search method isn't working correctly



// find the object that they key/value pairs correspond to
module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}