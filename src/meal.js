function nameMenuItem(type) {
return `Delicious ${type}`
}

 function createMenuItem(name, price, type) {
return {
   name,
  price,
   type
 }
}

function addIngredients(ingredientsOne, ingredients) {
  if (ingredients.includes(ingredientsOne)) {
    ingredients.pop();
  }

ingredients[ingredients.length] = ingredientsOne;
return ingredients
}
 //return ingredients

 function formatPrice(price) {
   return `$${price}`
 }

function decreasePrice(price) {
  return price*.9
}

function createRecipe(title, ingredients, type) {
 var recipe = {
   title,
  ingredients,
  type
 }
  return recipe

}
//  ingredients, ingredientsTwo, ingredientsThree
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
