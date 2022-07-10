function createRestaurant(name) {
  var pizzaRestaurant = {
      name,
      menus: { breakfast: [], lunch: [], dinner: [] }
  }
  return pizzaRestaurant
}

 function addMenuItem(pizzaRestaurant, bbqPizza) {

   if (bbqPizza.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(bbqPizza)) {
     pizzaRestaurant.menus.lunch.push(bbqPizza)
   }
   else if (bbqPizza.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(bbqPizza)) {
     pizzaRestaurant.menus.breakfast.push(bbqPizza)
   }
   else if (bbqPizza.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(bbqPizza)) {
    pizzaRestaurant.menus.dinner.push(bbqPizza)
  }
}
function removeMenuItem(pizzaRestaurant, bbqPizza, type) {
  var menuItem = pizzaRestaurant.menus[type]
  for (var i = 0; i < menuItem.length; i++) {
  if ( menuItem[i].name = bbqPizza) {
    menuItem.splice(i, 1)
    return `No one is eating our ${bbqPizza} - it has been removed from the ${type} menu!`
  }

  }

  //else if (bbqPizza.type === "breakfast" && pizzaRestaurant.menus.includes(bbqPizza)) {
    //pizzaRestaurant.menus.splice()
  //}
  //else if (bbqPizza.type === "dinner" && pizzaRestaurant.menus.includes(bbqPizza)) {
   //pizzaRestaurant.menus.splice()
 //}
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
