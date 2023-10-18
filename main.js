const latest = document.querySelector('.latest')
const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

async function getapi(url) {

    const response = await fetch(url);

    let data = await response.json();
    console.log(data);
    let infos = data.meals
    latest.innerHTML = infos.map((food) => {
   return `<div class="late">
      <img class="recip-img" src="${food.strMealThumb}" alt="">
      <h4>${food.strMeal}</h4>
    </div>`
    })
    console.log(infos)
}
getapi(apiUrl)

// async function getMeals(name) {
// const data = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name || ''}`).then(res=>res.json()).then()
// return data
// }
// // 