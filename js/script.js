let mealNameInput = document.getElementById("meal-name-input");
let mealLetter = document.getElementById("meal-letter");
let meals = document.getElementById("meals");
let mealImg = document.getElementById("mealImg");
let mealTitle = document.getElementById("mealTitle");
let newMeal;

mealNameInput.addEventListener("input", async function () {
  let mealName = mealNameInput.value;
  newMeal = new Meal(mealName);
  console.log(await newMeal.getSearchMeal());
});
class Meal {
  constructor(name) {
    this.name = name;
  }
  getSearchApi() {
    return `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.name}`;
  }
  async getSearchMeal() {
    let res = await fetch(this.getSearchApi());
    let data = await res.json();
    return data.meals;
  }
}
class mealCard {
  constructor(index) {
    this.title = newMeal[index].strMeal;
    this.src=newMeal[index].strMealThumb;
  }
}
