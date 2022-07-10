function createRestaurant(name) {
  var pizzaRestaurant = {
      name,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: [] }
  }
  return pizzaRestaurant
}

 function addMenuItem(pizzaRestaurant, food) {

   if (food.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(food)) {
     pizzaRestaurant.menus.lunch.push(food)
   } else if (food.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(food)) {
     pizzaRestaurant.menus.breakfast.push(food)
   } else if (food.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(food)) {
    pizzaRestaurant.menus.dinner.push(food)
  }
}

function removeMenuItem(restaurant, food, type) {
  var menuItem = restaurant.menus[type]
  var message = ""
  if (menuItem.length > 0) {
    for (var i = 0; i < menuItem.length; i++) {
      if ( menuItem[i].name === food) {
        message = `No one is eating our ${food} - it has been removed from the ${type} menu!`
        menuItem.splice(i, 1)
    }
    }
  } else {
    message = `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
  return message
}


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
